import React from "react";
import ScrollToAnchor from "../../utils/scrollToAnchor";

const Landing = () => {
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - 2021;
  return (
    <section className="grid md:grid-cols-2 gap-4 lg:px-56 sm:px-10 px-5 min-h-screen bg-primary">
      <ScrollToAnchor />
      <div className="md:table hidden">
        <div className="table-cell align-middle">
          <img
            src={require("../../assets/images/avatar.png")}
            alt="logo"
            className="mx-auto"
          />
          {/* <img
            src={require("../../assets/images/logo-circle-06.png")}
            alt="logo"
            className="imageRot mx-auto"
          /> */}
        </div>
      </div>
      <div className="table">
        <div className="table-cell align-middle">
          <p className="subH">Krity Dangol</p>
          <h2 className="head">Frontend Developer</h2>
          <p className="mb-6">
            Over the past {totalYears} years, I have been a dedicated frontend
            developer with expertise in React and UI/UX design. My portfolio
            showcases projects where I have transformed ideas into impactful
            digital solutions. Feel free to browse my work and see the exciting
            digital solutions I’ve created!
          </p>
          <a href="/#/#projects" className="link">
            View Projects
          </a>
          &nbsp;&nbsp;or&nbsp;&nbsp;
          <a
            href={require("../../assets/CV/Krity Dangol CV.pdf")}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
