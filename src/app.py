"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os, base64, time, threading, traceback
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# Function to encode, decode send and get the request token 

def generate_token(client_id, secret):
    # Transform client_id:secret into bytes to encode into 64 then decode to sring.
    token_bytes = f"{client_id}:{secret}".encode("ascii")
    base64_token = base64.b64encode(token_bytes)
    ready_token = base64_token.decode("ascii")
    print(ready_token)
    # Make the request and its options
    headers =  {
        'Authorization': f"Basic {ready_token}",
        'Contet-Type': 'application/x-www-form-urlencoded'
    }
    data = {
        'grant_type': 'client_credentials'
    }
    req = requests.post("https://accounts.spotify.com/api/token", headers=headers, data=data)
    global spotify_token 
    spotify_token = req.json()

def run_every_n_times(delay, task):
    next_time = time.time() + delay
    while True:
        time.sleep(max(0 , next_time - time.time()))
    try:
        task()
    except Exception():
        traceback.print_exc()
    # Skip the task if we are behind the schedule
    next_time += (time.time() - next_time) // delay * delay + delay

# Create the thread to run the spotify token getter.

threading.Thread(target=lambda : run_every_n_times(3600, generate_token(client_id, secret)))
# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
