import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const items = [
  {
    period: "2024 – Present",
    school: "BELTEI International University",
    title: "Bachelor of Software Engineering (Year 3)",
    note: "Foundation Year completed 2024–2025 with a GPA of 3.26.",
    highlight: "Year 3",
  },
  {
    period: "Oct 2025",
    school: "ISTAD",
    title: "Web Development Fundamental (4th Generation)",
    note: "4-month programme: UX/UI Design, ReactJS, Java, Database Essentials, Version Control and a hands-on project.",
    highlight: "4 months",
  },
  {
    period: "Jan 2025",
    school: "CSTAD",
    title: "Web Design Junior (2nd Generation)",
    note: "90 hours: HTML, CSS, Bootstrap 5, Tailwind CSS, UX/UI Design, JavaScript and basic ReactJS.",
    highlight: "90 hours",
  },
  {
    period: "2024",
    school: "Thmor Koul High School",
    title: "Bac II Certificate, Science track",
    note: "Graduated with an overall Grade A.",
    highlight: "Grade A",
  },
];

const Education = () => (
  <section id="education" className="py-24 bg-slate-950 text-white">
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeader
        eyebrow="Education"
        title="Academic Background"
        subtitle="A strong academic start, plus focused bootcamp-style training in web development."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-7 hover:border-blue-500/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <FaGraduationCap />
              </span>
              <span className="text-xs font-mono text-slate-500 pt-2">
                {it.period}
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
              {it.school}
            </p>
            <h3 className="text-lg font-bold mt-1 text-white">{it.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
              {it.note}
            </p>
            <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200">
              {it.highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
