
import React, { useState, useEffect, useContext } from "react";
import "../../styles/single.css";
import Navbar from "../component/navbar.js";
import {useLocation} from 'react-router-dom'


export const Single = (props) => {
  let [album, setAlbum] = useState([]);

const url = useLocation().pathname
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api" + url)
      .then((response) => response.json())
      .then((data) => {
        setUrl(data);
        console.log(data);
      });
  }, []);

  /* fetch(album.album.spotify_url, {
     method: 'GET',
     headers: {
     'Authorization': "Bearer " + token
     }
      })*/

  return (
    <>
      <Navbar />
      <div className="container-single">
        <div className="single-photo">
          <img src={album.album_cover} width="500" height="500" />
        </div>
          <div className="container-information">
              <div className="information-album"><h3 >- ARTISTA : <br/>{album.album ? album.album.artist.name : <p>Loading ...</p>}</h3></div>
                <br />
              <div className="information-author"><h3 >- ALBUM : <br/>{album.album ? album.album.name : <p>Loading ...</p>}</h3></div>
                <br />
              <div className="information-year"><h3 >- POPULARIDAD : <br/>{album.album ? album.album.popularity : <p>Loading ...</p>}</h3></div>
                 <br />
              <div className="information-year"><h3 >- FECHA DE LANZAMIENTO : <br/>{album.album ? album.album.release_date : <p>Loading ...</p>}</h3></div>
                 <br />
              <div className="information-year"><h3 >- NÚMERO DE CANCIONES: <br/>{album.album ? album.album.total_tracks : <p>Loading ...</p>}</h3></div>
          </div>
      </div>
        
    </>
  );
};