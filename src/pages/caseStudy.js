import React from "react";
import Nav from "../components/nav";

const CaseStudy = () => {
  const mockups = [
    {
      fileName: "PSV mockups.jpg",
      alt: "PSV family mockup",
    },
    {
      fileName: "PSV family.png",
      alt: "PSV family mockup",
    },
    {
      fileName: "PSV all pages.jpg",
      alt: "PSV all pages",
    },
    {
      fileName: "PSV - all pages.jpg",
      alt: "PSV all pages",
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
      <section className="lg:mx-56 sm:mx-10 mx-5 pb-2">
        <div className="pt-[100px] mb-20 grid grid-cols-2 gap-4">
          <div>
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
            <h4>
              <a
                href="https://parthstudent.vc/"
                target="_blank"
                rel="noreferrer"
              >
                Parth Student Venture
              </a>
            </h4>
            <h5 className="subH pt-5">Year</h5>
            <h4>2022</h4>
          </div>
          <p className="pt-14">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quasi
            praesentium iusto perferendis recusandae asperiores, blanditiis
            dicta vitae iste. Maiores nemo quibusdam soluta recusandae
            dignissimos corrupti dolorem mollitia culpa magni. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quasi
            praesentium iusto perferendis recusandae asperiores, blanditiis
            dicta vitae iste. Maiores nemo quibusdam soluta recusandae
            dignissimos corrupti dolorem mollitia culpa magni. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quasi
            praesentium iusto perferendis recusandae asperiores, blanditiis
            dicta vitae iste. Maiores nemo quibusdam soluta recusandae
            dignissimos corrupti dolorem mollitia culpa magni. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.
            <br />
            <br />
            Illo quasi praesentium iusto perferendis recusandae asperiores,
            blanditiis dicta vitae iste. Maiores nemo quibusdam soluta
            recusandae dignissimos corrupti dolorem mollitia culpa magni. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Illo quasi
            praesentium iusto perferendis recusandae asperiores, blanditiis
            dicta vitae iste. Maiores nemo quibusdam soluta recusandae
            dignissimos corrupti dolorem mollitia culpa magni.
          </p>
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
