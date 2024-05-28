import React from "react";
import Title from "../common/Title";
import PageLink from "../hero/components/PageLink";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" px-2 py-40 space-y-10 border-t-2 border-cmprimary"
    >
      <Title
        text="We can help you turn your architectural dreams into reality."
        className="normal-case"
      />
      <PageLink
        text="Get started today"
        href="#"
        arrowSize="w-12 h-10"
        className="text-3xl sm:text-4xl md:text-5xl"
      />
    </div>
  );
};

export default Contact;
