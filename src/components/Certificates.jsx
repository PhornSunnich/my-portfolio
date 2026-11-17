import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import Photo from "./Photo";

// Put each image in /public/certificates/ using these file names.
const certificates = [
  {
    src: "/certificates/istad-web-development-fundamental.jpg",
    issuer: "ISTAD",
    title: "Web Development Fundamental",
    date: "October 25, 2025",
    detail: "UX/UI, ReactJS, Java, Database Essentials, Version Control",
  },
  {
    src: "/certificates/cstad-web-design-junior.jpg",
    issuer: "CSTAD",
    title: "Web Design Junior",
    date: "January 24, 2025",
    detail: "90 hours · HTML, CSS, Bootstrap 5, Tailwind, JavaScript, ReactJS",
  },
  {
    src: "/certificates/beltei-foundation-year.png",
    issuer: "BELTEI International University",
    title: "Foundation Year Certificate",
    date: "November 10, 2025",
    detail: "Academic year 2024–2025 · GPA 3.26",
  },
  {
    src: "/certificates/bac-ii.png",
    issuer: "Ministry of Education, Youth and Sport",
    title: "Bac II Certificate",
    date: "Exam session 2024",
    detail: "Science track · Overall Grade A",
  },
  {
    src: "/certificates/beltei-english-intensive.jpg",
    issuer: "BELTEI International University",
    title: "English Intensive Course",
    date: "2024–2025",
    detail: "Course completion ceremony at BELTEI",
  },
  {
    src: "/certificates/cstad-silver-award.jpg",
    issuer: "CSTAD",
    title: "Silver Award — Top 2 Project Team",
    date: "Team award",
    detail: "Recognised for an outstanding team project",
  },
];

const Certificates = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="certificates" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Credentials"
          title="Certificates & Awards"
          subtitle="Verified training, academic results and recognition. Click any card to view it larger."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c) => (
            <button
              key={c.title}
              onClick={() => setOpen(c)}
              className="text-left bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors group"
            >
              <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
                <Photo
                  src={c.src}
                  alt={`${c.title} certificate`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                  {c.issuer}
                </p>
                <h3 className="text-base font-bold mt-1">{c.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{c.date}</p>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {c.detail}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <FaTimes />
          </button>
          <Photo
            src={open.src}
            alt={`${open.title} certificate`}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
