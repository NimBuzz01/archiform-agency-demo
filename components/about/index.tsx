import React from "react";
import Title from "../common/Title";
import PageLink from "../hero/components/PageLink";
import Typography from "../common/Typography";
import { motion } from "framer-motion";

const slideUp = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
};

const About = () => {
  return (
    <div className="py-16 min-h-screen px-2">
      <div className="flex gap-10 flex-col-reverse lg:flex-row">
        <div className="lg:w-2/5 w-full">
          <motion.div className="w-full sm:max-w-xs relative aspect-square overflow-hidden">
            <motion.img
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-50px", once: true }}
              transition={{ duration: 1, delay: 1 }}
              src="/images/building-2.webp"
              alt="building-2"
              className="w-full h-full"
              style={{ objectFit: "contain" }}
            ></motion.img>
          </motion.div>
        </div>
        <div className="lg:w-3/5 w-full flex flex-col gap-10">
          <div>
            <Title text="We Integrate Advanced Technologies with a Creative Approach" />
          </div>
          <div>
            <PageLink
              text="Learn More"
              href="#"
              className="uppercase font-semibold"
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
        <div>
          <Typography
            text="Unique Design Approach Reflects Individual Demands"
            className="uppercase max-w-xs"
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
