import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#" className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Sunnich<span className="text-blue-400">.design</span>
        </a>
        <nav className="flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;