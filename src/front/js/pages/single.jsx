import React, { useState, useEffect, useContext } from "react";
import "../../styles/single.css";
import Navbar from "../component/navbar.js";

export const Single = (props) => {

  let [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setAlbum(data);
      });
  }, []);
  
    return (
      <>
      <Navbar />
      <div className="container-single">
        <div className="row">
          <div className="single-photo col-sm-4">
              <img src="https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png" width="500" height="500" />
          </div>
              <div className="information-single col-sm-8">
                <p className="information-album">- Name :</p>
                 <br/>
                <p className="information-album">- Release date :</p>
                 <br/>
                <p className="information-album">- Copyrights :</p>
                 <br/>
                <p className="information-album">- Total tracks :</p>
                 <br/>
              </div>
        </div>
      </div>
      </>
    );
    };
