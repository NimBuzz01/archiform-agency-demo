"use client";
import React, { useEffect } from "react";
import ContactForm from "./_components/ContactForm";
import Title from "@/components/common/Title";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactInfo from "./_components/ContactInfo";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header delay={0.6} />
      <div className="min-h-screen px-2 py-16 sm:container">
        <Title text="Lets Bring Your Project To Life." />
        <div className="flex flex-col justify-between gap-16 pt-16 md:flex-row">
          <div className="w-full max-w-xl">
            <ContactForm />
          </div>
          <div className="w-full max-w-xl">
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
