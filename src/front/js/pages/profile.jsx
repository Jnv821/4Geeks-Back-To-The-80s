import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import CardAlbum from "../component/CardAlbum.jsx";
import Navbar from "../component/navbar.js";
import "../../styles/profile.css";
// card album will be a placeholder component for now.

export const Profile = () => {
    const { store, actions } = useContext(Context);
    const [userData, setUserData] = useState({});
    const [favoriteData, setFavoriteData0] =useState([])

    const url = useLocation().pathname;
    console.log(url)
    // Fetch the user data
    useEffect(() => {
        fetch(process.env.BACKEND_URL + '/api' + url)
        .then(res => res.json())
        .then(data => { setUserData(data.user)
                        setFavoriteData0((favoriteData) => [...favoriteData,data.favorites])   
        })
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log(userData)
    }, [userData])
    
    const favoriteList = favoriteData.map((favorite) => {
        return(<CardAlbum key={favorite.id} album={favorite}/>)
    })

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="d-flex col-lg-12 col-xs-12 text-white">
                        <div className="col-2">
                            <img
                                className="profile-img"
                                src={userData.profile_image}
                                alt="profile image"
                            />
                        </div>
                        <div className="col-8 mx-4">
                            <h1>{userData.username}</h1>
                            <p>
                                {userData.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h1 className="text-white">Favorite Albums</h1>
                    {favoriteData ? favoriteList : ""}
                </div>
            </div>
        </>
    );
};
