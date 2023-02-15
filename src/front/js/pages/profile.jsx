import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar.js";
import "../../styles/profile.css";
import CardCharacter from "../component/CardAlbum.jsx";
// card album will be a placeholder component for now.

export const Profile = () => {
  const { store, actions } = useContext(Context);
  // Fetch the user data

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="d-flex col-lg-12 col-xs-12 text-white">
            <div className="col-2">
              <img
                className="profile-img"
                src="https://source.boringavatars.com/marble/60/bobby123?colors=FE499A,A6029B,0f042f,240292,4406DF"
                alt="profile image"
              />
            </div>
            <div className="col-8 mx-4">
              <h1>Profile page</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                ratione nobis eum, culpa possimus odio distinctio vel, sapiente
                cumque blanditiis eos, magni temporibus provident expedita
                consequatur cupiditate mollitia est incidunt?
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="text-white">Favorite Albums</h1>

          <CardCharacter />
        </div>
      </div>
    </>
  );
};
