import React from "react";
import "./Projects.css";
import ProjectsArrow from "../../utils/images/projects-titlearrow.svg";
import LogoLoop3 from "../../utils/images/projects-loop3-logo.png";
import LogoMaderoTango from "../../utils/images/projects-maderotango-logo.png";
import LogoDaleplast from "../../utils/images/projects-daleplast-logo.png";
import LogoTuEspacio from "../../utils/images/projects-tuespacio-logo.svg";

const Projects = () => {
  window.addEventListener("scroll", function() {
    var animate = document.querySelectorAll(".animate");

    for (let i = 0; i < animate.length; i++) {
      let altura = window.innerHeight / 1.7;

      let distancia = animate[i].getBoundingClientRect().top;

      if (distancia <= altura) {
        animate[i].classList.remove(
          "Projects-ScrollAnimation",
          "Projects-ScrollAnimation-Arrow"
        );
      }
    }
  });

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
            innovadores y con carácter.
          </p>
          <img
            className="Projects-Arrow Projects-ScrollAnimation-Arrow animate"
            src={ProjectsArrow}
            alt="arrow"
          ></img>
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
            <h3 className="Projects-Subcontainer-Box-Title">loop3</h3>
            <p className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Mobile">
              Web Design, Branding, Logotipo.
            </p>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>Web
              Design.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>
              Branding.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>
              Logotipo.
            </div>
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
            <h4 className="Projects-Subcontainer-Box-Title">madero tango</h4>
            <p className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Mobile">
              Web Design, Branding, Mailing.
            </p>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>Web
              Design.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>
              Branding.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>Mailing.
            </div>
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
            <h5 className="Projects-Subcontainer-Box-Title">daleplast</h5>
            <p className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Mobile">
              Web Design, Branding, Logotipo
            </p>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>Web
              Design.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>
              Branding.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>
              Logotipo.
            </div>
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
            <h6 className="Projects-Subcontainer-Box-Title">tu espacio</h6>
            <p className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Mobile">
              Logotipo, Web Design, Branding, Social Media.
            </p>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>
              Logotipo.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>Web
              Design.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div>
              Branding.
            </div>
            <div className="Projects-Subcontainer-Box-Description Projects-Subcontainer-Box-Description-Desktop">
              <div className="Projects-Subcontainer-Box-Checkbox"></div> Social
              Media.
            </div>
          </div>
        </div>
        <div className="Projects-More-Container">
          <p className="Projects-More-Text">Ver más</p>{" "}
          <div className="Projects-More-Button"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
