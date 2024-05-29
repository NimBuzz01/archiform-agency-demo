"use client";
import Typography from "@/components/common/Typography";
import React, { useState, useEffect } from "react";
import PageLink from "../../common/PageLink";

const Description = ({ delay }: { delay?: number }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, delay);
  }, [visible]);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 px-2 my-10 font-medium uppercase md:grid-cols-3 sm:gap-10 md:text-lg">
      {visible && (
        <>
          <div className="hidden row-span-2 md:block">
            <Typography text="High Quality Standards" />
          </div>
          <div className="hidden leading-6 md:block">
            <Typography text="Dive into a world of creative and innovative architectural concepts" />
          </div>
          <div className="hidden col-start-2 row-start-2 leading-6 md:block">
            <Typography text="We make your wildest architectural dreams come true" />
          </div>
          <div className="hidden col-start-3 row-span-2 row-start-1 md:block text-end">
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
            <PageLink
              text="Get In Touch"
              href="#contact"
              className="font-semibold"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Description;
