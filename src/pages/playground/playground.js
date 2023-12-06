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
      <div className="bg-indigo-700 text-white">
        <button onClick={() => setSidebarCollapsed(!collapsed)}>close</button>
      </div>
      {/* content */}
      <div className="">kjfnksejdn</div>
    </div>
  );
};
export default Playground;
