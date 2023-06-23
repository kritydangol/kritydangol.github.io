import React from "react";
import Nav from "../components/nav";
const Home = () => {
  return (
    <>
      <Nav />
      {/* Landing Section */}
      <section className="grid md:grid-cols-2 gap-4 lg:mx-56 mx-10 min-h-screen">
        <div className="table">
          <div className="table-cell align-middle">
            <p className="subH">Krity Dangol</p>
            <h2 className="head">Frontend Developer</h2>
            <p>
              Over the past 4 years, i have been doing projects as a frontend
              developer/designer, Lorem ipsum dolor minus laborum accusamus non
              laudantium accusantium alias vitae aliquam dolor laboriosam quo
              iusto!
            </p>
            <a href="/" className="link">
              View Projects
            </a>
            &nbsp;&nbsp;or&nbsp;&nbsp;
            <a href="/" className="link">
              Download CV
            </a>
          </div>
        </div>
        <div className="md:table hidden">
          <div className="table-cell align-middle">
            <img
              src={require("../assets/images/logo-circle-06.png")}
              alt="logo"
              className="imageRot mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="container projects lg:mx-56 mx-10">
        <div className="row">
          <div className="col-12">
            <p className="subH">Selected Projects</p>
            <h3 className="midH">Case Studies</h3>
          </div>
        </div>
        <div className="row pt-4" id="worksCard"></div>
      </section>
    </>
  );
};

export default Home;
