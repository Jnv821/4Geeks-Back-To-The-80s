from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(32), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "is_active": self.is_active
            # do not serialize the password, its a security breach
        }
        
class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    spotify_url = db.Column(db.String(2048), unique=True, nullable=False)
    def __repr__(self):
        return  f'<Song {self.id} - {self.spotify_url}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "spotify_url" : self.spotify_url
        }
