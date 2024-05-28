import Image from "next/image";
import React from "react";
import Nav from "./components/Nav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="flex justify-between items-center p-5"
    >
      <div className="relative w-12 h-12">
        <Image
          src="/main-logo.png"
          alt="logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <Nav />
    </motion.div>
  );
};

export default Header;
