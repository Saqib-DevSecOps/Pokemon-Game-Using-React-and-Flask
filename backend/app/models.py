from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(60), nullable=False)
    last_name = db.Column(db.String(60), nullable=False)
    password = db.Column(db.String(60), nullable=False)

    pokemons = db.relationship('Pokemon', backref='owner', lazy=True)
    kills = db.Column(db.Integer, default=0)
    deaths = db.Column(db.Integer, default=0)

    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<User %r>' % self.username

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()


class Pokemon(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pokemon_name = db.Column(db.String(60), unique=True, nullable=False)
    base_hp = db.Column(db.Integer, nullable=False)
    base_attack = db.Column(db.Integer, nullable=False)
    base_defense = db.Column(db.Integer, nullable=False)
    front_shiny_sprite = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return '<Pokemon %r>' % self.pokemon_name

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_pokemon(self):
        db.session.delete(self)
        db.session.commit()

    def attack(self, pokemon):
        if self.base_attack > pokemon.base_defense:
            pokemon.base_hp -= self.base_attack - pokemon.base_defense
            db.session.commit()
            if pokemon.base_hp < 1:
                owner = User.query.get(pokemon.user_id)
                owner.deaths += 1
                owner2 = User.query.get(self.user_id)
                owner2.kills += 1
                db.session.commit()
                pokemon.delete_pokemon()
