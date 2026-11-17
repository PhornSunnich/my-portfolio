import React from "react";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    category: "Backend & Databases",
    skills: ["Java", "Spring Boot", "REST APIs", "OOP", "PostgreSQL", "MySQL", "Supabase", "PHP / Laravel"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap", "Vite"],
  },
  {
    category: "UX/UI & Product Design",
    skills: ["Figma", "Wireframing", "Prototyping", "User Flow", "Design Systems", "Canva"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Docker Compose", "Git & GitHub", "Gradle", "Postman", "Swagger", "Vercel", "Railway", "Firebase"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Skills"
        title="Technical & Design Skills"
        subtitle="From database to deployment to design: the full path of a product."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="bg-slate-950/60 p-7 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-colors"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-400 border-b border-slate-800 pb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
