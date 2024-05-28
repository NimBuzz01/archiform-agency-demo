"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  index: number;
  title: string;
  setModal: ({ active }: { active: boolean; index: number }) => void;
}

export default function Service({ index, title, setModal }: ServiceProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full hover:opacity-50 group justify-between items-center py-6 sm:py-12 px-6 lg:px-24 border-t border-cmprimary cursor-pointer transition-all"
    >
      <h2 className="group-hover:translate-x-[-10px] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl m-0 transition-all">
        {title}
      </h2>
      <div className="group-hover:translate-x-[10px]  transition-all font-light">
        <ArrowRight />
      </div>
    </div>
  );
}
