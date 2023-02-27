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
import app 

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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

@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    
    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

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
        return jsonify({"Error": "Username not provided"}) 
    
    if not data["password"]:
        return jsonify({"Error": "Password not provided"})
    
    if not data["email"]:
        return jsonify({"Error": "Email not provided"})
    
    if not data["description"]:
        data["description"] = f"Hello! I'm {data['username']} and I love the 80's music."

    profile_image_url = f"https://source.boringavatars.com/marble/120/{data['username']}"
    
    hashed_password = bcrypt.hashpw(data["password"].encode('utf-8'), bcrypt.gensalt())

    user = Users(username = data["username"], password = hashed_password, email=data["email"], description = data["description"], profile_image = profile_image_url, is_active=True)
    
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": f"Created the user {data['username']}, with password: {hashed_password}"})