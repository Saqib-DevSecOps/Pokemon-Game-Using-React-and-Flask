from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_login import current_user
import requests
from random import randint
from flask import request, jsonify, Blueprint

from app.models.user import Pokemon

pokemon_routes = Blueprint('pokemon', __name__)


@pokemon_routes.route('/api/pokemon', methods=["POST"])
@jwt_required()
def pokemon():
    data = request.get_json()
    pokemon_name = data.get('pokemon_name')

    def pokemon_info(p_name):
        response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{p_name}')
        if response.ok:
            data = response.json()
            return {
                'pokemon_name': data['forms'][0]['name'],
                'base_hp': data['stats'][0]['base_stat'],
                'base_attack': data['stats'][1]['base_stat'],
                'base_defense': data['stats'][2]['base_stat'],
                'front_shiny_sprite': data['sprites']['front_default'],
                'other_sprite': data['sprites']['other']['official-artwork']['front_default'],
            }

        return None

    if pokemon_name.lower() == "random":
        a = randint(1, 1008)
        b = randint(10001, 10271)
        c = randint(1, 1279)
        pokemon_index = a if c < 1009 else b
        the_pokemon = pokemon_info(pokemon_index)
    else:
        the_pokemon = pokemon_info(pokemon_name.lower())

    if not the_pokemon:
        return jsonify({"error": "Pokemon not found"}), 404

    pokemon_name = the_pokemon['pokemon_name'].capitalize()
    base_hp = the_pokemon['base_hp']
    base_attack = the_pokemon['base_attack']
    base_defense = the_pokemon['base_defense']
    front_shiny_sprite = the_pokemon.get('front_shiny_sprite') or the_pokemon['other_sprite']
    user_id = get_jwt_identity()
    if not Pokemon.query.filter_by(pokemon_name=pokemon_name).first():
        if Pokemon.query.filter_by(user_id=user_id).count() < 5:
            pokemon = Pokemon(pokemon_name, base_hp, base_attack, base_defense, front_shiny_sprite, user_id)
            pokemon.save_to_db()
            return jsonify(the_pokemon), 201
        else:
            return jsonify({"error": "You already have the maximum number of Pokemon."}), 400
    else:
        return jsonify({"error": "That Pokemon already has a trainer."}), 400


@pokemon_routes.route('/api/my/pokemon/', methods=["GET"])
@jwt_required()
def my_pokemon():
    user_id = get_jwt_identity()
    pokemon = Pokemon.query.filter_by(user_id=user_id)
    return jsonify({"pokemon": pokemon.all()}), 200


@pokemon_routes.route('/api/pokemon/delete/<int:pokemon_id>/', methods=["POST"])
def delete_pokemon(pokemon_id):
    user_id = get_jwt_identity()
    pokemon = Pokemon.query.filter_by(id=pokemon_id).first()
    if user_id != pokemon.user_id:
        return jsonify({"error": "You do not have permission to delete this pokemon."}), 403

    if not pokemon:
        return jsonify({"error": "Pokemon not found"}), 404
    pokemon.delete_pokemon()
    return jsonify({"success": True}), 200
