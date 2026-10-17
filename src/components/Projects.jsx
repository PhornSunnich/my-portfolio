import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaFigma } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "JOBCollap — Career Platform",
    category: "UX/UI Design & Frontend",
    desc: "Designed intuitive user flows, responsive layouts, and reusable component libraries in Figma for job matching.",
    tech: ["Figma", "UI/UX", "Wireframing", "React"],
    live: "#",
    github: "https://github.com/PhornSunnich/Jobcollap",
    figma: "#",
  },
  {
    id: 2,
    title: "NHAM EY — Food Delivery App",
    category: "Mobile UX Design",
    desc: "Created interactive prototypes, wireframes, and design systems for a food ordering web and mobile application.",
    tech: ["Figma", "Prototyping", "User Flow", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/PhornSunnich/Khmer-Food",
    figma: "#",
  },
  {
    id: 3,
    title: "E-Commerce Web Portal",
    category: "Web Development",
    desc: "Built a responsive online store web application utilizing React, custom UI component layouts, and Bootstrap.",
    tech: ["React", "Bootstrap", "JavaScript"],
    live: "#",
    github: "https://github.com/PhornSunnich/emall_cambodia",
    figma: null,
  },
  {
    id: 4,
    title: "Product Management System",
    category: "Full Stack Development",
    desc: "A web platform designed for managing inventory and products with full database backend implementation.",
    tech: ["PHP", "Laravel", "MySQL"],
    live: "#",
    github: "https://github.com/PhornSunnich/php_assignment",
    figma: null,
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base">
            Selected product design and web development work showcasing
            user-centered interface design and frontend synergy.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Selector */}
          <div className="lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {projects.map((p, index) => {
              const isActive = index === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(index)}
                  className={`text-left shrink-0 w-64 lg:w-auto flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all ${
                    isActive
                      ? "bg-blue-600/10 border-blue-500/60 shadow-lg shadow-blue-500/5"
                      : "bg-slate-950/50 border-slate-800 hover:border-slate-600"
                  }`}
                >
                  <span
                    className={`text-sm font-mono ${
                      isActive ? "text-blue-400" : "text-slate-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block text-sm font-semibold truncate ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {p.title}
                    </span>
                    <span className="block text-xs text-slate-500 truncate mt-0.5">
                      {p.category}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            key={project.id}
            className="lg:col-span-3 bg-slate-950/70 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[22rem]"
          >
            <div>
              <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                {project.desc}
              </p>

              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                Built with
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-900 border border-slate-700 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800 text-sm font-medium">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
              )}
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 px-5 py-2.5 rounded-xl transition-colors"
                >
                  <FaFigma className="text-xs" /> Figma Design
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 px-5 py-2.5 rounded-xl transition-colors ml-auto"
                >
                  <FaGithub /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;