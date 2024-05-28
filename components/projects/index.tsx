import React from "react";
import Typography from "../common/Typography";
import Title from "../common/Title";
import PageLink from "../hero/components/PageLink";
import ProjectList from "./components/ProjectList";

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen px-2">
      <div>
        <Title text="We Have Successfully Implemented a Wide Range of Projects of Varying Complexity and Scale" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
        <div>
          <Typography
            text="Our unique approach to design allows us to create unique and inspiring spaces"
            className="max-w-xs"
          />
        </div>
        <div>
          <Typography
            className="max-w-xs"
            text="We put high standards of quality and follow the leading trends in architecture design."
          />
        </div>
        <div>
          <PageLink
            text="Learn More"
            href="#"
            className="uppercase font-semibold"
          />
        </div>
      </div>
      <ProjectList />
    </div>
  );
};

export default Projects;
