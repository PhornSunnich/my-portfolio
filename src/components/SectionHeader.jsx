import React from "react";

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
      {eyebrow}
    </span>
    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-slate-400 text-base">{subtitle}</p>}
  </div>
);

export default SectionHeader;
