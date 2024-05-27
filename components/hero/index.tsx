import React from "react";
import MainTitle from "./components/MainTitle";
import Description from "./components/Description";
import Image from "./components/Image";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <MainTitle />
      <Description delay={1200} />
      <Image delay={1.2} />
    </div>
  );
};

export default Hero;
