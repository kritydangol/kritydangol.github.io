import React from "react";

const Projects = () => {
  return (
    <section className="lg:mx-56 sm:mx-10 mx-5">
      <p className="subH">Selected Projects</p>
      <h3 className="midH">Case Studies</h3>
      <div className="grid grid-cols-2 gap-4">
        <a
          className="mb-10 hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
          href="/caseStudy"
        >
          <div className="h-[80vh] rounded-md p-7">
            <div className="">
              <h5>Case study</h5>
              <h1>PSV — responsive website development</h1>
            </div>
            <img
              className="absolute top-0 left-0 z-[-1] h-[80vh] w-[100%] object-cover object-bottom rounded-lg"
              src={require("../assets/images/PSV Tile.jpg")}
              alt="tile mockup"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
