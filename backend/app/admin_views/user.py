from flask_admin.contrib.sqla import ModelView
from app.models.user import User, Pokemon

def register_user_admin_views(admin, db):
    admin.add_view(ModelView(User, db.session, name='User View'))
    admin.add_view(ModelView(Pokemon, db.session, name='Pokemon View'))
