import React from "react";

const Categories = () => {
  return (
    <section className="lg:mx-56 sm:mx-10 mx-5">
      <p className="subH">Top Categories</p>
      <h3 className="midH">Categories</h3>
      <div className="grid grid-cols-3 gap-4">
        <a
          className="mb-10 hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
          href="/caseStudy"
        >
          <div className="h-[10vh] rounded-md p-7"></div>
        </a>
      </div>
    </section>
  );
};

export default Categories;
