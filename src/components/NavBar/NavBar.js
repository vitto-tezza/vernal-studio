import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="container-NavBar">
      <div className="menu">
        <img className="img-menu" src="imgMenu.png"></img>
      </div>
      <div className="logo">
        <img className="logo-vernal" src="logoVernal.png"></img>
      </div>
    </header>
  );
}

export default NavBar;
