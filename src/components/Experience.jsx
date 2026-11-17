import React from "react";
import {
  FaBriefcase,
  FaHandsHelping,
  FaLaptopCode,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: <FaBriefcase />,
    period: "Present",
    title: "Intern — National Social Assistance Fund (NSAF)",
    tag: "Current",
    // TODO: replace with your real duties at NSAF
    desc: "Interning at NSAF, applying software engineering skills in a professional, real-world organisation and working alongside experienced teams.",
  },
  {
    icon: <FaTrophy />,
    period: "CSTAD / ISTAD",
    title: "Silver Award — Top 2 Project Team",
    tag: "Award",
    desc: "Worked in a team of seven to deliver a web project and placed second overall in the CSTAD project competition.",
  },
  {
    icon: <FaLaptopCode />,
    period: "BELTEI · 2024–2025",
    title: "Practical Training",
    tag: "Training",
    desc: "Completed a 4-credit practical training module as part of the Foundation Year, applying classroom knowledge to hands-on work.",
  },
  {
    icon: <FaHandsHelping />,
    period: "BELTEI International University",
    title: "Volunteer",
    tag: "Volunteer",
    desc: "Volunteered at university events, welcoming guests and supporting staff and fellow students.",
  },
  {
    icon: <FaUsers />,
    period: "Spring Education Center",
    title: "Project Showcase Participant",
    tag: "Showcase",
    desc: "Presented project work alongside other student developers and received a certificate of participation.",
  },
];

const Experience = () => (
  <section id="experience" className="py-24 bg-slate-950 text-white">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've Been Building"
        subtitle="Internship, awards, training and community work alongside my degree."
      />

      <ol className="relative border-l border-slate-800 ml-3 space-y-10">
        {items.map((it) => (
          <li key={it.title} className="pl-8 relative">
            <span className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border border-blue-500/40 text-blue-400 flex items-center justify-center text-xs">
              {it.icon}
            </span>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-colors">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-mono text-slate-500">
                  {it.period}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {it.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{it.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mt-2">
                {it.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
