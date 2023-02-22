import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../component/navbar.js";
import Section from "../component/Section.jsx";
import { Footer } from "../component/footer.js";

export const Home = () => {
  let [token, setToken] = useState("");
  useEffect(() => {
    fetch(
      "https://3001-jrdelrio-4geeksbacktoth-6ahzti1ytn9.ws-us87.gitpod.io/api/token"
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  // fetch de la data de albums
  let [masterList, setMasterList] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setMasterList(data.results))
      .catch((err) => console.error(err));
  }, [token]);

  let sections = [];
  for (let year = 1980; year <= 1989; year++) {
    sections.push(
      <li key={year}>
        {" "}
        <Section masterList={masterList} year={year} />{" "}
      </li>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mt-5 home-wrapper">
        <ul>{sections}</ul>
      </div>
      <Footer />
    </>
  );
};
