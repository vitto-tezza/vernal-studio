import React from "react";
import "./CreativeProcess.css";
import Background from "../../utils/images/creativeprocess-bg.png";
const creativeProcess = () => {
  return (
    <div className="CreativeProcess" id="CreativeProcess">
      <div className="CreativeProcess-Title-Container">
        <p className="CreativeProcess-Title-Description">
          - Conocé nuestro proceso creativo
        </p>
        <h6 className="CreativeProcess-Title">Design Thinking</h6>
      </div>
      <div className="CreativeProcess-Container">
        <div className="CreativeProcess-Box">
          <div className="CreativeProcess-Box-Icon">
            <figure
              src=""
              alt="Icon"
              className="CreativeProcess-Box-Icon-Figure CreativeProcess-Figure-1"
            ></figure>
          </div>
          <p className="CreativeProcess-Box-Number">01</p>
          <p className="CreativeProcess-Box-Title">Empatizamos</p>
          <p className="CreativeProcess-Box-Description-Mobile CreativeProcess-Box-Description">
            Te escuchamos de verdad <br></br>por que nos interesa entenderte.
          </p>
          <p className="CreativeProcess-Box-Description-Desktop CreativeProcess-Box-Description">
            Te escuchamos de <br></br>verdad por que nos<br></br>interesa
            entenderte.
          </p>
        </div>
        <div className="CreativeProcess-Box">
          <div className="CreativeProcess-Box-Icon">
            <figure
              src=""
              alt="Icon"
              className="CreativeProcess-Box-Icon-Figure CreativeProcess-Figure-2"
            ></figure>
          </div>
          <p className="CreativeProcess-Box-Number">02</p>
          <p className="CreativeProcess-Box-Title">Conceptualizamos</p>
          <p className="CreativeProcess-Box-Description-Mobile CreativeProcess-Box-Description">
            Le damos una personalidad única <br></br>a tu proyecto.
          </p>
          <p className="CreativeProcess-Box-Description-Desktop CreativeProcess-Box-Description">
            Le damos una<br></br>personalidad única a<br></br>tu proyecto.
          </p>
        </div>
        <div className="CreativeProcess-Box">
          <div className="CreativeProcess-Box-Icon">
            <figure
              src=""
              alt="Icon"
              className="CreativeProcess-Box-Icon-Figure CreativeProcess-Figure-3"
            ></figure>
          </div>
          <p className="CreativeProcess-Box-Number">03</p>
          <p className="CreativeProcess-Box-Title">Creamos</p>
          <p className="CreativeProcess-Box-Description-Mobile CreativeProcess-Box-Description">
            Distintas propuestas para que tu <br></br>marca cobre vida.
          </p>
          <p className="CreativeProcess-Box-Description-Desktop CreativeProcess-Box-Description">
            Distintas propuestas<br></br>para que tu <br></br>marca cobre vida.
          </p>
        </div>
        <div className="CreativeProcess-Box">
          <div className="CreativeProcess-Box-Icon">
            <figure
              src=""
              alt="Icon"
              className="CreativeProcess-Box-Icon-Figure CreativeProcess-Figure-4"
            ></figure>
          </div>
          <p className="CreativeProcess-Box-Number">04</p>
          <p className="CreativeProcess-Box-Title">Construimos</p>
          <p className="CreativeProcess-Box-Description-Mobile CreativeProcess-Box-Description">
            Un ecosistema gráfico donde tu <br></br>marca se desenvuelva.
          </p>
          <p className="CreativeProcess-Box-Description-Desktop CreativeProcess-Box-Description">
            Un ecosistema gráfico<br></br>donde tu marca se<br></br>desenvuelva.
          </p>
        </div>
      </div>
      <div className="Background-Image-Container-Desktop">
        <img className="Background-Image-Desktop" src={Background} alt=""></img>
      </div>
    </div>
  );
};

export default creativeProcess;
