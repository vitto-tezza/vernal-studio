import React from "react";
import "../../pages/HomePage.css";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs" id="AboutUs">
      <div className="Section-Title AboutUs-Section-Title">
        Servicios <div className="Section-Title-Image"></div>
      </div>
      <div className="AboutUs-Text">
        <p className="AboutUs-Text-Subtitle">
          A full-cycle digital service agency. We do from design to end-to-end
          development to maintenance.
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
          <div className="AboutUs-Subcontainer-Image AboutUs-Web-Design"></div>
        </div>
        {/* <div className="AboutUs-Subcontainer">
          <div className="AboutUs-Subcontainer-Area">
            Digital Content.{" "}
            <div className="AboutUs-Subcontainer-Area-Checkbox"></div>
          </div>
          <div className="AboutUs-Subcontainer-Image"></div>
        </div> */}
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
          <div className="AboutUs-Subcontainer-Image AboutUs-UxUi"></div>
        </div>
      </div>
      <div className="Background-Circle Circle-1"></div>
      <div className="Background-Circle Circle-2"></div>
    </div>
  );
};

export default AboutUs;
