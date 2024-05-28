import React from "react";
import Description from "./components/Description";
import HeroImage from "./components/HeroImage";
import HeroTitle from "./components/HeroTitle";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen overflow-hidden">
      <HeroTitle />
      <Description />
      <HeroImage delay={1.2} />
    </div>
  );
};

export default Hero;
