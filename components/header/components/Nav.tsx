"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavBar from "./NavBar";
import { Button } from "@/components/ui/button";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Button
        variant="link"
        onClick={() => setIsActive(!isActive)}
        className="uppercase font-semibold z-50"
      >
        Menu
      </Button>
      <AnimatePresence mode="wait">{isActive && <NavBar />}</AnimatePresence>
    </>
  );
};

export default Nav;
