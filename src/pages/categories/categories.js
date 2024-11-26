import React from "react";
import Nav from "../../components/nav";
import useFetch from "../../utils/useFetch";
// import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import Loader from "../../components/loader";
import CatComponent from "../../components/categories/catComponent";

const Categories = () => {
  // const { id } = useParams();
  const { data: projects, error } = useFetch(`${API_URL}`);

  console.log(projects)

  // const [categoryProjects, setCategoryProjects] = useState(projects);

  // useEffect(() => {
  //   setCategoryProjects(
  //     projects?.filter((project) => project.tag.includes(id))
  //   );
  // }, [projects, id]);

  return (
    <>
      <Nav />
      <div className="pt-[100px] max-w-screen-2xl mx-auto md:px-10 px-5">
        {projects ? (
          <section>
            <p className="subH">Selected Projects</p>
            <h3 className="midH capitalize mb-4">Works</h3>
            <CatComponent />
            <div className="grid sm:grid-cols-3 gap-4 pb-10">
              {/* mapping projects */}
              {projects?.map((project) => (
                <a
                  key={project.id}
                  className="link hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
                  href={`/#/projects/` + project.id}
                >
                  <div className="md:h-[55vh] h-[60vh] rounded-md p-7">
                    <p className="subH mb-0">
                      {project.tag[0]} {project.tag[1] && "| " + project.tag[1]}
                    </p>
                    <h1
                      className={`smallH max-w-[380px] font-[600] capitalize ${
                        project.tileColor === "black"
                          ? "text-neutral-800"
                          : "text-neutral-50"
                      }`}
                    >
                      {project.title}
                    </h1>
                    {project.tileImg && (
                      <img
                        className="absolute top-0 left-0 z-[-1] md:h-[55vh] h-[60vh] w-[100%] object-cover object-bottom rounded-lg"
                        src={require(`../../assets/images/mockups/${project.id}/${project.tileImg}`)}
                        alt={project.title}
                      />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Categories;
