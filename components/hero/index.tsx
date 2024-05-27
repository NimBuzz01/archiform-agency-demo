"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import MainTitle from "./components/MainTitle";
import Description from "./components/Description";
import Image from "./components/Image";

const Hero = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen">
        <MainTitle />
        <Description delay={1200} />
        <Image delay={1.2} />
      </div>
    </AnimatePresence>
  );
};

export default Hero;
