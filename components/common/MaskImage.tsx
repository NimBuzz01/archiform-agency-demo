import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const reveal = {
  initial: { y: "0%" },
  animate: { y: "100%" },
};

const MaskImage = ({
  className,
  src,
  alt,
  objectFit = "contain",
  duration = 0.6,
  delay = 1,
}: {
  className?: string;
  src: string;
  alt: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  duration?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      className={cn("w-full relative aspect-square overflow-hidden", className)}
    >
      <motion.div
        className="absolute inset-0 bg-cmsecondary z-10"
        variants={reveal}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-50px", once: true }}
        transition={{ duration, delay }}
      ></motion.div>
      <img
        src={src}
        alt={alt}
        className="w-full h-full"
        style={{ objectFit }}
      />
    </motion.div>
  );
};

export default MaskImage;
