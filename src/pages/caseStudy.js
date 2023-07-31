import React from "react";
import Nav from "../components/nav";

const CaseStudy = () => {
  const mockups = [
    {
      fileName: "PSV mockups.jpg",
      alt: "PSV family mockup",
    },
    {
      fileName: "PSV laptop.jpg",
      alt: "PSV laptop mockup",
    },
    {
      fileName: "PSV mobile.jpg",
      alt: "PSV mobile mockup",
    },
    {
      fileName: "PSV tablet.jpg",
      alt: "PSV tablet mockup",
    },
  ];
  return (
    <>
      <Nav />
      <section className="lg:mx-56 sm:mx-10 mx-5">
        <div className="pt-[100px] mb-20">
          <h5 className="subH pt-5">Case study</h5>
          <h1 className="text-3xl">PSV — responsive website development</h1>
          <h5 className="subH pt-5">My role</h5>
          <h4>
            Creative Direction
            <br />
            UI / UX
            <br />
            Website Development
            <br />
            Deployment
          </h4>
          <h5 className="subH pt-5">Client</h5>
          <h4>Parth Student Venture</h4>
          <h5 className="subH pt-5">Year</h5>
          <h4>2017</h4>
        </div>
        <div className="images">
          {mockups.map((item) => (
            <img
              src={require(`../assets/images/${item.fileName}`)}
              alt={item.alt}
              className="mb-7 border border-neutral-300 rounded"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
