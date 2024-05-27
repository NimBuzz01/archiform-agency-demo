import React from "react";
import Description from "./components/Description";
import HeroImage from "./components/HeroImage";
import HeroTitle from "./components/HeroTitle";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <HeroTitle />
      <Description delay={1200} />
      <HeroImage delay={1.2} />
    </div>
  );
};

export default Hero;
