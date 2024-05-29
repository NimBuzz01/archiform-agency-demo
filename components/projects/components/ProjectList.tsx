import { projects } from "@/lib/data";
import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <main className="flex items-center justify-center py-20">
      <div className="flex flex-col w-full gap-20 sm:gap-32 md:gap-40 lg:gap-60">
        {projects.map((project, index) => {
          return <Project project={project} key={index} index={index} />;
        })}
      </div>
    </main>
  );
};

export default ProjectList;
