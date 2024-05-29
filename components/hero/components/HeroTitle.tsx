import Title from "@/components/common/Title";
import React from "react";

const HeroTitle = () => {
  return (
    <div className="px-2">
      <Title
        text="Archiform"
        stagger={0.05}
        duration={0.8}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
      />
      <Title
        text="Agency"
        stagger={0.05}
        duration={0.8}
        className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
      />
    </div>
  );
};

export default HeroTitle;
