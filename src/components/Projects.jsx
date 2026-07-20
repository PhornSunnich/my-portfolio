import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    desc: "Built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "JavaScript"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    desc: "Built with React and Bootstrap.",
    tech: ["React", "Bootstrap", "JavaScript"],
    live: "#",
    github: "https://github.com/PhornSunnich/emall_cambodia",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    desc: "Weather application using OpenWeather API.",
    tech: ["React", "API", "CSS"],
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Product Management System",
    desc: "A simple product management application.",
    tech: ["PHP", "Laravel", "MySQL"],
    live: "#",
    github: "https://github.com/PhornSunnich/php_assignment",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-5">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-700 px-3 py-1 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-5">
                <a
                  href={project.live}
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="text-slate-300 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;