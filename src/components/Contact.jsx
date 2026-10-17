import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Let's Work Together
        </h2>
        <p className="text-slate-400 text-base leading-relaxed mb-10">
          I am currently open for{" "}
          <span className="text-slate-100 font-medium">
            Web Development Intern
          </span>{" "}
          and{" "}
          <span className="text-slate-100 font-medium">
            Software Development Intern
          </span>{" "}
          opportunities. Feel free to drop me a message directly!
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
      </div>
    </section>
  );
};

export default Contact;