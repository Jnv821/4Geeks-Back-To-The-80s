"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Album
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

# Create flask api
api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


=======
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

@api.route('/token', methods=['GET'])
def get_token():
    try:    
        response = app.spotify_token
        return jsonify(response), 200
    except AttributeError:
        return jsonify({"Error": "Check if the spotify connection is enabled server-side."}), 500
>>>>>>> 79d2e99da943a97e56862b7435c246230e3b9d93
