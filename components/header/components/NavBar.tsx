import React from "react";
import { motion } from "framer-motion";
import Curve from "./Curve";
import { menuSlide } from "../anim";
import NavLink from "./NavLink";
import { navLinks } from "@/lib/data";

export default function NavBar() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-slate-100 z-20 fixed right-0 top-0"
    >
      <div className="box-border h-full p-24 flex flex-col justify-between">
        <div className="flex flex-col text-5xl gap-3 mt-20">
          <div className="border-b uppercase text-xs mb-10">
            <p>Navigation</p>
          </div>
          {navLinks.map((data, index) => {
            return <NavLink key={index} data={{ ...data, index }}></NavLink>;
          })}
        </div>
        <div className="flex w-full justify-between text-xs gap-10">
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Behance</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
