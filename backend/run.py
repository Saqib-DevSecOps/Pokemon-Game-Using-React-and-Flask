from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_login import LoginManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)
api = Api(app)
login_manager = LoginManager(app)
login_manager.login_view = 'signin'
login_manager.login_message_category = 'info'

from app import routes

if __name__ == '__main__':
    app.run(debug=True)
