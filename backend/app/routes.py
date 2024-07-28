from flask import Blueprint, request, jsonify
from .models import User

# Create blueprints for routes
auth_routes = Blueprint('auth', __name__)
user_routes = Blueprint('user', __name__)


# Signup Route
@auth_routes.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')

    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({'message': 'User already exists'}), 400

    user = User(
        username=username,
        email=email,
        first_name=first_name,
        last_name=last_name
    )
    user.set_password(password)
    user.save_to_db()

    return jsonify({'message': 'User created successfully'}), 201


# Login Route
@auth_routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        # For simplicity, not implementing session or JWT here
        return jsonify({'message': 'Login successful'}), 200

    return jsonify({'message': 'Invalid credentials'}), 401


# Logout Route
@auth_routes.route('/logout', methods=['POST'])
def logout():
    # For simplicity, not implementing actual logout logic
    return jsonify({'message': 'Logout successful'}), 200


# User Profile Route
@user_routes.route('/profile/<int:user_id>', methods=['GET', 'PUT'])
def user_profile(user_id):
    user = User.query.get_or_404(user_id)

    if request.method == 'GET':
        return jsonify({
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'kills': user.kills,
            'deaths': user.deaths
        })

    if request.method == 'PUT':
        data = request.get_json()
        user.first_name = data.get('first_name', user.first_name)
        user.last_name = data.get('last_name', user.last_name)
        user.save_to_db()
        return jsonify({'message': 'Profile updated successfully'}), 200
