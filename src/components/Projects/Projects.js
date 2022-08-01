import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="container-black" id="Projects">
        <div>
          <p className="txt-3">
            Liberamos nuestra creatividad para acercarte resultados
            <p className="txt-3-1">innovadores y con caracter.</p>
            <img className="flecha" src="flecha.png"></img>
          </p>
          <p className="txt-4">-Es mejor si te lo mostramos:</p>
        </div>
        <div>
          <div>
            <img className="img-loop3" src="loop3.png"></img>
            <img className="txt-loop3" src="loop3-txt.png"></img>
            <img
              className="flecha-pie-de-foto"
              src="flecha-pie-de-foto.png"
            ></img>
          </div>
          <div>
            <p className="txt-5">Loop3</p>
            <p className="txt-6">Web Design, Branding, Logotipo</p>
          </div>
        </div>
        <div>
          <div>
            <img className="img-maderoTango" src="maderoTango.png"></img>
            <img className="txt-maderoTango" src="maderoTango-txt.png"></img>
            <img
              className="flecha-pie-de-foto"
              src="flecha-pie-de-foto.png"
            ></img>
          </div>
          <div>
            <p className="txt-7">Madero Tango</p>
            <p className="txt-8">Web Design, Branding, Mailing</p>
          </div>
        </div>
        <div>
          <div>
            <img className="img-daleplast" src="daleplast.png"></img>
            <img className="txt-daleplast" src="daleplast-txt.png"></img>
            <img
              className="flecha-pie-de-foto"
              src="flecha-pie-de-foto.png"
            ></img>
          </div>
          <div>
            <p className="txt-9">Daleplast</p>
            <p className="txt-10">Web Design, Branding, Logotipo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
