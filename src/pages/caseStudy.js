import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import Loader from "../components/loader";

const CaseStudy = () => {
  const { id } = useParams();
  const { data: projects, error } = useFetch(`${API_URL}`);
  const [caseStudy, setCaseStudy] = useState(projects);

  useEffect(() => {
    setCaseStudy(projects?.filter((project) => project.id.includes(id)));
  }, [projects, id]);

  // console.log(caseStudy[0].tag.length);
  return (
    <>
      <Nav />
      <section className="max-w-screen-2xl md:px-10 px-5 mx-auto pt-[100px] pb-2">
        {caseStudy ? (
          <>
            <div className="mb-20 md:grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="pt-5">
                  {caseStudy[0].tag.map((tag, index) => (
                    <span className="subH" key={index}>
                      {tag}
                      {index < caseStudy[0].tag.length - 1 ? " | " : ""}
                    </span>
                  ))}
                </h5>
                <h1 className="text-3xl">{caseStudy[0].title}</h1>
                <h5 className="subH pt-5">My role</h5>
                <h4>
                  {caseStudy[0].role.map((role, index) => (
                    <p key={index}>{role}</p>
                  ))}
                </h4>
                <h5 className="subH pt-5">Client</h5>
                <h4 className="cursor-pointer">
                  <a href={caseStudy[0].link} target="_blank" rel="noreferrer">
                    {caseStudy[0].client}
                  </a>
                </h4>
                <h5 className="subH pt-5">Year</h5>
                <h4>{caseStudy[0].year}</h4>
              </div>
              <p className="pt-14 whitespace-pre-wrap	">{caseStudy[0].desc} </p>
            </div>
            {caseStudy[0].gallery[0] && (
              <div className="images">
                {caseStudy[0].gallery.map((item, index) => (
                  <img
                    src={require(`../assets/images/mockups/${caseStudy[0].id}/${item}`)}
                    alt={item}
                    key={index}
                    className="mb-7 border border-neutral-300 rounded w-full "
                  />
                ))}
              </div>
            )}
          </>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default CaseStudy;
