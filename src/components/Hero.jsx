import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Profile from "../assets/Profile.JPG";

const stats = [
  { value: "Year 3", label: "Software Engineering" },
  { value: "4", label: "Featured projects" },
  { value: "Intern", label: "Open to roles" },
];

const Hero = () => {
  return (
    <section className="relative bg-slate-950 text-white pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      ></div>
      {/* Glows */}
      <div className="absolute top-20 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Available for internships
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Phorn Sunnich
            </span>
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-200">
            Software Engineer & Spring Boot Developer
          </p>

          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Building scalable backend services and full-stack web applications.
            A Year 3 Software Engineering student specializing in{" "}
            <span className="text-blue-400 font-medium">
              Java, Spring Boot, REST APIs
            </span>
            , responsive frontend architectures (React/Tailwind), and UI/UX
            design.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-9">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm"
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

          <div className="flex justify-center lg:justify-start gap-3 text-lg mt-8">
            <a
              href="https://github.com/PhornSunnich"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/phorn-s-57b030380"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:phornsunnich@gmail.com"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Photo card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Clean outer frame, no glow */}
            <div className="p-2 rounded-[2.25rem] border border-slate-700/70 bg-slate-900/40">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[1.75rem] overflow-hidden bg-slate-900 shadow-2xl shadow-black/40">
                <img
                  src={Profile}
                  alt="Phorn Sunnich"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -left-6 top-10 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl px-4 py-2 text-xs font-semibold text-blue-400 shadow-lg">
              Spring Boot
            </div>
            <div className="absolute -right-4 bottom-16 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl px-4 py-2 text-xs font-semibold text-cyan-300 shadow-lg">
              React + Tailwind
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative max-w-6xl mx-auto mt-16 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-white">
              {s.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;