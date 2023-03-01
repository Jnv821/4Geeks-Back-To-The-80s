import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../component/navbar.js";
import Section from "../component/Section.jsx";
import { Footer } from "../component/footer.js";

export const Home = () => {
  const [masterList, setMasterList] = useState([]);
  console.log("home");

  // fetch de la data de albums
  useEffect(() => {
    let requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    };
    fetch(
      "https://3001-jnv821-4geeksbacktothe8-ux800qh0jlf.ws-us88.gitpod.io/api/albums",
      requestOptions
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  let sections = [];
  for (let year = 1980; year <= 1989; year++) {
    const decadeAlbums = masterList.filter((album) => album.year == year);
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
      <Footer />
    </>
  );
};
