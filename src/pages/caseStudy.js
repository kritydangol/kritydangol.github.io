import React from "react";

const CaseStudy = () => {
  return (
    <div>
      <div>
        <h5>Case study</h5>
        <h1>PSV — responsive website development</h1>
        <h5>My role</h5>
        <h4>
          Creative Direction
          <br />
          UI / UX
          <br />
          Website Development
          <br />
          Deployment
        </h4>
        <h5>Client</h5>
        <h4>Parth Student Venture</h4>
        <h5>Year</h5>
        <h4>2017</h4>
      </div>
      <div className="images">
        <img src={require("../assets/images/PSV mockups.jpg")} alt="" />
      </div>
    </div>
  );
};

export default CaseStudy;
