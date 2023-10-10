import React from "react";
import Nav from "../components/nav";
import Landing from "../components/home/landing";
import Projects from "../components/projects";
import Categories from "../components/home/categories";
const Home = () => {
  return (
    <>
      <Nav />
      <Landing />
      <Projects />
      <Categories />
    </>
  );
};

export default Home;
