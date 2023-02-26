import React, { useState, useEffect, useContext } from "react";
import "../../styles/single.css";
import Navbar from "../component/navbar.js";

export const Single = (props) => {
  let [album, setAlbum] = useState([]);
console.log(props)
  useEffect(() => {
    fetch(
      "https://3001-jnv821-4geeksbacktothe8-gslfrbu834j.ws-eu88.gitpod.io/api/albums/1"
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.album);
        setAlbum(album=data.album);
        console.log(album);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-single">
          <div className="container-information">
              <div className="information-album"><h1 >- ALBUM : <br/>{album.title} </h1></div>
                <div className="information-author"><h1 >- ARTIST : <br/>{album.author}</h1></div>
                  <div className="information-year"><h1 >- YEAR : <br/>{album.release_year}</h1></div>
          </div>
                  <div className="single-photo">
              <img src={album.album_cover} width="500" height="500" />
          </div>
      </div>
    </>
  );
};
