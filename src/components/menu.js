import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { MenuContext } from "react-flexible-sliding-menu";

function Menu() {
  const { closeMenu } = useContext(MenuContext);
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    // {
    //   name: "Home real",
    //   link: "/#/home",
    // },
    // {
    //   name: "Case Study",
    //   link: "/#/caseStudy",
    // },
  ];
  return (
    <div className="menu table w-screen h-screen bg-[#f8f7ff]">
      <div className="nav-links table-cell align-middle p-10 text-2xl leading-[6vh]">
        <ul>
          {menuItems.map((item) => (
            <li className="w-fit mx-auto font-bold mb-5" onClick={closeMenu}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* close full page menu */}
      <span className="toggleMenu" onClick={closeMenu}>
        <RxCross1 />
      </span>
    </div>
  );
}

export default Menu;
