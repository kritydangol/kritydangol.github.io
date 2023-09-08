import React from "react";
import Nav from "../components/nav";

const CaseStudy = () => {
  const details = [
    {
      tag: "Case study",
      title: "PSV — responsive website development",
      role: [
        "Creative Direction",
        "UI / UX",
        "Website Development",
        "Deployment",
      ],
      client: "Parth Student Venture",
      year: "2023",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?",
    },
    // {
    //   tag: "Case study",
    //   title: "Serene - A Mental Health App",
    //   role: [
    //     "Creative Direction",
    //     "UI / UX",
    //     "Website Development",
    //     "Deployment",
    //   ],
    //   client: "Motivate Nepalese",
    //   year: "2023",
    //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?",
    // },
  ];
  const mockups = [
    {
      fileName: "PSV family.png",
      alt: "PSV family mockup",
    },
    {
      fileName: "PSV mockups.jpg",
      alt: "PSV family mockup",
    },
    // {
    //   fileName: "PSV all pages.jpg",
    //   alt: "PSV all pages",
    // },
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
      fileName: "PSV phones.jpg",
      alt: "PSV phones mockup",
    },
    {
      fileName: "PSV phone.jpg",
      alt: "PSV phone mockup",
    },
    {
      fileName: "PSV tablets.jpg",
      alt: "PSV tablets mockup",
    },
    {
      fileName: "PSV - typography, colours.jpg",
      alt: "PSV - typography, colours",
    },
  ];
  return (
    <>
      <Nav />
      <section className="lg:mx-56 sm:mx-10 mx-5 pb-2">
        {details.map((detail) => (
          <div className="pt-[100px] mb-20 grid grid-cols-2 gap-4">
            <div>
              <h5 className="subH pt-5">{detail.tag}</h5>
              <h1 className="text-3xl">{detail.title}</h1>
              <h5 className="subH pt-5">My role</h5>
              <h4>
                {detail.role.map((role) => (
                  <p>{role}</p>
                ))}
              </h4>
              <h5 className="subH pt-5">Client</h5>
              <h4>
                <a
                  href="https://parthstudent.vc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {detail.client}
                </a>
              </h4>
              <h5 className="subH pt-5">Year</h5>
              <h4>{detail.year}</h4>
            </div>
            <p className="pt-14">{detail.desc} </p>
          </div>
        ))}
        <div className="images">
          {mockups.map((item) => (
            <img
              src={require(`../assets/images/mockups/PSV/${item.fileName}`)}
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
