import React from "react";
import Nav from "../components/nav";
import Landing from "../components/home/landing";
import Projects from "../components/projects";
import Categories from "../components/home/categories";
import SelectedProjects from "../components/selectedProjects";
const Home = () => {
  return (
    <>
      <Nav />
      <Landing />
      <Projects />
      <SelectedProjects />
      <Categories />
    </>
  );
};

export default Home;
