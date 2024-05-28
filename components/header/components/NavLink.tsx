import Link from "next/link";
import { motion } from "framer-motion";
import { slide, underline } from "../anim";
import { useState } from "react";

interface NavLinkProps {
  data: any;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export default function NavLink({ data, isActive, setIsActive }: NavLinkProps) {
  const { title, href, index } = data;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-flex"
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <Link href={href}>{title}</Link>
      <motion.div
        className="absolute bottom-0 left-0 bg-cmsecondary h-0.5"
        variants={underline}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
      />
    </motion.div>
  );
}
