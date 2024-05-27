import Typography from "@/components/common/Typography";
import React, { useState, useEffect } from "react";
import PageLink from "./PageLink";

const Description = ({ delay }: { delay?: number }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, delay);
  }, [visible]);

  return (
    <div className="grid px-2 grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 sm:gap-10 my-10 uppercase md:text-lg font-medium text-sm sm:text-base">
      {visible && (
        <>
          <div className="row-span-2 hidden md:block">
            <Typography text="High Quality Standards" />
          </div>
          <div className="hidden md:block leading-6">
            <Typography text="Dive into a world of creative and innovative architectural concepts" />
          </div>
          <div className="col-start-2 row-start-2 leading-6 hidden md:block">
            <Typography text="We make your wildest architectural dreams come true" />
          </div>
          <div className="row-span-2 col-start-3 row-start-1 hidden md:block text-end">
            <PageLink text="Get In Touch" href="#contact" />
          </div>
          <div className="col-start-2 row-start-1 md:hidden">
            <Typography text="High Quality Standards" />
          </div>
          <div className="col-start-1 row-start-1 md:hidden">
            <Typography text="Dive into a world of creative and innovative architectural concepts" />
          </div>
          <div className="md:hidden">
            <Typography text="We make your wildest architectural dreams come true" />
          </div>
          <div className="md:hidden place-items-end">
            <PageLink text="Get In Touch" href="#contact" />
          </div>
        </>
      )}
    </div>
  );
};

export default Description;
