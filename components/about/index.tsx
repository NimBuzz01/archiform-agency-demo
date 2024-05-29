import React from "react";
import Title from "../common/Title";
import PageLink from "../common/PageLink";
import Typography from "../common/Typography";
import MaskImage from "../common/MaskImage";

const About = () => {
  return (
    <div id="about" className="min-h-screen px-2 py-16">
      <div className="flex flex-col-reverse gap-10 lg:flex-row">
        <div className="w-full lg:w-2/5">
          <MaskImage
            src="/images/building-2.webp"
            alt="building-2"
            className="sm:max-w-xs"
            delay={1}
          />
        </div>
        <div className="flex flex-col w-full gap-10 lg:w-3/5">
          <div>
            <Title text="We Integrate Advanced Technologies with a Creative Approach" />
          </div>
          <div>
            <PageLink
              text="Learn More"
              href="#"
              className="font-semibold uppercase"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3 md:grid-cols-2">
        <div>
          <Typography
            text="Unique Design Approach Reflects Individual Demands"
            className="max-w-xs uppercase"
          />
        </div>
        <div>
          <Typography
            className="max-w-xs"
            text="We are a team of professional architects passionately dedicated to creating innovative and inspiring architectural solutions. Our agency strives not only to create functional buildings, but also unique ideas that reflect your individuality and ambition"
          />
        </div>
        <div>
          <Typography
            className="max-w-xs"
            text="Our projects not only meet the needs of our clients, but also contribute to the aesthetic and cultural development of society"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
