import React from "react";
import Nav from "../components/nav";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";

const CaseStudy = () => {
  // const details = [
  //   {
  //     tag: "Case study",
  //     title: "PSV — responsive website development",
  //     role: [
  //       "Creative Direction",
  //       "UI / UX",
  //       "Website Development",
  //       "Deployment",
  //     ],
  //     client: "Parth Student Venture",
  //     year: "2023",
  //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?",
  //   },
  //   // {
  //   //   tag: "Case study",
  //   //   title: "Serene - A Mental Health App",
  //   //   role: [
  //   //     "Creative Direction",
  //   //     "UI / UX",
  //   //     "Website Development",
  //   //     "Deployment",
  //   //   ],
  //   //   client: "Motivate Nepalese",
  //   //   year: "2023",
  //   //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?",
  //   // },
  // ];
  // const mockups = [
  //   {
  //     fileName: "PSV/PSV family.png",
  //     alt: "PSV family mockup",
  //   },
  //   {
  //     fileName: "PSV/PSV mockups.jpg",
  //     alt: "PSV family mockup",
  //   },
  //   // {
  //   //   fileName: "PSV/PSV all pages.jpg",
  //   //   alt: "PSV all pages",
  //   // },
  //   {
  //     fileName: "PSV/PSV - all pages.jpg",
  //     alt: "PSV all pages",
  //   },
  //   {
  //     fileName: "PSV/PSV laptop.jpg",
  //     alt: "PSV laptop mockup",
  //   },
  //   {
  //     fileName: "PSV/PSV mobile.jpg",
  //     alt: "PSV mobile mockup",
  //   },
  //   {
  //     fileName: "PSV/PSV phones.jpg",
  //     alt: "PSV phones mockup",
  //   },
  //   {
  //     fileName: "PSV/PSV phone.jpg",
  //     alt: "PSV phone mockup",
  //   },
  //   {
  //     fileName: "PSV/PSV tablets.jpg",
  //     alt: "PSV tablets mockup",
  //   },
  //   {
  //     fileName: "PSV/PSV - typography, colours.jpg",
  //     alt: "PSV - typography, colours",
  //   },
  // ];
  const { id } = useParams();
  const { data: project, error } = useFetch(
    `http://localhost:8000/projects/${id}`
  );
  // console.log(project.gallery[0]);
  // {
  //     "id": 3,
  //     "tag": "Development",
  //     "title": "Trisara - dynamic website development",
  //     "link": "/#/caseStudy",
  //     "tileImg": "PSV/PSV Tile1.jpg",
  //     "tileColor": "white",
  //     "role": [
  //       "Creative Direction",
  //       "UI / UX",
  //       "Website Development",
  //       "ReactJS",
  //       "Deployment"
  //     ],
  //     "client": "Trisara",
  //     "year": "2023",
  //     "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?",
  //     "gallery": ["PSV Tile1.jpg", "PSV Tile1.jpg", "PSV Tile1.jpg"]
  //   },
  //   {
  //     "id": 4,
  //     "tag": "Design",
  //     "title": "Alchi - graphic designer",
  //     "link": "/#/caseStudy",
  //     "tileImg": "PSV/PSV Tile1.jpg",
  //     "tileColor": "white",
  //     "role": [
  //       "Creative Direction",
  //       "Graphic Design",
  //       "Social Media Posts",
  //       "Adobe Illustrator"
  //     ],
  //     "client": "Alchi",
  //     "year": "2023",
  //     "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?",
  //     "gallery": ["PSV Tile1.jpg", "PSV Tile1.jpg", "PSV Tile1.jpg"]
  //   },
  //   {
  //     "id": 5,
  //     "tag": "Design",
  //     "title": "CNIYEF - graphic designer",
  //     "link": "/#/caseStudy",
  //     "tileImg": "PSV/PSV Tile1.jpg",
  //     "tileColor": "white",
  //     "role": [
  //       "Creative Direction",
  //       "Graphic Design",
  //       "Social Media Posts",
  //       "Canva"
  //     ],
  //     "client": "CNIYEF",
  //     "year": "2023",
  //     "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n Vitae iste quisquam sunt assumenda expedita molestias molestiae incidunt et. Consectetur minima at cumque esse blanditiis qui corporis tenetur voluptatibus necessitatibus! Sequi?",
  //     "gallery": ["PSV Tile1.jpg", "PSV Tile1.jpg", "PSV Tile1.jpg"]
  //   }
  return (
    <>
      <Nav />
      {project ? (
        <section className="lg:mx-56 sm:mx-10 mx-5 pb-2">
          <div className="pt-[100px] mb-20 grid grid-cols-2 gap-4">
            <div>
              <h5 className="subH pt-5">{project.tag}</h5>
              <h1 className="text-3xl">{project.title}</h1>
              <h5 className="subH pt-5">My role</h5>
              <h4>
                {project.role.map((role) => (
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
                  {project.client}
                </a>
              </h4>
              <h5 className="subH pt-5">Year</h5>
              <h4>{project.year}</h4>
            </div>
            <p className="pt-14">{project.desc} </p>
          </div>
          {project.gallery[0] && (
            <div className="images">
              {project.gallery.map((item) => (
                <img
                  src={require(`../assets/images/mockups/${project.id}/${item}`)}
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
        <p>Loading...</p>
      )}
    </>
  );
};

export default CaseStudy;
