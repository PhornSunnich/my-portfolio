import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans antialiased bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        © 2026 Phorn Sunnich. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;