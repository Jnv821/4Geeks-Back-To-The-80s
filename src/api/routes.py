"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Album
from api.utils import generate_sitemap, APIException
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

    response = {
        "album": album.serialize()
    } 
    # Error handling
    if response["album"] == []:
        return jsonify({"Error: The album with the id provided does not exist. Make sure the id is not hardcoded."}), 404

    return jsonify(response,), 200

@api.route('/token', methods=['GET'])
def get_token():
    
    response_body = app.spotify_token

    return jsonify(response_body), 200
