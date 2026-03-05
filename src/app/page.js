"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Reviews from "@/components/sections/Reviews";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Reviews />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
