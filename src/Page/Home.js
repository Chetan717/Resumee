import React from "react";
import Footer from "../comp/Footer";
import Headers from "../comp/Headers";
import Hero from "../comp/Hero";
import TemplateSelection from "./../SelectionTemplate/TemplateSelection";

export default function Home() {
  return (
    <>
      {/* homepage of application */}
      <Headers />
      <Hero />
      <TemplateSelection />

      <Footer />
    </>
  );
}
