import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="container-NavBar">
      <div className="menu">
        <div onClick={toggleMenu}>
          <img className="img-menu" src="imgMenu.png"></img>
        </div>
      </div>

      <div className="logo">
        <img className="logo-vernal" src="logoVernal.png"></img>
      </div>
      <div className={`Desplegable ${menu ? "isActive" : ""}`}>
        <div className="menu-nav">
          {/* LOGO  FALTA         */}
          <div className="Logo-Container"></div>
          <ul className="menu-ul">
            {/* BOTON IDIOMAS FALTA */}idiomas
            <li className="menu-li">
              <a href="#" className="menu-a">
                Proyectos
              </a>
            </li>
            <li className="menu-li">
              <a href="#" className="menu-a">
                Nosotros
              </a>
            </li>
            <li className="menu-li">
              <a href="#" className="menu-a">
                Servicios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
