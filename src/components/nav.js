import React from "react";

const Nav = () => {
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

        <label>
          <input type="checkbox" />
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul id="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/home">Home real</a>
            </li>
          </ul>
        </label>
      </nav>
    </div>
  );
};

export default Nav;
