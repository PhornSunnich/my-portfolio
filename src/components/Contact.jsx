import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-24 bg-slate-900 text-white px-6">
    <div className="max-w-2xl mx-auto text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
        Contact
      </span>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
        Let's Work Together
      </h2>
      <p className="text-slate-400 text-base leading-relaxed mb-10">
        I'm open to{" "}
        <span className="text-slate-100 font-medium">
          Software Development
        </span>
        ,{" "}
        <span className="text-slate-100 font-medium">Backend (Java)</span> and{" "}
        <span className="text-slate-100 font-medium">Web Development</span>{" "}
        internship or junior opportunities. Send me a message anytime.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="mailto:phornsunnich@gmail.com"
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3.5 rounded-xl transition-colors text-sm"
        >
          <FaEnvelope /> phornsunnich@gmail.com
        </a>
        <a
          href="tel:+855718587895"
          className="w-full sm:w-auto flex items-center justify-center gap-3 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium px-8 py-3.5 rounded-xl transition-colors text-sm"
        >
          <FaPhone /> +855 71 85 87 895
        </a>
      </div>

      <div className="flex justify-center items-center gap-6 mt-10 text-sm text-slate-400">
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-400" /> Phnom Penh, Cambodia
        </span>
        <a
          href="https://github.com/PhornSunnich"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/phorn-s-57b030380"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
