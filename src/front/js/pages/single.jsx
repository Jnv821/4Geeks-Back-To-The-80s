import React, { useState, useEffect, useContext } from "react";
import "../../styles/single.css";
import Navbar from "../component/navbar.js";

export const Single = (props) => {
  let [album, setAlbum] = useState([]);
console.log(props)
  useEffect(() => {
    fetch(
      "https://3001-jnv821-4geeksbacktothe8-bunat2pqo45.ws-eu88.gitpod.io/api/albums/1"
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
        <div className="row">
          <div className="single-photo col-sm-4">
              <img src={album.album_cover} width="500" height="500" />
          </div>
              <div className="information-single col-sm-8">
            <p className="information-album">- Name : {album.title}</p>
            <br />
            <p className="information-album">- Release date : {album.release_year}</p>
            <br />
            <p className="information-album">- Copyrights :</p>
            <br />
            <p className="information-album">- Total tracks :</p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
