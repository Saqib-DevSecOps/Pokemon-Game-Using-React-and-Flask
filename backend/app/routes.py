from flask_restful import Resource, Api
from flask import jsonify, request

api = Api()

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

# Add more resources as needed
# For example:
# class PokemonList(Resource):
#     def get(self):
#         # Implement logic to return a list of Pokemon
#         return {'pokemons': []}

def init_routes(app):
    api.init_app(app)
    api.add_resource(HelloWorld, '/api/hello')
    # Register more resources here
    # api.add_resource(PokemonList, '/api/pokemons')
