import React from "react";

const Projects = () => {
  return (
    <section className="lg:mx-56 sm:mx-10 mx-5">
      <p className="subH">Selected Projects</p>
      <h3 className="midH">Case Studies</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <a
          className="mb-10 hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
          href="/caseStudy"
        >
          <div className="h-[80vh] rounded-md p-7">
            <p className="subH mb-0">Case study</p>
            <h1 className="smallH max-w-[380px] font-[700] capitalize text-neutral-50">
              PSV — responsive website development
            </h1>
            <img
              className="absolute top-0 left-0 z-[-1] h-[80vh] w-[100%] object-cover object-bottom rounded-lg"
              src={require("../assets/images/PSV Tile1.jpg")}
              alt="tile mockup"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
