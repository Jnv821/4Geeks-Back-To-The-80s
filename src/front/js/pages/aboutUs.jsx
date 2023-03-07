import Navbar from "../component/navbar.js";
import "../../styles/profile.css";
import React from "react";
import history from "../../img/historia.jpg";
import programador from "../../img/programador.jpg";
import "../../styles/about_us.css";
import logo from "../../img/Back_to_80_logo.png";
import { Footer } from "../component/footer";


export const AboutUs = () => {
  return (
    <>
      <Navbar />
    <div className="container">
    <div className="row mt-5">
    <div className="col-lg-6 box">
              <img className="img-fluid img-thumbnail" src={history} />
          </div>
        <div className="col-lg-6">
          <h1 className="aboutus-title text-right">Nuestra historia</h1>
            <p className="aboutus text-right">
              Somos un equipo de tres personas, muy diferentes entre sí, pero con el mismo objetivo en común ; convertirnos en Desarrolladores Full Stack.<br/>
                José, Sandra y José del Rio : de lugares, edades y vidas muy distintas, pero con la misma pasión hacia el mundo Tech.
            </p>
        </div>      
    </div>
    </div>
  <div className="container">
  <div className="row mt-5">
      <div className="col-lg-6">
        <h1 className="aboutus-title text-right">Nuestra misión</h1>
          <p className="aboutus text-right">
            Tras mucho camino de aprendizaje, queremos transmitir al usuario a través de nuestra aplicación <br/>"Back to the 80's" nuestros conocimientos en la materia y todo lo aprendido hasta aquí,
            que sin duda, sólo es el comienzo de un largo camino lleno de nuevos retos.
          </p>
      </div> 
      <div className="col-lg-6 box">
            <img className="img-fluid img-thumbnail" src={programador}/>
      </div>   
  </div>
  </div>
    <div className="container">
    <div className="row mt-5">
        <div className="col-lg-12 ">
          <p className="aboutus-title text-center">Nuestro proyecto</p>
            <p className="aboutus">
              Back to the 80'S es un sitio web, en el cual, los amantes de la música de la época dorada, pueden crear su propia biblioteca de sus álbumes favoritos.
              Busca por año a tu artista preferido, agrega su álbum a tu lista, y prepárate para sumergirte en una de las mejores épocas de música que jamás pasaran al olvido.
            </p>
            <div className="col-lg-12">
              <img className="img-fluid rounded mx-auto d-block" src={logo}/>
          </div>
        </div> 
    </div> 
    </div>
              <Footer></Footer>
    </>
  );
};
