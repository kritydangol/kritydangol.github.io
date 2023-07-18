import React from "react";
import Nav from "../components/nav";
import Landing from "../components/home/landing";
const Home = () => {
  return (
    <>
      <Nav />
      <Landing />
      <section className="lg:mx-56 sm:mx-10 mx-5">
        <p className="subH">Selected Projects</p>
        <h3 className="midH">Case Studies</h3>
      </section>
    </>
  );
};

export default Home;
