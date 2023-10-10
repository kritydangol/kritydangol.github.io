import React from "react";
import logo from "../assets/images/logo-short.png";

const Construction = () => {
  return (
    <section className="construction">
      <img src={logo} alt="logo" className="logo-img" />
      <h1>Under Construction.</h1>
      <a href="/#/home" className="absolute top-5 right-10 text-neutral-400">
        go home
      </a>
    </section>
  );
};

export default Construction;
