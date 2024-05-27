"use client";
import Loader from "@/components/Loader";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
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
        <Header />
        <main className="sm:container">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </AnimatePresence>
    </main>
  );
}
