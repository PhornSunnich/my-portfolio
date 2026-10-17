import React from "react";

const skillCategories = [
  {
    category: "UX/UI & Product Design",
    skills: ["Figma", "Wireframing", "Prototyping", "User Flow", "Design Systems", "Canva"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap"],
  },
  {
    category: "Backend & Databases",
    skills: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git & GitHub", "Vercel", "Firebase", "Postman", "Swagger"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Technical & Design Skills
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive skill set spanning UI/UX design, frontend development, and robust backend engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-colors"
            >
              <h3 className="text-lg font-bold mb-4 text-blue-400 border-b border-slate-800 pb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-lg text-xs font-medium text-slate-200"
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
};

export default Skills;