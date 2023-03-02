"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os, bcrypt
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Album
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token, jwt_required
import app

api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = Users.query.filter_by(username=username).first()

    if not user: 
        return jsonify({"msg": "Bad username or password"}), 401

    if bcrypt.checkpw(password.encode('utf-8'), user.password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    
    return jsonify({"msg": "Bad username or password"}), 401

@api.route("/albums", methods=["GET"])
def get_album ():
    albums = Album.query.all()
    albums_list = [album.serialize() for album in albums]
    response= {
        "albums" : albums_list
    }
    return jsonify(response), 200

@api.route('/albums/year/<int:year>', methods=["GET"])
def get_album_by_year(year):
    albums = Album.query.filter_by(release_year=year)
    albums_list = [album.serialize() for album in albums]

    response = {
        "albums" : albums_list
    }
    # Error handling
    if response["albums"] == []:
        return jsonify({"Error": "The year you provided is not in range. Make sure the year is between 1980 and 1989"}), 404

    return jsonify(response), 200

@api.route('/albums/<int:id>', methods=['GET'])
def get_album_by_id(id):
    album = Album.query.get(id)
    try: 
        response = {
            "album": album.serialize()
        }
        return jsonify(response)
    except AttributeError:
        return({"Error" : "The album requested for was either deleted or has not been created yet."}), 404
    return jsonify(response), 200



@api.route('/token/spotify', methods=['GET'])
def get_token():
    try:    
        response_body = app.spotify_token
        return jsonify(response_body), 200
    except AttributeError:
        return jsonify({"Error": "Check if the spotify connection is enabled server-side or Contact the developers."}), 500

@api.route('/register', methods=['POST'])
def register():
    data = request.json
    if not data["username"]:
        return jsonify({"Error": "Username not provided"}) , 401
    
    if not data["password"]:
        return jsonify({"Error": "Password not provided"}), 401
    
    if not data["email"]:
        return jsonify({"Error": "Email not provided"}), 401
    
    if not data["description"]:
        data["description"] = f"Hello! I'm {data['username']} and I love the 80's music."

    profile_image_url = f"https://source.boringavatars.com/marble/120/{data['username']}"
    
    hashed_password = bcrypt.hashpw(data["password"].encode('utf-8'), bcrypt.gensalt())

    user = Users(username = data["username"], password = hashed_password, email=data["email"], description = data["description"], profile_image = profile_image_url, is_active=True)
    
    db.session.add(user)
    db.session.commit()
    
    return jsonify({"msg": f"Created the user {data['username']}"}), 200


@api.route('/profile/<int:id>', methods=['GET'])
def get_user_profile(id):
    user = Users.query.get(id)
    return jsonify(user.serialize())

@api.route('/favorites', methods=['POST'])
@jwt_required()
def handle_favorites():
    username = get_jwt_identity()
    data = request.json

    # Get the user & album.
    user = Users.query.filter_by(username=username).first()
    album = Album.query.get(data["id"])
    
    # This gets the favorites of the current user and serializes it.
    user_favorite_albums = user.favorited_albums
    user_favorite_albums_list = [user_favorite_album.serialize() for user_favorite_album in user_favorite_albums]

    if not any(alb['id'] == int(data['id']) for alb in user_favorite_albums_list):
        # This condition returns TRUE if the album with the ID provided is NOT in user_favorite_albums_list.
        # Thus it should be added to the favorites. Otherwise it should be removed.
        user.favorited_albums.append(album)
        db.session.add(user)
        db.session.commit()
        
        return jsonify({"msg" : "The album was not in favorites. Added the album to favorites."})
    else: 
    # Delete the favorites
        user.favorited_albums.remove(album)
        db.session.add(user)
        db.session.commit()

        return jsonify({"msg": "The album was in favorites. Deleted the album from favorites."})
