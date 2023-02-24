import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js
import CardCharacter from "./CardAlbum.jsx";

const Section = (props) => {
  return (
    <section className="charactersSection">
      <h2 className="sectionTitle">{props.year}</h2>
      <div className="row flex-row flex-nowrap rowSection">
        {props.masterList.map((charUrl, index) => {
          return (
            <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2" key={index}>
              <CardCharacter className="CardCharacter" url={charUrl.url} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
