import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Let's Work Together
        </h2>
        <p className="text-slate-400 text-base mb-10 max-w-lg mx-auto">
          I am currently open for **UX/UI Design Intern** positions. Feel free to connect or drop me a message directly!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:phornsunnich@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all text-sm"
          >
            <FaEnvelope /> phornsunnich@gmail.com
          </a>
          <a
            href="tel:+855718587895"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium px-8 py-3.5 rounded-xl transition-all text-sm"
          >
            <FaPhone /> +855 71 85 87 895
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;