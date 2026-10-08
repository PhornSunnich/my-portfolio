import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Profile from "../assets/Profile.JPG"; 

const Hero = () => {
  return (
    <section className="bg-slate-950 py-20 md:py-28 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Profile Image */}
      <div className="relative mb-6 z-10">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-xl shadow-blue-500/10">
          <img
            src={Profile}
            alt="Phorn Sunnich"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-slate-950 rounded-full"></span>
      </div>

      <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6 z-10">
        UX/UI Designer & Front-End Developer
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight z-10">
        Crafting intuitive digital experiences & clean code.
      </h1>

      <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed z-10">
        Hi, I'm <span className="text-slate-100 font-medium">Phorn Sunnich</span>, a Year 3 Software Engineering student specializing in user-centered interface design, interactive prototyping, and responsive React applications.
      </p>

      <div className="flex gap-5 text-xl mt-8 z-10">
        <a
          href="https://github.com/PhornSunnich"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/phorn-s-57b030380"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:phornsunnich@gmail.com"
          className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="flex gap-4 mt-10 mb-6 z-10">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm"
        >
          Explore Projects
        </a>
        <a
          href="#contact"
          className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium px-7 py-3.5 rounded-xl transition-all text-sm"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;