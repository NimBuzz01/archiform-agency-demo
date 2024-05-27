"use client";
import React from "react";
import { ReactLenis, useLenis } from "lenis/react";

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenis = useLenis(({ scroll }) => {});
  return <ReactLenis root>{children}</ReactLenis>;
};

export default ScrollProvider;
