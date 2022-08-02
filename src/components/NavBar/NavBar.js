import React, { useState } from "react";
/*css*/
import "./NavBar.css";
/*images*/
import imgMenu from "../../utils/images/img-menu.png";
import logoVernalWhite from "../../utils/images/logo-vernal-white.png";
import logoVernalBlack from "../../utils/images/logo-vernal-black.png";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="container-NavBar">
      <div className="menu">
        <div onClick={toggleMenu}>
          <img className="img-menu" src={imgMenu}></img>
        </div>
      </div>

      <div className="logo">
        <img className="logo-vernal" src={logoVernalWhite}></img>
      </div>
      <div className={`Desplegable ${menu ? "isActive" : ""}`}>
        <div className="menu-nav">
          <div>
            <img className="logo-desplegable" src={logoVernalBlack}></img>
          </div>
          <div className="menu-list">
            <div className="language-button" id="language-button">
              ES <img className="language-button-img"></img>
            </div>
            <ul className="menu-ul">
              <li className="menu-li">
                <div className="menu-checkbox"></div>
                <a href="#" className="menu-a">
                  Proyectos
                </a>
              </li>
              <li className="menu-li">
                <div className="menu-checkbox"></div>
                <a href="#" className="menu-a">
                  Nosotros
                </a>
              </li>
              <li className="menu-li">
                <div className="menu-checkbox"></div>
                <a href="#" className="menu-a">
                  Servicios
                </a>
              </li>
            </ul>
          </div>
          <div className="txt-desplegable">
            <p className="txt-desplegable-1">Estudio creativo de diseno</p>
            <p className="txt-desplegable-2">Buenos Aires, Argentina</p>
            <p className="txt-desplegable-tel">+54 9112345678</p>
          </div>
          <div>
            <p>Contactanos</p>
            <img src=""></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
