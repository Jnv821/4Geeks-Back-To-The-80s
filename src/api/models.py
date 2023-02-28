from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

favorites = db.Table('favorites',
    db.Column('favorite_id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('album_id', db.Integer, db.ForeignKey('album.id')),
)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(32), unique=True, nullable=False)
    password = db.Column(db.LargeBinary(255), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    description = db.Column(db.String(255), unique=False, nullable=True)
    profile_image = db.Column(db.String(2048), unique=False, nullable=False)
    favorited_albums = db.relationship('Album', secondary=favorites, backref='favorited_by')
    
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

class Album(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    artist = db.Column(db.String(255), nullable=False)
    release_year = db.Column(db.Integer, nullable=False)
    album_cover = db.Column(db.String(2048), nullable=False)
    spotify_url = db.Column(db.String(2048), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Album {self.title} [{self.id}] - {self.spotify_url}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "author": self.artist,
            "release_year": self.release_year,
            "album_cover": self.album_cover,
            "spotify_url": self.spotify_url
        }


