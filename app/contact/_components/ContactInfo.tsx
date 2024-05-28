import PageLink from "@/components/hero/components/PageLink";
import { socialLinks } from "@/lib/data";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-sm sm:text-base md:text-lg">
        <p className="font-bold mb-6">Let&apos;s Talk</p>
        <p>hello@archiformagency</p>
        <p>+94 123 456 789</p>
      </div>
      <div className="text-sm sm:text-base md:text-lg">
        <p className="font-bold mb-6">Visit</p>
        <p>123, Grand Avenue</p>
        <p>London, United Kingdom</p>
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
