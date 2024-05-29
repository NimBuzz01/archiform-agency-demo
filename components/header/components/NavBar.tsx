import React from "react";
import { motion } from "framer-motion";
import Curve from "./Curve";
import { menuSlide } from "../anim";
import NavLink from "./NavLink";
import { navLinks, socialLinks } from "@/lib/data";
import { X } from "lucide-react";
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
      className="h-screen bg-cmprimary text-cmsecondary w-full z-20 max-w-lg p-10 sm:p-24 fixed right-0 top-0"
    >
      <div className="box-border h-full flex flex-col justify-between">
        <div className="flex flex-col text-4xl sm:text-5xl gap-3 mt-20">
          <div className="border-b uppercase text-xs mb-10">
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
        <div className="flex w-full flex-wrap sm:flex-nowrap justify-between text-xs gap-10">
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
