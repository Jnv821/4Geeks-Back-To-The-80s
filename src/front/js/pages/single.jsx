import React, { useState, useEffect, useContext } from "react";
import "../../styles/single.css";
import Navbar from "../component/navbar.js";
import Footer from "../component/footer.js";

export const Single = (props) => {
  let [url, setUrl] = useState(props.url);
  let [album, setAlbum] = useState([]);
  let json = {
    "album_type": "album",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
        },
        "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
        "id": "3Nrfpe0tUJi4K4DXYWgMUX",
        "name": "BTS",
        "type": "artist",
        "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
      }
    ],
    "copyrights": [
      {
        "text": "© 2019 BIGHIT MUSIC",
        "type": "C"
      },
      {
        "text": "℗ 2019 BIGHIT MUSIC",
        "type": "P"
      }
    ],
    "external_ids": {
      "upc": "192641899195"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/album/2KqlAl1Kl5fZvbFgJ0qFB6"
    },
    "genres": [],
    "href": "https://api.spotify.com/v1/albums/2KqlAl1Kl5fZvbFgJ0qFB6",
    "id": "2KqlAl1Kl5fZvbFgJ0qFB6",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e0218d0ed4f969b376893f9a38f",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d0000485118d0ed4f969b376893f9a38f",
        "width": 64
      }
    ],
    "label": "BIGHIT MUSIC",
    "name": "MAP OF THE SOUL : PERSONA",
    "popularity": 78,
    "release_date": "2019-04-12",
    "release_date_precision": "day",
    "total_tracks": 7,
    "tracks": {
      "href": "https://api.spotify.com/v1/albums/2KqlAl1Kl5fZvbFgJ0qFB6/tracks?offset=0&limit=50&market=ES&locale=pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6",
      "items": [
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
              },
              "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              "id": "3Nrfpe0tUJi4K4DXYWgMUX",
              "name": "BTS",
              "type": "artist",
              "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
            }
          ],
          "disc_number": 1,
          "duration_ms": 171023,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2GXWzWPsYlTZcvVW8JIu69"
          },
          "href": "https://api.spotify.com/v1/tracks/2GXWzWPsYlTZcvVW8JIu69",
          "id": "2GXWzWPsYlTZcvVW8JIu69",
          "is_local": false,
          "is_playable": true,
          "name": "Intro : Persona",
          "preview_url": "https://p.scdn.co/mp3-preview/358a4c94fba974bd7f47243704c35543419cd533?cid=46d19818e4d7481cb4270ca72ab22f0e",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2GXWzWPsYlTZcvVW8JIu69"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
              },
              "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              "id": "3Nrfpe0tUJi4K4DXYWgMUX",
              "name": "BTS",
              "type": "artist",
              "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2"
              },
              "href": "https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2",
              "id": "26VFTg2z8YR0cCuwLzESi2",
              "name": "Halsey",
              "type": "artist",
              "uri": "spotify:artist:26VFTg2z8YR0cCuwLzESi2"
            }
          ],
          "disc_number": 1,
          "duration_ms": 229773,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4a9tbd947vo9K8Vti9JwcI"
          },
          "href": "https://api.spotify.com/v1/tracks/4a9tbd947vo9K8Vti9JwcI",
          "id": "4a9tbd947vo9K8Vti9JwcI",
          "is_local": false,
          "is_playable": true,
          "name": "Boy With Luv (feat. Halsey)",
          "preview_url": "https://p.scdn.co/mp3-preview/7480c253d5f59513b38b42f47ec6079a822ab85e?cid=46d19818e4d7481cb4270ca72ab22f0e",
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:4a9tbd947vo9K8Vti9JwcI"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
              },
              "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              "id": "3Nrfpe0tUJi4K4DXYWgMUX",
              "name": "BTS",
              "type": "artist",
              "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
            }
          ],
          "disc_number": 1,
          "duration_ms": 224225,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0jSccBRnhNU4KtACMQPvco"
          },
          "href": "https://api.spotify.com/v1/tracks/0jSccBRnhNU4KtACMQPvco",
          "id": "0jSccBRnhNU4KtACMQPvco",
          "is_local": false,
          "is_playable": true,
          "name": "Mikrokosmos",
          "preview_url": "https://p.scdn.co/mp3-preview/bba1917cfca320d9cd3077dea00e73e342e357c0?cid=46d19818e4d7481cb4270ca72ab22f0e",
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:0jSccBRnhNU4KtACMQPvco"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
              },
              "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              "id": "3Nrfpe0tUJi4K4DXYWgMUX",
              "name": "BTS",
              "type": "artist",
              "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
            }
          ],
          "disc_number": 1,
          "duration_ms": 226321,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3LSjYk6sFQaLi0MjtWcm8P"
          },
          "href": "https://api.spotify.com/v1/tracks/3LSjYk6sFQaLi0MjtWcm8P",
          "id": "3LSjYk6sFQaLi0MjtWcm8P",
          "is_local": false,
          "is_playable": true,
          "name": "Make It Right",
          "preview_url": "https://p.scdn.co/mp3-preview/a389255df8ce75c3b1b402cb03f4e260ea287156?cid=46d19818e4d7481cb4270ca72ab22f0e",
          "track_number": 4,
          "type": "track",
          "uri": "spotify:track:3LSjYk6sFQaLi0MjtWcm8P"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
              },
              "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              "id": "3Nrfpe0tUJi4K4DXYWgMUX",
              "name": "BTS",
              "type": "artist",
              "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
            }
          ],
          "disc_number": 1,
          "duration_ms": 234177,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6Yc3tjFCVR2bfAQFRTZBef"
          },
          "href": "https://api.spotify.com/v1/tracks/6Yc3tjFCVR2bfAQFRTZBef",
          "id": "6Yc3tjFCVR2bfAQFRTZBef",
          "is_local": false,
          "is_playable": true,
          "name": "HOME",
          "preview_url": "https://p.scdn.co/mp3-preview/484b81c307c533c664b9a71f9ea1b51b5e366e70?cid=46d19818e4d7481cb4270ca72ab22f0e",
          "track_number": 5,
          "type": "track",
          "uri": "spotify:track:6Yc3tjFCVR2bfAQFRTZBef"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
              },
              "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              "id": "3Nrfpe0tUJi4K4DXYWgMUX",
              "name": "BTS",
              "type": "artist",
              "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
            }
          ],
          "disc_number": 1,
          "duration_ms": 227275,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7cgWWkpUaS94xoWI8lMGiI"
          },
          "href": "https://api.spotify.com/v1/tracks/7cgWWkpUaS94xoWI8lMGiI",
          "id": "7cgWWkpUaS94xoWI8lMGiI",
          "is_local": false,
          "is_playable": true,
          "name": "Jamais Vu",
          "preview_url": "https://p.scdn.co/mp3-preview/991d4ea85b9e1f98674fd1b54b28b6b5cbe460fa?cid=46d19818e4d7481cb4270ca72ab22f0e",
          "track_number": 6,
          "type": "track",
          "uri": "spotify:track:7cgWWkpUaS94xoWI8lMGiI"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
              },
              "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              "id": "3Nrfpe0tUJi4K4DXYWgMUX",
              "name": "BTS",
              "type": "artist",
              "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
            }
          ],
          "disc_number": 1,
          "duration_ms": 249215,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2Wkm4JBcIV2uSuu4qlbqFN"
          },
          "href": "https://api.spotify.com/v1/tracks/2Wkm4JBcIV2uSuu4qlbqFN",
          "id": "2Wkm4JBcIV2uSuu4qlbqFN",
          "is_local": false,
          "is_playable": true,
          "name": "Dionysus",
          "preview_url": "https://p.scdn.co/mp3-preview/c5951c26c9bd0d6d2fecba0a255dce7070c51bf6?cid=46d19818e4d7481cb4270ca72ab22f0e",
          "track_number": 7,
          "type": "track",
          "uri": "spotify:track:2Wkm4JBcIV2uSuu4qlbqFN"
        }
      ],
      "limit": 50,
      "next": null,
      "offset": 0,
      "previous": null,
      "total": 7
    },
    "type": "album",
    "uri": "spotify:album:2KqlAl1Kl5fZvbFgJ0qFB6"
  }
console.log(props)
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.album);
        setAlbum(data);
        console.log(album);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-single">
        <div className="single-photo">
          <img src={album.album_cover} width="500" height="500" />
        </div>
          <div className="container-information">
              <div className="information-album"><h3 >- ARTISTA : <br/>{album.title} </h3></div>
                <br />
              <div className="information-author"><h3 >- ALBUM : <br/>{album.author}</h3></div>
                <br />
              <div className="information-year"><h3 >- POPULARIDAD : <br/>{album.release_year}</h3></div>
                 <br />
              <div className="information-year"><h3 >- FECHA DE LANZAMIENTO : <br/>{album.release_year}</h3></div>
                 <br />
              <div className="information-year"><h3 >- NÚMERO DE CANCIONES: <br/>{album.release_year}</h3></div>
          </div>
      </div>
        
    </>
  );
};
