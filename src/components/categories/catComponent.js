import React from "react";

const CatComponent = () => {
  return (
    <div className="mb-5">
      <a href="#/categories/all" className="link mr-5">
        All
      </a>
      <a href="#/categories/development" className="link mr-5">
        Development
      </a>
      <a href="#/categories/ui ux design" className="link mr-5">
        UI/UX design
      </a>
      <a href="#/categories/graphic design" className="link mr-5">
        Graphic Design
      </a>
    </div>
  );
};

export default CatComponent;
