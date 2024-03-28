import React from "react";

const Categories = () => {
  const category = [
    { fileName: "development.gif", catName: "development" },
    { fileName: "design.gif", catName: "ui ux design" },
    { fileName: "graphic.gif", catName: "graphic design" },
  ];
  return (
    <section className="">
      <p className="subH">Selected</p>
      <h3 className="midH">Categories</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {category.map((item) => (
          <a
            key={item.catName}
            className="mb-10 hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
            href={`/#/categories/${item.catName}`}
          >
            <div className="rounded-md p-7 text-center">
              <img
                className="w-[25%] mx-auto"
                src={require(`../../assets/images/categories/${item.fileName}`)}
                alt={item.catName}
              />
              <h3 className="smallH capitalize pt-7">
                {item.catName === "ui ux design"
                  ? "UI/UX Design"
                  : item.catName}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
