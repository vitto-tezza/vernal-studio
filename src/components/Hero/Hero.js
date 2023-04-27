import React from "react";
/*css*/
import "./Hero.css";
/*images*/
import fotoHero from "../../utils/images/foto-hero.webp";

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
          <h1 className="hero-title">
            Transformamos ideas en marcas con personalidad
          </h1>
          <p className="hero-text">
            <span>Estudio boutique creativo</span> Branding. UX. Social media &
            más.
          </p>
        </div>
      </div>
      <div className="Hero-Background-Container">
        <img
          className="Hero-Background-Image"
          src={fotoHero}
          alt="hero-bg"
        ></img>
        <div className="Hero-Background-Block Block1"></div>
        <div className="Hero-Background-Block Block2"></div>
      </div>
    </div>
  );
};

export default Hero;
