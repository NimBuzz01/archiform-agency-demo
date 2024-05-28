import { projects } from "@/lib/data";
import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <main className="flex py-20 items-center justify-center">
      <div className="w-full flex flex-col gap-20 sm:gap-32 md:gap-40 lg:gap-60">
        {projects.map((project, index) => {
          return <Project project={project} key={index} index={index} />;
        })}
      </div>
    </main>
  );
};

export default ProjectList;
