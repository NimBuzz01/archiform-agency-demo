import Title from "@/components/common/Title";
import React from "react";

const MainTitle = () => {
  return (
    <div className="px-2">
      <Title
        text="Archiform"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
      />
      <Title
        text="Agency"
        className="font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
      />
    </div>
  );
};

export default MainTitle;
