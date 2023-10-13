import React from "react";
import ScrollToAnchor from "../../utils/scrollToAnchor";

const Landing = () => {
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - 2021;
  return (
    <section className="grid md:grid-cols-2 gap-4 lg:mx-56 sm:mx-10 mx-5 min-h-screen">
      <ScrollToAnchor />
      <div className="table">
        <div className="table-cell align-middle">
          <p className="subH">Krity Dangol</p>
          <h2 className="head">Frontend Developer</h2>
          <p className="mb-6">
            Over the past {totalYears} years, i have been doing projects as a
            frontend developer/designer, Lorem ipsum dolor minus laborum
            accusamus non laudantium accusantium alias vitae aliquam dolor
            laboriosam quo iusto!
          </p>
          <a href="/#/home#projects" className="link">
            View Projects
          </a>
          &nbsp;&nbsp;or&nbsp;&nbsp;
          <a href="/#/home" className="link">
            Download CV
          </a>
        </div>
      </div>
      <div className="md:table hidden">
        <div className="table-cell align-middle">
          <img
            src={require("../../assets/images/logo-circle-06.png")}
            alt="logo"
            className="imageRot mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
