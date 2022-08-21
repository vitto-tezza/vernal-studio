import React from "react";
/*css*/
import "./Hero.css";
/*images*/
import fotoHero from "../../utils/images/foto-hero.png";
import arrowDescription from "../../utils/images/hero-descriptionarrow.svg";

const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="hero-redes">
        <a
          href="www.instagram.com"
          target="_blank"
          className="hero-redes-container"
        >
          <figure className="hero-ig-image hero-redes-image"></figure>
        </a>
        <a
          href="www.instagram.com"
          target="_blank"
          className="hero-redes-container"
        >
          <figure className="hero-be-image hero-redes-image"></figure>
        </a>
        <a
          href="www.instagram.com"
          target="_blank"
          className="hero-redes-container"
        >
          <figure className="hero-in-image hero-redes-image"></figure>
        </a>
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
          <a href="#Projects" className="hero-subtitle">
            <h2 className="hero-subtitle-container">
              <img
                alt=""
                className="hero-subtitle-image"
                src={arrowDescription}
              ></img>
              Branding, web, diseno y mas.
            </h2>
          </a>
        </div>
      </div>
      <div className="Hero-Background-Container">
        <img
          className="Hero-Background-Image"
          src={fotoHero}
          alt="hero-bg"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
