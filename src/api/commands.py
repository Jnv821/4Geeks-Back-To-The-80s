
import click
from api.models import db, Users, Album
from api.Albums import Albums as Album_list
"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-albums")
    def insert_test_albums():
        print("Adding the album to the database")
        for Album_register in Album_list:
            album = Album()
            album.author = Album_register["artist"]
            album.title = Album_register["album"]
            album.release_year = Album_register["year"]
            album.spotify_url = Album_register["link_api_spotify"]
            album.album_cover = Album_register["cover"]
            db.session.add(album)
            db.session.commit()
        print("Albums were added")

            #print(f'{Album["artist"]}, {Album["year"]}, {Album["album"]}\n{Album["link_api_spotify"]}\n\n')
        ### Insert the code to populate others tables if needed