"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const reveal = {
  initial: { y: "0%" },
  animate: { y: "100%" },
};

const HeroImage = ({
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
      <motion.div
        className="absolute inset-0 bg-cmsecondary z-10"
        variants={reveal}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, delay }}
      ></motion.div>
      <img
        src="/images/building.webp"
        className="w-full h-full"
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
};

export default HeroImage;
