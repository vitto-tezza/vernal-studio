import React from "react";
import "./Projects.css";
import ProjectsArrow from "../../utils/images/projects-titlearrow.svg";
import LogoLoop3 from "../../utils/images/projects-loop3-logo.png";
import LogoMaderoTango from "../../utils/images/projects-maderotango-logo.png";
import LogoDaleplast from "../../utils/images/projects-daleplast-logo.png";
import LogoTuEspacio from "../../utils/images/projects-tuespacio-logo.svg";

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <div className="Projects-Container">
        <div className="Projects-Title-Container">
          <p className="Projects-Title Projects-Title-1">
            Liberamos nuestra creatividad
          </p>
          <p className="Projects-Title Projects-Title-2">
            para acercarte resultados
          </p>
          <p className="Projects-Title Projects-Title-3">
            innovadores y con caracter.
          </p>
          <img className="Projects-Arrow" src={ProjectsArrow}></img>
          <p className="Projects-Subtitle">- Es mejor si te lo mostramos:</p>
        </div>
        <div className="Projects-Subcontainer">
          <div className="Projects-Subcontainer-Box">
            <div className="Projects-Subcontainer-Box-Image Image-Loop">
              <img
                className="Projects-Box-Logo Logo-Loop"
                src={LogoLoop3}
                alt=""
              ></img>
            </div>
            <div className="Projects-Subcontainer-Box-Button"></div>
            <h2 className="Projects-Subcontainer-Box-Title">loop3</h2>
            <p className="Projects-Subcontainer-Box-Description">
              Web design, Branding, Logotipo.
            </p>
          </div>
          <div className="Projects-Subcontainer-Box">
            <div className="Projects-Subcontainer-Box-Image Image-MaderoTango">
              <img
                className="Projects-Box-Logo Logo-MaderoTango"
                src={LogoMaderoTango}
                alt=""
              ></img>
            </div>
            <div className="Projects-Subcontainer-Box-Button"></div>
            <h3 className="Projects-Subcontainer-Box-Title">madero tango</h3>
            <p className="Projects-Subcontainer-Box-Description">
              Web Design, Branding, Mailing.
            </p>
          </div>
          <div className="Projects-Subcontainer-Box">
            <div className="Projects-Subcontainer-Box-Image Image-Daleplast">
              <img
                className="Projects-Box-Logo Logo-Daleplast"
                src={LogoDaleplast}
                alt=""
              ></img>
            </div>
            <div className="Projects-Subcontainer-Box-Button"></div>
            <h4 className="Projects-Subcontainer-Box-Title">daleplast</h4>
            <p className="Projects-Subcontainer-Box-Description">
              Web Design, Branding, Logotipo
            </p>
          </div>
          <div className="Projects-Subcontainer-Box">
            <div className="Projects-Subcontainer-Box-Image Image-TuEspacio">
              <img
                className="Projects-Box-Logo Logo-TuEspacio"
                src={LogoTuEspacio}
                alt=""
              ></img>
            </div>
            <div className="Projects-Subcontainer-Box-Button"></div>
            <h5 className="Projects-Subcontainer-Box-Title">tu espacio</h5>
            <p className="Projects-Subcontainer-Box-Description">
              Logotipo, Web Design, Branding, Social Media.
            </p>
          </div>
        </div>
        <div className="Projects-More-Container">
          Ver más <div className="Projects-More-Button"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
