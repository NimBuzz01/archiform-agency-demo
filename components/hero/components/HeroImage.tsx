"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

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
      <motion.img
        src="/images/building.webp"
        alt="Hero Image"
        style={{ objectFit: "cover", y }}
      />
    </motion.div>
  );
};

export default HeroImage;
