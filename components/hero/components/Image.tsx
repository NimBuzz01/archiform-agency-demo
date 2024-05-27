"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const slideUp = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
};

const Image = ({
  className,
  delay,
}: {
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={cn(
        "relative w-full h-[40dvh] sm:h-[60dvh] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <motion.img
        variants={slideUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.6, delay }}
        src="/building.webp"
        className="w-full h-full"
        style={{ objectFit: "cover" }}
      ></motion.img>
    </motion.div>
  );
};

export default Image;
