import React, { useState } from "react";
/*css*/
import "./Hero.css";
/*images*/
import fotoHero from "../../utils/images/foto-hero.png";
import fotoInsta from "../../utils/images/hero-image-insta.png";
import fotoBe from "../../utils/images/hero-image-be.png";
import fotoIn from "../../utils/images/hero-image-in.png";
import arrowDescription from "../../utils/images/hero-descriptionarrow.svg";

const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="hero-container-redes">
        <div className="hero-insta">
          <img className="hero-insta-image" src={fotoInsta}></img>
        </div>
        <div className="hero-be">
          <img className="hero-be-image" src={fotoBe}></img>
        </div>
        <div className="hero-in">
          <img className="hero-in-image" src={fotoIn}></img>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-txt-container">
          <h1 className="hero-title">- ¡Hola somos Vernal!</h1>
          <p className="hero-description">
            Un equipo <span className="hero-description-span">creativo</span>
            <br></br> que busca la evolución
            <br></br>
            de tu proyecto.
          </p>
          <h2 className="hero-subtitle">
            <img
              alt=""
              className="hero-subtitle-image"
              src={arrowDescription}
            ></img>
            Branding, web, diseno y mas.
          </h2>
        </div>
      </div>
      <div className="Hero-Background-Container">
        <img className="Hero-Background-Image" src={fotoHero}></img>
      </div>
    </div>
  );
};

export default Hero;
