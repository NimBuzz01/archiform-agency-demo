import Typography from "@/components/common/Typography";
import PageLink from "@/components/common/PageLink";
import { socialLinks } from "@/lib/data";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <p className="mb-5 text-sm font-bold sm:text-base md:text-lg">
          Let&apos;s Talk
        </p>
        <Typography text="hello@archiformagency" />
        <Typography text="+94 123 456 789" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="mb-5 text-sm font-bold sm:text-base md:text-lg">Visit</p>
        <Typography text="123, Grand Avenue" />
        <Typography text="London, United Kingdom" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="mb-6 text-sm font-bold sm:text-base md:text-lg">
          Socials
        </p>
        {socialLinks.map((link) => (
          <div key={link.title}>
            <PageLink
              text={link.title}
              href={link.href}
              disableArrow
              className="font-medium"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
