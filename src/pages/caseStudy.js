import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import Loader from "../components/loader";

const CaseStudy = () => {
  const { id } = useParams();
  const { data: projects, error } = useFetch(`${API_URL}portfolio.json`);
  const [caseStudy, setCaseStudy] = useState(projects);

  useEffect(() => {
    setCaseStudy(projects?.filter((project) => project.id.includes(id)));
  }, [projects, id]);
  return (
    <>
      <Nav />
      {caseStudy ? (
        <section className="lg:mx-56 sm:mx-10 mx-5 pb-2">
          <div className="pt-[100px] mb-20 md:grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="subH pt-5">{caseStudy[0].tag}</h5>
              <h1 className="text-3xl">{caseStudy[0].title}</h1>
              <h5 className="subH pt-5">My role</h5>
              <h4>
                {caseStudy[0].role.map((role) => (
                  <p key={role}>{role}</p>
                ))}
              </h4>
              <h5 className="subH pt-5">Client</h5>
              <h4>
                <a
                  href="https://parthstudent.vc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {caseStudy[0].client}
                </a>
              </h4>
              <h5 className="subH pt-5">Year</h5>
              <h4>{caseStudy[0].year}</h4>
            </div>
            <p className="pt-14">{caseStudy[0].desc} </p>
          </div>
          {caseStudy[0].gallery[0] && (
            <div className="images">
              {caseStudy[0].gallery.map((item) => (
                <img
                  src={require(`../assets/images/mockups/${caseStudy[0].id}/${item}`)}
                  alt={item}
                  className="mb-7 border border-neutral-300 rounded"
                />
              ))}
            </div>
          )}
        </section>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CaseStudy;
