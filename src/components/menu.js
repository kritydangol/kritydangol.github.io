import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { MenuContext } from "react-flexible-sliding-menu";

function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <>
      <ul id="nav-links table-cell align-middle p-10 text-2xl leading-[6vh]">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/home">Home real</a>
        </li>
      </ul>
      {/* close full page menu */}
      <span className="toggleMenu" onClick={closeMenu}>
        <RxCross1 />
      </span>
    </>
  );
}

export default Menu;
