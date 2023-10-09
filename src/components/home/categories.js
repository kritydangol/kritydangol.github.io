import React from "react";

const Categories = () => {
  const category = [
    { fileName: "development.png", catName: "development" },
    { fileName: "design.png", catName: "design" },
    { fileName: "others.png", catName: "others" },
  ];
  return (
    <section className="lg:mx-56 sm:mx-10 mx-5">
      <p className="subH">Top Categories</p>
      <h3 className="midH">Categories</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {category.map((item) => (
          <a
            key={item.catName}
            className="mb-10 hover:scale-[1.02] transition ease-in-out border-solid border-2 border-neutral-200 rounded-lg"
            href={`/#/${item.catName}`}
          >
            <div className="rounded-md p-7 text-center">
              <img
                className="w-[70%] mx-auto"
                src={require(`../../assets/images/${item.fileName}`)}
                alt={item.catName}
              />
              <h3 className="smallH capitalize pt-7">{item.catName}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
