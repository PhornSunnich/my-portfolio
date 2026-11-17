import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans antialiased bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Gallery />
        <Contact />
      </main>
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        © 2026 Phorn Sunnich.
      </footer>
    </div>
  );
}

export default App;
