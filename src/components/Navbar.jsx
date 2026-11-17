import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        <nav className="hidden lg:flex gap-7 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-blue-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-300 hover:text-white text-2xl focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-slate-950 border-b border-slate-800/80 px-6 py-4 flex flex-col gap-1 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
