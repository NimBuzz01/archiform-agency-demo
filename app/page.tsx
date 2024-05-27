"use client";
import Loader from "@/components/Loader";
import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
        <main className="sm:container">
          <Header />
          <Hero />
          <About />
        </main>
      </AnimatePresence>
    </main>
  );
}
