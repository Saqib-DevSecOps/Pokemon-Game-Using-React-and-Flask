from flasgger import Swagger
from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from config import Config

# Initialize extensions
db = SQLAlchemy()
bcrypt = Bcrypt()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)  # Initialize Flask-Migrate


    swagger = Swagger(app, template_file='swagger_docs.yml')

    # Register blueprints
    from .routes.auth_routes import auth
    app.register_blueprint(auth)

    return app
