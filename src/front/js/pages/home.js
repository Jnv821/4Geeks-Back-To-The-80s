import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import CardCharacter from "../component/CardAlbum.jsx";

export const Home = () => {
  // fetch de la data de personajes
  let [masterList, setMasterList] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setMasterList(data.results))
      .catch((err) => console.error(err));
  }, []);
  // console.log(masterList)

  return (
    <div className="text-center mt-5">
      {/*pop section*/}
      {console.log(masterList)}
      <section className="charactersSection">
        <h2 className="sectionTitle">Pop</h2>
        <div className="row flex-row flex-nowrap rowSection">
          {masterList.map((charUrl, index) => {
            return (
              <div className="col-2" key={index}>
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
              <div className="col-2" key={index}>
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
              <div className="col-2" key={index}>
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
              <div className="col-2" key={index}>
                <CardCharacter className="CardCharacter" url={charUrl.url} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}