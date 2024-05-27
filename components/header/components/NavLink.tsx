import Link from "next/link";
import { motion } from "framer-motion";
import { slide, underline } from "../anim";
import { useState } from "react";

interface NavLinkProps {
  data: any;
}

export default function NavLink({ data }: NavLinkProps) {
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
