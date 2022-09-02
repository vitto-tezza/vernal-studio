import React from "react";
import "./Footer.css";
import footerLogo from "../../utils/images/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-Container">
        <div className="Footer-Subcontainer Footer-Subcontainer-1">
          <img src={footerLogo} alt="Vernal-Logo" className="Footer-Logo"></img>
          {/* ACÁ IRÍA "LINK" */}
          <a href="#Projects" className="Footer-Menu">
            PROYECTOS
          </a>
          <a href="#Contact" className="Footer-Menu">
            CONTACTO
          </a>
        </div>
        <div className="Footer-Subcontainer Footer-Subcontainer-2">
          <p className="Footer-Text">Seguinos en nuestras redes</p>
          <div className="Media-Container">
            <a href="www.instagram.com" className="Media-Links" alt="Instagram">
              <figure className="Media-Links-Image  Ig"></figure>
            </a>
            <a href="www.behance.com" className="Media-Links" alt="Instagram">
              <figure className="Media-Links-Image  Be"></figure>
            </a>
            <a href="www.linkedin.com" className="Media-Links" alt="Instagram">
              <figure className="Media-Links-Image In"></figure>
            </a>
          </div>
          <p className="Phone-Number">+54 9 1164572427</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
