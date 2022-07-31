import React from "react";
import "./BannerUp.css";
import BannerUpDot from "../../utils/images/bannerup-dot.svg";

const BannerUp = () => {
  return (
    <div className="BannerUp">
      <div className="BannerUp-Slider-Container">
        <div className="BannerUp-Slider">
          <img
            src={BannerUpDot}
            alt="slider-image"
            className="BannerUp-Slider-Image"
          ></img>
          <p className="BannerUp-Slider-Text">Evolucionemos juntos</p>
          <img
            src={BannerUpDot}
            alt="slider-image"
            className="BannerUp-Slider-Image"
          ></img>
          <p className="BannerUp-Slider-Text">Evolucionemos juntos</p>
          <img
            src={BannerUpDot}
            alt="slider-image"
            className="BannerUp-Slider-Image"
          ></img>
          <p className="BannerUp-Slider-Text">Evolucionemos juntos</p>
          <img
            src={BannerUpDot}
            alt="slider-image"
            className="BannerUp-Slider-Image"
          ></img>
          <p className="BannerUp-Slider-Text">Evolucionemos juntos</p>
        </div>
      </div>
      <div className="BannerUp-Button-Container">
        <a href="www.vernalstudio.com" className="BannerUp-Button">
          <figure className="BannerUp-Button-Image"></figure>
        </a>
      </div>
    </div>
  );
};

export default BannerUp;
