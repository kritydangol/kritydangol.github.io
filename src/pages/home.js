import React from "react";

const Home = () => {
  return (
    <>
      <div className="nav">
        <nav id="nav">
          <a href="/home" className="logo">
            <img
              src={require("../assets/images/logo-circle-06.png")}
              alt="Logo"
            />
            <h2>Krity Dangol</h2>
            <p>Front-end Developer</p>
          </a>

          <label>
            <input type="checkbox" />
            <span className="menu">
              <span className="hamburger"></span>
            </span>
            <ul id="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/home">Home real</a>
              </li>
            </ul>
          </label>
        </nav>
      </div>

      {/* Landing Section */}
      <section className="grid grid-cols-2 gap-4">
        <div>
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

        <div>
          <img
            src={require("../assets/images/logo-circle-06.png")}
            alt=""
            className="imageRot"
          />
        </div>
      </section>

      <section className="container projects">
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
