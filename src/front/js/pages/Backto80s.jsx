import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/backto80s.css";
import logo from "../../img/Back_to_80_logo.png";
import { Link } from 'react-router-dom';
import cascos from "../../img/cascos-camara-vinilos.jpg";
import casettes from "../../img/discos-casetes-cerca-tocadiscos.jpg";
import manos from "../../img/manos tocadiscos.jpg";

export const Backto80s = () => {
    const { store, actions } = useContext(Context);
  
    return (
        <div className="container-backto80 container-fluid">
                <div className="text-view-principal">
                    <h1 className="tittle">BACK TO THE 80'S</h1>
                    <img className="logo-80s" src={logo}/>
                    <p className="description">La mejor música de la época dorada en una lista creada por ti. </p>
                </div>
                    <Link to="/login" className=" btn btn-view-principal">Login</Link>
                <div id="carouselExample" className="carousel slide">
                    <div className="row">
                        <div className="carousel-inner col-sm-12">
                         <div className="carousel-item active">
                            <img src={casettes} class="d-block w-100 h-100" alt="..." />
                         </div>
                          <div className="carousel-item">
                            <img src={manos} class="d-block w-100" alt="..."/>
                          </div>
                            <div className="carousel-item">
                              <img src={cascos} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div> 
        </div>
        
      );
    };