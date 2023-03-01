import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../component/navbar.js";
import Section from "../component/Section.jsx";
import { Footer } from "../component/footer.js";

export const Home = () => {
  let [token, setToken] = useState("");
  const [masterList, setMasterList] = useState();

  // fetch de la data de albums
  useEffect(() => {
    const url =
      "https://3001-jnv821-4geeksbacktothe8-ux800qh0jlf.ws-us89.gitpod.io/api/albums";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMasterList(data.albums))
      .catch((err) => console.error(err));
  }, []);

  console.log(masterList);

  if (masterList != undefined) {
    let sections = [];
    for (let year = 1980; year <= 1989; year++) {
      let decadeAlbums = masterList.filter(
        (album) => album.release_year == year
      );
      sections.push(
        <li key={year}>
          {" "}
          <Section decadeAlbums={decadeAlbums} year={year} />{" "}
        </li>
      );
    }
    return (
      <>
        <Navbar />
        <div className="mt-5 home-wrapper">
          <ul className="sections-list">{sections}</ul>
        </div>
        <div></div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="mt-5 home-wrapper">Loading...</div>
        <div></div>
      </>
    );
  }
};
