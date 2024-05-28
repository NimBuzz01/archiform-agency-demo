import React from "react";
import Title from "../common/Title";
import { CopyrightIcon } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";
import Link from "next/link";
import PageLink from "../hero/components/PageLink";

const Footer = () => {
  return (
    <div
      className="bg-cmprimary flex flex-col items-center text-cmsecondary w-full relative h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed px-3 py-10 sm:py-16 sm:container bottom-0 w-full h-[600px]">
        <div className="flex gap-10 flex-wrap">
          <div className="text-sm">
            <p className="font-bold text-base mb-6">Let&apos;s Talk</p>
            <p>hello@archiformagency</p>
            <p>+94 123 456 789</p>
          </div>
          <div className="text-sm">
            <p className="font-bold text-base mb-6">Visit</p>
            <p>123, Grand Avenue</p>
            <p>London, United Kingdom</p>
          </div>
          <div className="md:ml-auto flex flex-col text-sm gap-2 uppercase">
            {navLinks.map((link) => (
              <div key={link.href}>
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
        <div className="mt-20 sm:mt-32">
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
            className="font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
          />
        </div>
        <div className="flex sm:justify-between mt-10 mb-4 gap-1 sm:items-center flex-col sm:flex-row">
          <div className="flex items-center gap-1">
            <CopyrightIcon className="w-4 h-4" /> 2024 Archiform Agency
          </div>
          <div className="flex items-center text-sm gap-4 uppercase">
            {socialLinks.map((link) => (
              <PageLink
                text={link.title}
                key={link.href}
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
