"use client";

import Menu from "../components/Menu";
import Autor from "@/components/autor";
import About from "@/components/about";
// import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Skills from "@/components/skills";
 
export default function Home() {
  return (
    <main className="bg-gray-100 p-4 md:px-20 lg:px-40 dark:bg-gray-900 z-10">
      <Menu />
      <Autor />
      <About />
      {/* <Services /> */}
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
