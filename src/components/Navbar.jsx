import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/Profile.JPG"
            alt="Phorn Sunnich"
            className="w-9 h-9 rounded-full object-cover border border-blue-400/50"
          />
          <span className="text-lg font-bold text-white">
            Sunnich<span className="text-blue-400">.dev</span>
          </span>
        </a>
        <nav className="flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
