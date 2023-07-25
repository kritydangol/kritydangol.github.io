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
        <a href="/caseStudy">
          <div className="w-[50%] h-[70vh] bg-neutral-500 rounded-md"></div>
        </a>
      </section>
    </>
  );
};

export default Home;
