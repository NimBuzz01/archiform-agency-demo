"use client";
import React from "react";
import ContactForm from "./_components/ContactForm";
import Title from "@/components/common/Title";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactInfo from "./_components/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <Header delay={0.6} />
      <div className="min-h-screen px-2 py-16 sm:container">
        <Title text="Lets Bring Your Project To Life." />
        <div className="pt-16 flex flex-col justify-between md:flex-row gap-16">
          <div className="max-w-xl w-full">
            <ContactForm />
          </div>
          <div className="max-w-xl w-full">
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
