"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavBar from "./NavBar";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed top-0 right-0 z-30 flex items-center justify-center w-16 h-16 m-5 rounded-full cursor-pointer lg:w-20 lg:h-20 bg-cmprimary"
      >
        <div
          className={`w-full before:content-[""] before:block before:h-[1px] before:w-2/5 before:m-auto before:bg-cmsecondary before:relative before:transition before:transform before:duration-300 after:content-[""] after:block after:h-[1px] after:w-2/5 after:m-auto after:bg-cmsecondary after:relative after:transition after:transform after:duration-300 after:top-[-5px] before:top-[5px] ${
            isActive
              ? "after:rotate-45 after:top-[-1px] before:-rotate-45 before:top-[0px]"
              : ""
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <NavBar isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
};

export default Nav;
