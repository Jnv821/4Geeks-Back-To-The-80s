import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js
import CardAlbum from "./CardAlbum.jsx";

const Section = (props) => {
  const [decadeAlbums, setDecadeAlbums] = useState(props.decadeAlbums);

  return (
    <section className="section">
      <h2 className="sectionTitle">{props.year}</h2>
      <div className="row flex-row flex-nowrap rowSection">
        {props.decadeAlbums.map((album, index) => {
          return (
            <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2" key={index}>
              <CardAlbum className="CardAlbum" album={album} favorites={props.favorites} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
