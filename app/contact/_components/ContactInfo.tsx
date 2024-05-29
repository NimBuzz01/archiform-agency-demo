import Typography from "@/components/common/Typography";
import PageLink from "@/components/common/PageLink";
import { socialLinks } from "@/lib/data";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-sm sm:text-base md:text-lg flex flex-col gap-1">
        <p className="font-bold mb-5">Let&apos;s Talk</p>
        <Typography text="hello@archiformagency" />
        <Typography text="+94 123 456 789" />
      </div>
      <div className="text-sm sm:text-base md:text-lg flex flex-col gap-1">
        <p className="font-bold mb-5">Visit</p>
        <Typography text="123, Grand Avenue" />
        <Typography text="London, United Kingdom" />
      </div>
      <div className="flex flex-col text-sm sm:text-base gap-2 md:text-lg">
        <p className="font-bold mb-6">Socials</p>
        {socialLinks.map((link) => (
          <div key={link.title}>
            <PageLink text={link.title} href={link.href} disableArrow />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
