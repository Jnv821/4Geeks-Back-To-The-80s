from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

favorites = db.Table('favorites',
    db.Column('favorite_id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('song_id', db.Integer, db.ForeignKey('song.id')),
    db.Column('album_id', db.Integer, db.ForeignKey('album.id')),
    db.Column('artist_id', db.Integer, db.ForeignKey('artist.id'))
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(32), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    description = db.Column(db.String(255), unique=False, nullable=True)
    favorited_songs = db.relationship('Song',secondary=favorites, backref='favorited_by')
    favorited_albums = db.relationship('Album', secondary=favorites, backref='favorited_by')
    favorited_artists = db.relationship('Artist', secondary=favorites, backref='favorited_by')

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

class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    spotify_url = db.Column(db.String(2048), unique=True, nullable=False)
    def __repr__(self):
        return  f'<Artist {self.id} - {self.spotify_url}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "spotify_url" : self.spotify_url
        }

class Album(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    spotify_url = db.Column(db.String(2048), unique=True, nullable=False)
    def __repr__(self):
        return f'<Alubm {self.id} - {self.spotify_url}>'
    def serialize(self):
        return {
            "id": self.id,
            "spotify_url": self.spotify_url
        }

