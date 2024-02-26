// components/Playground.tsx
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Playground = () => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const navItems = [
    {
      label: "dashboard",
      href: "/#!",
      icon: <RxCross1 />,
    },
    {
      label: "dashboard",
      href: "/#!",
      icon: <RxCross1 />,
    },
    {
      label: "dashboard",
      href: "/#!",
      icon: <RxCross1 />,
    },
    {
      label: "dashboard",
      href: "/#!",
      icon: <RxCross1 />,
    },
  ];
  return (
    <div
      className={`grid min-h-screen ${
        collapsed ? "grid-cols-sidebar-collapsed" : "grid-cols-sidebar"
      } transition-[grid-template-columns] duration-300 ease-in-out`}
    >
      {/* sidebarr */}
      {/* https://reacthustle.com/blog/nextjs-react-responsive-collapsible-sidebar-tailwind#step-4-creating-the-sidebar-component */}
      <div className="bg-green-700 text-white">
        <button onClick={() => setSidebarCollapsed(!collapsed)}>close</button>
        {!collapsed && <span className="whitespace-nowrap">My Logo</span>}

        {/* nav items part */}
        <nav className="flex-grow">
          <ul className={"my-2 flex flex-col gap-2 items-stretch"}>
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`text-green-100 hover:bg-green-900 flex transition-colors duration-300"
                    ${
                      collapsed
                        ? "rounded-full p-2 mx-3 w-10 h-10"
                        : "rounded-md p-2 mx-3 gap-4 "
                    }`}
                >
                  <a href={item.href} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* content */}
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus sequi, maiores delectus facilis saepe natus iure, officia
          deserunt nostrum laudantium illum nihil quidem voluptatum ipsa eos
          debitis ratione. Incidunt!
        </p>
      </div>
    </div>
  );
};
export default Playground;
