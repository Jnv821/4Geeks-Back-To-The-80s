import React, { useEffect, useState, useContext } from "react";
import Navbar from "../component/navbar.js";
import Section from "../component/Section.jsx";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    let [token, setToken] = useState("");
    const [masterList, setMasterList] = useState();
    const [favoriteList, setFavoriteList] = useState()

    const { store, actions } = useContext(Context);

    const navigate = useNavigate();

    if (store.token == false || store.token == "" || store.token == undefined)
        navigate("/login");

    // fetch de la data de albums
    useEffect(() => {
        console.log(store.token);
        const url = process.env.BACKEND_URL + "/api/albums";
        fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + store.token,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setMasterList(data.albums);
                setFavoriteList(data.favorites);
            })
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
                    <Section decadeAlbums={decadeAlbums} favorites={favoriteList} year={year} />
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
