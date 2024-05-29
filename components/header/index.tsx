import Image from "next/image";
import React from "react";
import Nav from "./components/Nav";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = ({ delay = 1.2 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 1, delay }}
      className="flex items-center justify-between p-5"
    >
      <Link href="/" className="relative w-12 h-12">
        <Image
          src="/main-logo.png"
          alt="logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
      <Nav />
    </motion.div>
  );
};

export default Header;
