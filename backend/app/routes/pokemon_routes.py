from flask_jwt_extended import jwt_required, get_jwt_identity
import requests
from random import randint
from flask import request, jsonify, Blueprint

from app.models.user import Pokemon, User

pokemon_routes = Blueprint('pokemon_routes', __name__)


@pokemon_routes.route('/api/pokemon', methods=["POST"])
@jwt_required()
def pokemon():
    data = request.get_json()
    pokemon_name = data.get('pokemon_name')
    if pokemon_name is None or pokemon_name == "":
        return jsonify({'message': 'No pokemon name'}), 400

    def pokemon_info(p_name):
        response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{p_name}')
        if response.ok:
            data = response.json()
            print("API Response:", data)  # Debugging line to check response structure

            return {
                'pokemon_name': data.get('name', 'Unknown'),
                'base_hp': data['stats'][0]['base_stat'],
                'base_attack': data['stats'][1]['base_stat'],
                'base_defense': data['stats'][2]['base_stat'],
                'front_shiny_sprite': data['sprites'].get('front_default'),
                'other_sprite': data['sprites'].get('other', {}).get('official-artwork', {}).get('front_default'),
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
    front_shiny_sprite = the_pokemon['other_sprite'] or the_pokemon.get('front_shiny_sprite')
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


@pokemon_routes.route('/api/my/pokemon', methods=["GET"])
@jwt_required()
def my_pokemon():
    user_id = get_jwt_identity()
    pokemon = Pokemon.query.filter_by(user_id=user_id).all()
    if not pokemon:
        return jsonify({"pokemon": []}), 200
    return jsonify({"pokemon": [p.to_dict() for p in pokemon]}), 200


@pokemon_routes.route('/api/pokemon/delete/<int:pokemon_id>', methods=["POST"])
@jwt_required()
def delete_pokemon(pokemon_id):
    user_id = get_jwt_identity()
    pokemon = Pokemon.query.filter_by(id=pokemon_id, user_id=user_id).first()

    if not pokemon:
        return jsonify({"error": "Pokemon not found"}), 404

    pokemon.delete_pokemon()
    return jsonify({"success": True}), 200


@pokemon_routes.route('/api/battle', methods=["POST"])
@jwt_required()
def battle():
    current_user_id = get_jwt_identity()
    pokemons = Pokemon.query.filter_by(user_id=current_user_id).all()

    data = request.get_json()
    opponent_user_name = data.get('opponent', None)

    if not opponent_user_name:
        return jsonify({"error": "Opponent username is required"}), 400

    if opponent_user_name.lower() == "random":
        opponents = User.query.all()
        if not opponents:
            return jsonify({"error": "No opponents available"}), 404

        random_index = randint(0, len(opponents) - 1)
        opponent_user_name = opponents[random_index].username
        while opponent_user_name == current_user_id:
            random_index = randint(0, len(opponents) - 1)
            opponent_user_name = opponents[random_index].username

    opp = User.query.filter_by(username=opponent_user_name).first()
    if not opp:
        return jsonify({"error": "User does not exist"}), 404

    enemy_pokemons = Pokemon.query.filter_by(user_id=opp.id).all()
    if not enemy_pokemons:
        return jsonify({"error": "No Pokemons found for the opponent"}), 404

    kills = opp.kills
    deaths = opp.deaths

    response_data = {
        "pokemons": [pokemon.to_dict() for pokemon in pokemons],
        "enemy_pokemons": [pokemon.to_dict() for pokemon in enemy_pokemons],
        "opponent": {
            "username": opp.username,
            "kills": kills,
            "deaths": deaths
        }
    }

    return jsonify(response_data), 200


@pokemon_routes.route('/api/battle/<opponent_user_name>/fight', methods=["GET", "POST"])
@jwt_required()
def fight(opponent_user_name):
    current_user_id = get_jwt_identity()
    pokemons = Pokemon.query.filter_by(user_id=current_user_id).all()
    enemy_pokemons = Pokemon.query.join(User).filter(User.username == opponent_user_name).all()

    if not enemy_pokemons:
        return jsonify({"error": "No Pokemons found for the opponent"}), 404

    if request.method == "POST":
        data = request.get_json()
        attacker_name = data.get('attacker', '').capitalize()
        defender_name = data.get('defender', '').capitalize()

        if not attacker_name or not defender_name:
            return jsonify({"error": "Attacker and Defender are required"}), 400

        pokemon1 = Pokemon.query.filter_by(pokemon_name=attacker_name, user_id=current_user_id).first()
        pokemon2 = Pokemon.query.filter_by(pokemon_name=defender_name, user_id=enemy_pokemons[0].user_id).first()

        if pokemon1 not in pokemons:
            return jsonify({"error": "Invalid attacker"}), 400
        if pokemon2 not in enemy_pokemons:
            return jsonify({"error": "Invalid defender"}), 400

        # Attack logic
        pokemon1.attack(pokemon2)
        if pokemon2 and pokemon2 not in enemy_pokemons:
            enemy_pokemons = Pokemon.query.join(User).filter(User.username == opponent_user_name).all()

        if enemy_pokemons:
            enemy_pokemon = enemy_pokemons[randint(0, len(enemy_pokemons) - 1)]
            enemy_pokemon.attack(pokemon1)

        if not pokemons:
            current_user = User.query.get(current_user_id)
            current_user.deaths += 1
            current_user.save_to_db()
            return jsonify({"message": "You lost!", "kills": current_user.kills, "deaths": current_user.deaths}), 200
        if not enemy_pokemons:
            current_user = User.query.get(current_user_id)
            current_user.kills += 1
            current_user.save_to_db()
            return jsonify({"message": "You won!", "kills": current_user.kills, "deaths": current_user.deaths}), 200

        updated_pokemons = Pokemon.query.filter_by(user_id=current_user_id).all()
        updated_enemy_pokemons = Pokemon.query.join(User).filter(User.username == opponent_user_name).all()

        current_user = User.query.get(current_user_id)

        return jsonify({
            "message": "Battle in progress",
            "pokemons": [pokemon.to_dict() for pokemon in updated_pokemons],
            "enemy_pokemons": [pokemon.to_dict() for pokemon in updated_enemy_pokemons],
            "kills": current_user.kills,
            "deaths": current_user.deaths
        }), 200

    return jsonify({
        "pokemons": [pokemon.to_dict() for pokemon in pokemons],
        "enemy_pokemons": [pokemon.to_dict() for pokemon in enemy_pokemons]
    }), 200
