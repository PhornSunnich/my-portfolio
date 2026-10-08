import React from "react";
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
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base">
            Selected product design and web development work showcasing user-centered interface design and frontend synergy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-950/60 rounded-2xl p-8 border border-slate-800/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3 text-slate-100 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-slate-800/60 text-sm font-medium">
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <FaFigma className="text-xs" /> Figma Design
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors ml-auto"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;