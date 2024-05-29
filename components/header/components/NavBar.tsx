import React from "react";
import { motion } from "framer-motion";
import Curve from "./Curve";
import { menuSlide } from "../anim";
import NavLink from "./NavLink";
import { navLinks, socialLinks } from "@/lib/data";
import PageLink from "@/components/common/PageLink";

export default function NavBar({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}) {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 right-0 z-20 w-full h-screen max-w-lg p-10 bg-cmprimary text-cmsecondary sm:p-24"
    >
      <div className="box-border flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3 mt-20 text-4xl sm:text-5xl">
          <div className="mb-10 text-xs uppercase border-b">
            <p>Navigation</p>
          </div>
          {navLinks.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={isActive}
                setIsActive={setIsActive}
              ></NavLink>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-between w-full gap-10 text-xs sm:flex-nowrap">
          {socialLinks.map((link) => (
            <div key={link.title}>
              <PageLink
                text={link.title}
                href={link.href}
                disableArrow
                underlineColor="bg-cmsecondary"
              />
            </div>
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
