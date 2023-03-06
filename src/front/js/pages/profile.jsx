import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import CardAlbum from "../component/CardAlbum.jsx";
import Navbar from "../component/navbar.js";
import "../../styles/profile.css";
import { Footer } from "../component/footer";
// card album will be a placeholder component for now.

export const Profile = () => {
    const { store, actions } = useContext(Context);
    const [userData, setUserData] = useState({});
    const [favoriteData, setFavoriteData] = useState([]);

    const url = useLocation().pathname;
    // Fetch the user data
    useEffect(() => {
        fetch(process.env.BACKEND_URL + '/api' + url)
        .then(res => res.json())
        .then(data => { setUserData(data.user);
                        setFavoriteData((prevState) => prevState.concat(data.favorites))   
        })
        .catch(err => console.log(err))
    }, []);
    
    const handleRemove = (favid) => {
        setFavoriteData((prevState) => prevState.filter((album) => album.id !== favid)) 
    }

    const favoriteList = favoriteData.map((favorite) => {
        return(<CardAlbum key={favorite.id} album={favorite} favorites={favoriteData} handleRemove={handleRemove}/>)
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
                            <div className="username"><h1>{userData.username}</h1></div>
                            <p className="text-white">
                                {userData.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="username"> <h1>Favorite Albums</h1></div>
                    {favoriteData ? favoriteList : ""}
                </div>
                <div className="profile-footer">
              <Footer></Footer>
              </div> 
            </div>
        </>
    );
};
