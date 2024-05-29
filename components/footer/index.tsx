import React from "react";
import Title from "../common/Title";
import { CopyrightIcon } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";
import PageLink from "../common/PageLink";

const Footer = () => {
  return (
    <div
      className="bg-cmprimary flex flex-col items-center text-cmsecondary w-full relative h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed px-3 py-10 sm:container bottom-0 w-full flex flex-col h-[600px]">
        <div className="flex flex-wrap gap-10">
          <div className="text-sm">
            <p className="mb-6 text-base font-bold">Let&apos;s Talk</p>
            <p>hello@archiformagency</p>
            <p>+94 123 456 789</p>
          </div>
          <div className="text-sm">
            <p className="mb-6 text-base font-bold">Visit</p>
            <p>123, Grand Avenue</p>
            <p>London, United Kingdom</p>
          </div>
          <div className="flex flex-col gap-2 text-sm uppercase md:ml-auto">
            {navLinks.map((link) => (
              <div key={link.title}>
                <PageLink
                  text={link.title}
                  href={link.href}
                  disableArrow
                  underlineColor="bg-cmsecondary"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <Title
            text="Archiform"
            stagger={0.05}
            duration={0.8}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
          />
          <Title
            text="Agency"
            stagger={0.05}
            duration={0.8}
            className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
          />
        </div>
        <div className="flex flex-col gap-4 mt-10 mb-4 sm:justify-between sm:items-center sm:flex-row">
          <div className="flex items-center gap-1">
            <CopyrightIcon className="w-4 h-4" /> 2024 Archiform Agency
          </div>
          <div className="flex items-center gap-4 text-xs uppercase sm:text-sm">
            {socialLinks.map((link) => (
              <PageLink
                text={link.title}
                key={link.title}
                href={link.href}
                disableArrow
                underlineColor="bg-cmsecondary"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
