import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <nav id="nav">
      <a href="/#/home" className="logo">
        <img src={require("../assets/images/logo-circle-06.png")} alt="Logo" />
        <h2>Krity Dangol</h2>
        <p>Front-end Developer</p>
      </a>
      {/* open full page menu */}
      <span className="toggleMenu" onClick={toggleMenu}>
        <AiOutlineMenu />
      </span>
    </nav>
  );
};

export default Nav;
