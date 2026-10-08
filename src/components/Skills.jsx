import React from "react";

const skillCategories = [
  {
    category: "UI/UX Design",
    skills: ["Figma", "Wireframing", "User Flow", "Prototyping", "Design Systems", "Flowbite", "Canva"],
  },
  {
    category: "Frontend Synergy",
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap"],
  },
  {
    category: "Tools & Backend Basics",
    skills: ["Git & GitHub", "Vercel Deployment", "Firebase", "Supabase", "Postman", "Java / Spring Boot"],
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
            Core toolkit across UI/UX design, design systems, and frontend implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800"
            >
              <h3 className="text-lg font-bold mb-6 text-blue-400 border-b border-slate-800 pb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 transition-colors"
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