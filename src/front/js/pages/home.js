import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import CardCharacter from "../component/CardAlbum.jsx";
import Navbar from "../component/navbar.js";

export const Home = () => {
  let [token, setToken] = useState("");
  useEffect(() => {
    fetch(
      "https://3001-jrdelrio-4geeksbacktoth-6ahzti1ytn9.ws-us86.gitpod.io/api/token"
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  // fetch de la data de personajes
  let [masterList, setMasterList] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setMasterList(data.results))
      .catch((err) => console.error(err));
  }, [token]);
  // console.log(masterList)

  return (
    <>
      <Navbar />

      <div className="mt-5 home-wrapper">
        {/*pop section*/}
        <section className="charactersSection">
          <h2 className="sectionTitle">Pop</h2>
          <div className="row flex-row flex-nowrap rowSection">
            {masterList.map((charUrl, index) => {
              return (
                <div
                  className="col-xs-6 col-sm-4 col-md-2 col-lg-2"
                  key={index}
                >
                  <CardCharacter className="CardCharacter" url={charUrl.url} />
                </div>
              );
            })}
          </div>
        </section>

        <section className="charactersSection">
          <h2 className="sectionTitle">Rock</h2>
          <div className="row flex-row flex-nowrap rowSection">
            {masterList.map((charUrl, index) => {
              return (
                <div
                  className="col-xs-6 col-sm-4 col-md-2 col-lg-2"
                  key={index}
                >
                  <CardCharacter className="CardCharacter" url={charUrl.url} />
                </div>
              );
            })}
          </div>
        </section>

        <section className="charactersSection">
          <h2 className="sectionTitle">Reggae</h2>
          <div className="row flex-row flex-nowrap rowSection">
            {masterList.map((charUrl, index) => {
              return (
                <div
                  className="col-xs-6 col-sm-4 col-md-2 col-lg-2"
                  key={index}
                >
                  <CardCharacter className="CardCharacter" url={charUrl.url} />
                </div>
              );
            })}
          </div>
        </section>

        <section className="charactersSection">
          <h2 className="sectionTitle">Metal</h2>
          <div className="row flex-row flex-nowrap rowSection">
            {masterList.map((charUrl, index) => {
              return (
                <div
                  className="col-xs-6 col-sm-4 col-md-2 col-lg-2"
                  key={index}
                >
                  <CardCharacter className="CardCharacter" url={charUrl.url} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
