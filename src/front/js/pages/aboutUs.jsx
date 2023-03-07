import Navbar from "../component/navbar.js";
import "../../styles/profile.css";
import React from "react";
import libros from "../../img/libro-biblioteca-libro-texto-abierto.jpg";
import history from "../../img/historia.jpg";
import "../../styles/about_us.css";
import logo from "../../img/Back_to_80_logo.png";
import { Footer } from "../component/footer";
// card album will be a placeholder component for now.

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <div className="row">
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
      <div className="row">
      <div className="photo mission col-lg-6">
                <img className="photo-mission"/>
            </div>
          <div className="texto-mission col-lg-6">
            <h1  className="mission">Nuestra misión</h1>
              <p >
               Tras mucho camino de aprendizaje, queremos transmitir al usuario a través de nuestra aplicación <br/>"Back to the 80's" nuestros conocimientos en la materia y todo lo aprendido hasta aquí,
                que sin duda, sólo es el comienzo de un largo camino lleno de nuevos retos.
              </p>
          </div>    
        </div>
        </div>
        <div className="container">
      <div className="row">
      <div className="texto-project col-lg-12 ">
            <h1  className="project">Nuestro proyecto</h1>
              <p >
                Bck to the 80'S es un sitio web, en el cual, los amantes de la música de la época dorada, pueden crear su lista con sus álbumes favoritos.
                Busca por año a tu artista preferido, agrega su álbum a tu lista, y prepárate para sumergirte en una de las mejores épocas de música que jamás pasaran al olvido.
              </p>
              <div className="photo project col-lg-12">
                <img className="photo-project" />
            </div>
          </div> 
      </div> 
      </div>
      
              <Footer></Footer>
    </>
  );
};
