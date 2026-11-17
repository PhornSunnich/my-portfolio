import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Photo from "./Photo";

// Put each image in /public/gallery/ using these file names.
const photos = [
  { src: "/gallery/nsaf-internship-1.jpg", caption: "Internship at NSAF", cat: "Internship" },
  { src: "/gallery/class-activity.jpg", caption: "In-class workshop at BELTEI", cat: "Class" },
  { src: "/gallery/class-team.jpg", caption: "Software Engineering class team", cat: "Class" },
  { src: "/gallery/university-trip-lunch.jpg", caption: "University trip with classmates", cat: "Trip" },
  { src: "/gallery/university-trip-group.jpg", caption: "University educational trip", cat: "Trip" },
  { src: "/gallery/istad-silver-award.jpg", caption: "Silver Award, Top 2 Project Team", cat: "Awards" },
  { src: "/gallery/istad-teamwork.jpg", caption: "Late-night teamwork on our project", cat: "Training" },
  { src: "/gallery/spring-education-center.jpg", caption: "Spring Education Center showcase", cat: "Awards" },
  { src: "/gallery/beltei-volunteer.png", caption: "Volunteering at BELTEI", cat: "Volunteer" },
  { src: "/gallery/istad-volunteer.png", caption: "Volunteering at ISTAD", cat: "Volunteer" },
  { src: "/gallery/conference.jpg", caption: "National education event", cat: "Awards" },
  { src: "/gallery/bacii-events.png", caption: "National education event", cat: "Events" },
];

const categories = ["All", ...Array.from(new Set(photos.map((p) => p.cat)))];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Life & Learning"
          title="Moments Along the Way"
          subtitle="Internship, training, class activities, trips and volunteering that shaped how I work with people."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                filter === c
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {shown.map((p) => (
            <figure
              key={p.src}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 group"
            >
              <div className="aspect-[4/3]">
                <Photo
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-4 pt-10">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold">
                  {p.cat}
                </span>
                <p className="text-sm text-slate-100 font-medium">{p.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
