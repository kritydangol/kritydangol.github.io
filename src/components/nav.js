import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";

const Nav = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className="nav fixed">
      <nav id="nav">
        <a href="/home" className="logo">
          <img
            src={require("../assets/images/logo-circle-06.png")}
            alt="Logo"
          />
          <h2>Krity Dangol</h2>
          <p>Front-end Developer</p>
        </a>
        <button onClick={toggleMenu} className="primary-button">
          Toggle Menu
        </button>
      </nav>
    </div>
  );
};

export default Nav;
