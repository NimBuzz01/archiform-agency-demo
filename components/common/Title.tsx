"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const Title = ({
  text,
  className,
  duration = 0.4,
  stagger = 0.01,
}: {
  text: string;
  className?: string;
  duration?: number;
  stagger?: number;
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration: duration },
    },
  };

  return (
    <div
      className={cn(
        "relative text-3xl sm:text-4xl md:text-5xl uppercase inline-flex font-medium",
        className
      )}
    >
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
              >
                {letter}
              </motion.span>
            ))}
            <motion.span variants={letterVariants}>&nbsp;</motion.span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Title;
