import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { MenuContext } from "react-flexible-sliding-menu";

function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="menu table w-screen h-screen">
      <div className="nav-links table-cell align-middle p-10 text-2xl leading-[6vh]">
        <ul>
          <li className="w-fit mx-auto">
            <a href="/">Home</a>
          </li>
          <li className="w-fit mx-auto">
            <a href="/home">Home real</a>
          </li>
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
