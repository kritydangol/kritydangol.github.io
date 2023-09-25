import React from "react";

const NotFound = () => {
  return (
    <div>
      <img
        className="mx-auto"
        src={require("../../assets/images/404.png")}
        alt="404"
      />
      <h1 className="text-4xl text-center">Page Not Found</h1>
      <p className="text-center py-5">Are you lost, baby gorl?</p>
    </div>
  );
};

export default NotFound;
