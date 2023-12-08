// components/Playground.tsx
import React, { useState } from "react";
const Playground = () => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <div
      className={`grid min-h-screen ${
        collapsed ? "grid-cols-sidebar" : "grid-cols-sidebar-collapsed"
      } transition-[grid-template-columns] duration-300 ease-in-out`}
    >
      {/* sidebar */}
      {/* https://reacthustle.com/blog/nextjs-react-responsive-collapsible-sidebar-tailwind#step-4-creating-the-sidebar-component */}
      <div className="bg-indigo-700 text-white">
        {!collapsed && <span className="whitespace-nowrap">My Logo</span>}

        <button onClick={() => setSidebarCollapsed(!collapsed)}>close</button>
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
