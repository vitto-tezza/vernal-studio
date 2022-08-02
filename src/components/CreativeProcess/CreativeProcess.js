import React from "react";
import "./CreativeProcess.css";

const creativeProcess = () => {
  return (
    <div className="CreativeProcess">
      <div className="CreativeProcess-Title-Container">
        <p className="CreativeProcess-Title-Description">
          - Conocé nuestro <br></br>proceso creativo
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
          <p className="CreativeProcess-Box-Description">
            Te escuchamos de verdad <br></br>por que nos interesa entenderte.
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
          <p className="CreativeProcess-Box-Description">
            Le damos una personalidad única <br></br>a tu proyecto.
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
          <p className="CreativeProcess-Box-Description">
            Distintas propuestas para que tu <br></br>marca cobre vida.
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
          <p className="CreativeProcess-Box-Description">
            Un ecosistema gráfico donde tu <br></br>marca se desenvuelva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default creativeProcess;
