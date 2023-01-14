import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Extracurricular from "./components/Extracurricular";

export default function App() {
  return (
    <main className="text-black bg-blue-100 body-font">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Extracurricular />
      <Contact />
    </main>
  );
}
