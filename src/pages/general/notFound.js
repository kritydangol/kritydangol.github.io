import React from "react";
import Nav from "../../components/nav";

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="text-center h-[100vh] grid place-content-center">
        <img
          className="w-96"
          src={require("../../assets/images/404.png")}
          alt="404"
        />
        <h1 className="text-4xl">Page Not Found</h1>
        <p className="pt-3 pb-8">Are you lost, baby gorl?</p>
        <a href="/" className="link w-fit mx-auto">
          Go Home
        </a>
      </div>
    </>
  );
};

export default NotFound;
