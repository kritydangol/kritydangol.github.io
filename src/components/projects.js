import React from "react";
import useFetch from "../utils/useFetch";
import { API_URL } from "../utils/constants";
import Loader from "./loader";

const Projects = () => {
  const { data: projects, error } = useFetch(`${API_URL}`);

  return (
    <section id="projects" className="mt-10">
      <p className="subH">Other Projects</p>
      <div className="flex justify-between items-center">
        <h3 className="midH">Recent Works</h3>
        <a className="link" href="/#/categories">
          View More
        </a>
      </div>
      {projects ? (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 pb-10">
          {/* mapping projects */}
          {projects
            .filter((project) => !project.selected)
            .slice(0, 3)
            .map((project) => (
              <a
                key={project.id}
                className="link hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
                href={`/#/projects/` + project.id}
              >
                <div className="md:h-[55vh] h-[60vh] rounded-md p-7">
                  <p className="subH mb-0">
                    {project.tag.map((tag, index) => (
                      <span className="subH" key={index}>
                        {tag}
                        {index < project.tag.length - 1 ? " | " : ""}
                      </span>
                    ))}
                  </p>
                  <h1
                    className={`smallH max-w-[380px] font-[700] capitalize ${
                      project.tileColor === "black"
                        ? "text-neutral-800"
                        : "text-neutral-50"
                    }`}
                  >
                    {project.title}
                  </h1>
                  {project.tileImg && (
                    <img
                      className="absolute top-0 left-0 z-[-1] h-full w-[100%] object-cover object-bottom rounded-lg"
                      src={require(`../assets/images/mockups/${project.id}/${project.tileImg}`)}
                      alt={project.title}
                    />
                  )}
                </div>
              </a>
            ))}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Projects;
