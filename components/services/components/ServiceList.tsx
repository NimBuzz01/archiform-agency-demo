"use client";
import { services } from "@/lib/data";
import Service from "./Service";
import { useState } from "react";
import Modal from "./Modal";

export default function ServiceList() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center justify-center w-full">
        {services.map((project, index) => {
          return (
            <Service
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} services={services} />
    </main>
  );
}
