import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader-component">
        <div className="loader-container">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
        <h1>Loading</h1>
      </div>
    </>
  );
};

export default Loader;
