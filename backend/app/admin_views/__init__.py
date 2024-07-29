from flask_admin import Admin
from app.admin_views.user import register_user_admin_views


def register_admin_views(app, db):
    admin = Admin(app, name='YourApp Admin', template_mode='bootstrap4')
    register_user_admin_views(admin, db)
