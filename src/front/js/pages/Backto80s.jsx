import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/backto80s.css";
import logo from "../../img/Back_to_80_logo.png";
import { Link } from 'react-router-dom';

export const Backto80s = () => {
    const { store, actions } = useContext(Context);
  
    return (
            <div className="container-backto80">
                <div className="text-view-principal">
                    <h1 className="tittle">BACK TO THE 80'S</h1>
                    <img className="logo-80s" src={logo}/>
                    <p className="description">La mejor música de la época dorada en una lista creada por ti. </p>
                    <Link to="/login" className=" btn btn-view-principal">Login</Link>
                </div>
            </div> 
      );
    };