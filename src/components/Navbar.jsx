import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo & Avatar */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-slate-950 border-b border-slate-800/80 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-300 transition-all">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors py-1"
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors py-1"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors py-1"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors py-1"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;