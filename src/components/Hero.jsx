import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-slate-900 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Hi, I'm Sunnich
      </h1>

      <p className="mt-6 text-xl text-slate-400 max-w-2xl">
        Software Engineering Student | Front-End Developer | React & Tailwind CSS
      </p>

      <div className="flex gap-6 text-3xl mt-8">
        <a
          href="https://github.com/PhornSunnich"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/phorn-s-57b030380"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:phornsunnich@gmail.com"
          className="hover:text-blue-400"
        >
          <FaEnvelope />
        </a>
      </div>

      <a
        href="#projects"
        className="mt-10 bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl"
      >
        View My Projects
      </a>
    </section>
  );
};

export default Hero;