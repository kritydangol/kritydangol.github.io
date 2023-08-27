import React from "react";
import Projects from "../components/projects";
import Nav from "../components/nav";

const Categories = () => {
  return (
    <>
      <Nav />
      <div className="pt-[100px]">
        <Projects />
      </div>
    </>
  );
};

export default Categories;
