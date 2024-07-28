from flasgger import Swagger
from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_jwt_extended import JWTManager

from config import Config

# Initialize extensions
db = SQLAlchemy()
bcrypt = Bcrypt()
migrate = Migrate()
jwt = JWTManager()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this to a strong secret key

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)  # Initialize Flask-Migrate
    jwt.init_app(app)

    swagger = Swagger(app, template_file='swagger_docs.yml')

    # Register blueprints
    from .routes.auth_routes import auth
    app.register_blueprint(auth)
    from .routes.pokemon_routes import pokemon_routes
    app.register_blueprint(pokemon_routes)

    return app
