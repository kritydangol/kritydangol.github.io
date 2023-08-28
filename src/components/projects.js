import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "PSV — responsive website development",
      tag: "Case study",
      link: "/#/caseStudy",
      img: "PSV Tile1.jpg",
    },
    {
      title: "PSV — responsive website development",
      tag: "Case study",
      link: "/#/caseStudy",
      img: "PSV Tile1.jpg",
    },
    {
      title: "PSV — responsive website development",
      tag: "Case study",
      link: "/#/caseStudy",
      img: "PSV Tile1.jpg",
    },
  ];
  return (
    <section className="lg:mx-56 sm:mx-10 mx-5">
      <p className="subH">Selected Projects</p>
      <h3 className="midH">Case Studies</h3>
      <div className="grid sm:grid-cols-2 gap-4 pb-10">
        {/* mapping projects */}
        {projects.map((project) => (
          <a
            className="hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
            href={project.link}
          >
            <div className="h-[80vh] rounded-md p-7">
              <p className="subH mb-0">{project.tag}</p>
              <h1 className="smallH max-w-[380px] font-[700] capitalize text-neutral-50">
                {project.title}
              </h1>
              <img
                className="absolute top-0 left-0 z-[-1] h-[80vh] w-[100%] object-cover object-bottom rounded-lg"
                src={require(`../assets/images/${project.img}`)}
                alt={project.title}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
