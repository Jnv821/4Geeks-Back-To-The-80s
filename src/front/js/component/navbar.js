import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js
import logo from "../../img/Back_to_80_logo.png";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  if (store.favorites != undefined) {
    return (
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <img className="main-logo" src={logo} />
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              Favorites {store.favorites.length}
            </button>
            <ul className="dropdown-menu">
              {store.favorites.map((name, index) => {
                return (
                  <li className="dropdown-item" key={index}>
                    {name}{" "}
                    <i
                      className="fa-regular fa-trash-can"
                      onClick={() => actions.deleteFavorite(name)}
                    ></i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <img className="main-logo" src={logo} />
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Loading...
              </button>
            </div>
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
