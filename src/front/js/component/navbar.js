import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js
import logo from "../../img/Back_to_80_logo.png";
import cassette from "../../img/cassette.png";


const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0)

  useEffect(() => {
    if(!store.token) return
    actions.getUser(store.token)
    setUserId(store.uid);
  }, [store.token])

  useEffect(() => {
    console.log("This is user id", userId)
  }, [userId])
  
    return (
      <div className="container-navbar">
      <nav className="navbar navbar-light mb-3">
        <Link to="/home">
          <img className="main-logo" src={logo} />
        </Link>
        <div className="ml-auto-aboutus">
          <div className="dropdown">
            <Link className="aboutus"to="/aboutus">About us</Link>
            <Link className="aboutus" to={`/profile/${userId}`}><img className="photo-cassette" src={cassette} /> My Profile</Link>
            <button
              className="btn btn-primary logout-btn"
              onClick={() => {
                actions.logout();
                navigate("/login");
              }}
            >
              Log out
            </button>
          </div>
        </div>
      </nav>
      </div>
    );
  } ;

export default Navbar;
