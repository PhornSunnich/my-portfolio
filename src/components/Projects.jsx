import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaFigma } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    id: 1,
    title: "Student Management System",
    category: "Backend · Java & Docker",
    status: "Backend in production",
    desc: "A full CRUD REST backend for managing students, enrollments and categories. Documented with Swagger, backed by PostgreSQL, containerised with a multi-stage Dockerfile and docker-compose, and deployed to production.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Swagger", "Gradle"],
    live: null,
    github: "https://github.com/PhornSunnich/student-management-system",
    figma: null,
  },
  {
    id: 2,
    title: "Restaurant Ordering Platform",
    category: "Full Stack · React Frontend",
    status: "Production deploy coming soon",
    desc: "A modern ordering interface built with React 19 and Vite, with Lucide icons and Canvas Confetti for delightful micro-interactions. Designed to pair with a Spring Boot backend.",
    tech: ["React 19", "Vite", "Tailwind CSS", "Lucide Icons", "Spring Boot"],
    live: null,
    github: "https://github.com/PhornSunnich/restaurant-frontend",
    figma: null,
  },
  {
    id: 3,
    title: "NHAM EY — Food Delivery App",
    category: "Mobile UX Design & Frontend",
    status: "Live",
    desc: "A Khmer food ordering web and mobile experience, from wireframes and interactive prototypes to a deployed, responsive application.",
    tech: ["Figma", "Prototyping", "User Flow", "Tailwind CSS"],
    live: "https://khmer-food-production.up.railway.app",
    github: "https://github.com/PhornSunnich/Khmer-Food",
    figma: null,
  },
  {
    id: 4,
    title: "JOBCollap — Career Platform",
    category: "UX/UI Design & Frontend",
    status: "Live",
    desc: "A job matching platform with intuitive user flows, responsive layouts and a reusable component library designed in Figma and built in React.",
    tech: ["Figma", "UI/UX", "Wireframing", "React"],
    live: "https://final-deploy-gold.vercel.app/",
    github: "https://github.com/PhornSunnich/Jobcollap",
    figma: null,
  },
  {
    id: 5,
    title: "E-Commerce Web Portal",
    category: "Web Development",
    status: "Source available",
    desc: "A responsive online store built with React, custom UI components and Bootstrap.",
    tech: ["React", "Bootstrap", "JavaScript"],
    live: null,
    github: "https://github.com/PhornSunnich/emall_cambodia",
    figma: null,
  },
  {
    id: 6,
    title: "Product Management System",
    category: "Full Stack Development",
    status: "Source available",
    desc: "An inventory and product management platform with a complete database-backed Laravel implementation.",
    tech: ["PHP", "Laravel", "MySQL"],
    live: "https://khmer-food-production.up.railway.app",
    github: "https://github.com/PhornSunnich/Khmer-Food",
    figma: null,
  }
];

const statusStyle = (status) =>
  status === "Live" || status === "Backend in production"
    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
    : status.startsWith("Production")
    ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
    : "bg-slate-800 border-slate-700 text-slate-400";

const Projects = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Backend services, full-stack apps and product design, from first wireframe to deployment."
        />

        <div className="grid lg:grid-cols-5 gap-6">
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

          <div
            key={project.id}
            className="lg:col-span-3 bg-slate-950/70 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[24rem]"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
                  {project.category}
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusStyle(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-4 text-white">
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
