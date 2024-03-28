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
      <div className="max-w-screen-2xl md:px-10 px-5 mx-auto">
        <SelectedProjects />
        <Projects />
        <Categories />
      </div>
    </>
  );
};

export default Home;
