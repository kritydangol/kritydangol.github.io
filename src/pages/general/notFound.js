import React from "react";
import Nav from "../../components/nav";

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="text-center mt-[10vh]">
        <img
          className="mx-auto"
          src={require("../../assets/images/404.png")}
          alt="404"
        />
        <h1 className="text-4xl">Page Not Found</h1>
        <p className="pt-3 pb-8">Are you lost, baby gorl?</p>
        <a href="/#/home" className="link">
          Go Home
        </a>
      </div>
    </>
  );
};

export default NotFound;
