import React from "react";
import "../../pages/HomePage.css";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs" id="AboutUs">
      <div className="AboutUs-Text">
        <p className="AboutUs-Text-Title">- Participamos en cada detalle</p>
        <p className="AboutUs-Text-Subtitle-Mobile AboutUs-Text-Subtitle">
          Nos especializamos en el desarrollo de<br></br>proyectos 360°,{" "}
          <span className="AboutUs-Text-Subtitle-Span">
            cuidando cada<br></br>aspecto de tu marca.
          </span>{" "}
        </p>
        <p className="AboutUs-Text-Subtitle-Desktop AboutUs-Text-Subtitle">
          Nos especializamos en el desarrollo de proyectos<br></br>360°,{" "}
          <span className="AboutUs-Text-Subtitle-Span">
            cuidando cada aspecto de tu marca.
          </span>{" "}
        </p>
      </div>
      <div className="AboutUs-Container">
        <div className="AboutUs-Subcontainer">
          <div className="AboutUs-Subcontainer-Area">
            Branding. <div className="AboutUs-Subcontainer-Area-Checkbox"></div>
          </div>
          <div className="AboutUs-Subcontainer-Image"></div>
        </div>
        <div className="AboutUs-Subcontainer">
          <div className="AboutUs-Subcontainer-Area">
            Web Design.{" "}
            <div className="AboutUs-Subcontainer-Area-Checkbox"></div>
          </div>
          <div className="AboutUs-Subcontainer-Image"></div>
        </div>
        <div className="AboutUs-Subcontainer">
          <div className="AboutUs-Subcontainer-Area">
            Digital Content.{" "}
            <div className="AboutUs-Subcontainer-Area-Checkbox"></div>
          </div>
          <div className="AboutUs-Subcontainer-Image"></div>
        </div>
        <div className="AboutUs-Subcontainer">
          <div className="AboutUs-Subcontainer-Area">
            Social Media.{" "}
            <div className="AboutUs-Subcontainer-Area-Checkbox"></div>
          </div>
          <div className="AboutUs-Subcontainer-Image"></div>
        </div>
        <div className="AboutUs-Subcontainer">
          <div className="AboutUs-Subcontainer-Area">
            UX/UI <div className="AboutUs-Subcontainer-Area-Checkbox"></div>
          </div>
          <div className="AboutUs-Subcontainer-Image"></div>
        </div>
      </div>
      <div className="Background-Circle Circle-1"></div>
      <div className="Background-Circle Circle-2"></div>
    </div>
  );
};

export default AboutUs;
