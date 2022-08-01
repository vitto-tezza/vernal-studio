import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container-Hero" id="Hero">
      <div className="txt">
        <p className="txt-1">-Hola somos Vernal!</p>
        <p className="txt-2">
          Un equipo creativo que busca la evolucion de tu proyecto
        </p>
        <h1>Branding, web, diseno y mas</h1>
      </div>
      <div>
        <img className="grupo69" src="grupo69.png"></img>
      </div>
    </div>
  );
};

export default Hero;
