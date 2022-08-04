import React, { useState } from "react";
/*css*/
import "./Hero.css";
/*images*/
import fotoHero from "../../utils/images/foto-hero.png";

const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="hero-container">
        <div className="hero-txt-container">
          <h1 className="hero-title">- ¡Hola somos Vernal!</h1>
          <p className="hero-description">
            Un equipo <span className="hero-description-span">creativo</span>
            <br></br> que busca la evolucion
            <br></br>
            de tu proyecto.
          </p>
          <h2 className="hero-subtitle">Branding, web, diseno y mas.</h2>
        </div>
      </div>
      <div className="Hero-Background-Container">
        <img className="Hero-Background-Image" src={fotoHero}></img>
      </div>
    </div>
  );
};

export default Hero;
