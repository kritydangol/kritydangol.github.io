import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { id } = useParams();
  const { data: projects, error } = useFetch("http://localhost:8000/projects");
  const [categoryProjects, setCategoryProjects] = useState(projects);

  useEffect(() => {
    setCategoryProjects(
      projects?.filter((project) => project.tag.includes(id))
    );
  }, [projects, id]);

  console.log(categoryProjects);
  return (
    <>
      <Nav />
      <div className="pt-[100px]">
        <section className="lg:mx-56 sm:mx-10 mx-5">
          <p className="subH">Selected Projects</p>
          <h3 className="midH">Case Studies</h3>
          {projects ? (
            <div className="grid sm:grid-cols-2 gap-4 pb-10">
              {/* mapping projects */}
              {categoryProjects?.map((project) => (
                <a
                  key={project.id}
                  className="hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
                  href={`/#/projects/` + project.id}
                >
                  <div className="h-[80vh] rounded-md p-7">
                    <p className="subH mb-0">
                      {project.tag[0]} {project.tag[1] && "| " + project.tag[1]}
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
                        className="absolute top-0 left-0 z-[-1] h-[80vh] w-[100%] object-cover object-bottom rounded-lg"
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
            <p>Loading...</p>
          )}
        </section>
      </div>
    </>
  );
};

export default Categories;
