"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const Title = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={cn("relative text-cmsecondary inline-flex", className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px", once: true }}
        className="flex flex-wrap"
      >
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="flex overflow-hidden">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`${wordIndex}-${letterIndex}`}
                variants={letterVariants}
                className="text-3xl sm:text-4xl md:text-5xl uppercase font-medium"
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              variants={letterVariants}
              className="text-3xl sm:text-4xl md:text-5xl uppercase font-medium"
            >
              &nbsp;
            </motion.span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Title;
