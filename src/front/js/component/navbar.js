import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js
import logo from "../../img/Back_to_80_logo.png";
import cassette from "../../img/cassette.png";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!store.token) return
    actions.getUser(store.token)
  }, [])

    return (
      <div className="container-navbar">
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <img className="main-logo" src={logo} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">☰</span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item my-2">
              <Link className="aboutus"to="/aboutus">About us</Link>
            </li>
            <li className="nav-item my-2">
              <Link className="aboutus" to={`/profile/${store.uid}`}><img className="photo-cassette" src={cassette} /> {store.username}</Link>
            </li>
            <li className="nav-item my-2">
              <Link className="aboutus" to="/login" onClick={() => actions.logout()}>Log out</Link>
            </li>
          </ul>
        </div>
  </div>
</nav>
      </div>
    );
  } ;

export default Navbar;