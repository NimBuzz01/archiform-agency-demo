import React from "react";
import Typography from "../common/Typography";
import Title from "../common/Title";
import ServiceList from "./components/ServiceList";

const Services = () => {
  return (
    <div id="services" className="min-h-screen px-2 py-16">
      <div className="">
        <Title text="Our Services Gurantee the highest level of professionalism and quality" />
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
      </div>
      <ServiceList />
    </div>
  );
};

export default Services;
