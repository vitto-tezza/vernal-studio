import React, { useState } from "react";
/*css*/
import "./Hero.css";
/*images*/
import fotoHero from "../../utils/images/foto-hero.png";

const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="Hero-Container">
        <div className="txt">
          <p className="txt-1">-Hola somos Vernal!</p>
          <p className="txt-2">
            Un equipo creativo que busca la evolucion de tu proyecto
          </p>
          <h1>Branding, web, diseno y mas</h1>
        </div>
      </div>
      <div className="Hero-Background-Container">
        <img className="Hero-Background-Image" src={fotoHero}></img>
      </div>
    </div>
  );
};

export default Hero;
