import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const { toggleMenu } = useContext(MenuContext);

  // visibile when scrolling top
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // color change while scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY <= 50) {
      setColor(false);
    } else {
      setColor(true);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <nav
      className={`fixed w-screen p-6 xl:px-[35px] lg:px-6 px-4 z-[998] transition-all duration-500 ease-in-out ${
        visible ? "visible opacity-100" : "invisible opacity-0"
      } ${color ? "bg-white border-b border-slate-300" : ""}`}
    >
      {/* <div className="mx-auto flex items-center justify-between mr-3"> */}
      <a href="/" className="logo z-10 flex w-fit">
        <img
          className="w-12 h-12 mr-2 object-cover"
          src={require("../assets/images/logo-circle-06.png")}
          alt="Logo"
        />
        <div className="w-fit">
          <h2 className="w-fit">Krity Dangol</h2>
          <p className="w-fit">Frontend Developer</p>
        </div>
      </a>
      {/* <label className="toggle z-10" for="switch">
        <input id="switch" className="input" type="checkbox" />
        <div className="icon icon--moon">
          <svg
            height="32"
            width="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="icon icon--sun">
          <svg
            height="32"
            width="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
          </svg>
        </div>
      </label> */}
      {/* open full page menu */}
      <span className="toggleMenu z-10" onClick={toggleMenu}>
        <AiOutlineMenu />
      </span>
      {/* </div> */}
    </nav>
  );
};

export default Nav;
