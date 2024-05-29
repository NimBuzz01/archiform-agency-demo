import MaskImage from "@/components/common/MaskImage";
import Typography from "@/components/common/Typography";
import React from "react";

const Project = ({
  project,
  index,
}: {
  project: {
    mainImg: string;
    img1: string;
    img2: string;
    title: string;
    type: string;
  };
  index: number;
}) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-between`}
    >
      <div
        className={`lg:w-1/2 flex w-full ${
          index % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
        }`}
      >
        <MaskImage
          src={project.mainImg}
          objectFit="cover"
          alt="Project Main Image"
          className="sm:max-w-lg"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <MaskImage
          src={project.img1}
          alt="Project Sub Image 1"
          className="sm:max-w-[12rem] hidden lg:block"
          objectFit="cover"
        />
        <MaskImage
          src={project.img2}
          alt="Project Sub Image 2"
          className="sm:max-w-[12rem] hidden lg:block"
          objectFit="cover"
        />
        <div className="flex flex-col self-start gap-1 mt-6 lg:mt-0">
          <Typography text={project.title} className="font-bold uppercase" />
          <Typography text={project.type} className="text-xs sm:text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Project;
