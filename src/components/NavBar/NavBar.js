import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={`container-NavBar ${menu ? "isActive" : ""}`}>
      <div className="menu">
        <div onClick={toggleMenu}>
          <img className="img-menu" src="imgMenu.png"></img>
        </div>
        <div className={`menu-nav ${menu ? "isActive" : ""}`}>
          <ul className="menu-ul">
            <li className="menu-li">
              <a href="#" className="menu-a">
                item 1
              </a>
            </li>
            <li className="menu-li">
              <a href="#" className="menu-a">
                item 2
              </a>
            </li>
            <li className="menu-li">
              <a href="#" className="menu-a">
                item 3
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="logo">
        <img className="logo-vernal" src="logoVernal.png"></img>
      </div>
    </header>
  );
}

export default NavBar;
