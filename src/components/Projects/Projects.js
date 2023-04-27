import React from "react";
import "./Projects.css";
import ProjectsArrow from "../../utils/images/projects-titlearrow.svg";
import LogoLoop3 from "../../utils/images/projects-loop3-logo.png";
import LogoMaderoTango from "../../utils/images/projects-maderotango-logo.png";
import LogoDaleplast from "../../utils/images/projects-daleplast-logo.png";
import LogoTuEspacio from "../../utils/images/projects-tuespacio-logo.svg";

import scrollFunction from "../../utils/funtions/Scroll-Function";

const Projects = (scrollFunction) => {
  return (
    <div className="Projects" id="Projects">
      <div className="Projects-Container">
        <div className="Section-Title">
          Nosotros <div className="Section-Title-Image"></div>
        </div>
        <div className="Projects-Title-Container">
          <p className="Projects-Title Projects-Title-1">
            Somos un estudio creativo especializado en comunicar historias a
            través del branding
          </p>

          <div className="Projects-Line"></div>
          <p className="Projects-Subtitle">
            A full-cycle digital service agency. We do from design to end-to-end
            development to maintenance.
          </p>
        </div>
        <div className="Section-Title">
          Proyectos <div className="Section-Title-Image"></div>
        </div>
        <p className="Projects-Selection">Nuestra selección</p>
        <div className="Projects-Subcontainer">
          <div className="Projects-Subcontainer-Box">
            <div className="Projects-Subcontainer-Box-Image Image-Loop">
              <img
                className="Projects-Box-Logo Logo-Loop"
                src={LogoLoop3}
                alt=""
              ></img>
            </div>
            <h3 className="Projects-Subcontainer-Box-Title">loop3</h3>
            <p className="Projects-Subcontainer-Box-Location">
              Buenos Aires, ARG
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
            <h4 className="Projects-Subcontainer-Box-Title">madero tango</h4>
            <p className="Projects-Subcontainer-Box-Location">
              Buenos Aires, ARG
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
            <h5 className="Projects-Subcontainer-Box-Title">daleplast</h5>
            <p className="Projects-Subcontainer-Box-Location">
              Buenos Aires, ARG
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
            <h6 className="Projects-Subcontainer-Box-Title">tu espacio</h6>
            <p className="Projects-Subcontainer-Box-Location">
              Buenos Aires, ARG
            </p>
          </div>
        </div>
        <div className="Projects-More-Container">
          <div className="Projects-More-Button"></div>
          <p className="Projects-More-Text">VER MÁS</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Projects;
