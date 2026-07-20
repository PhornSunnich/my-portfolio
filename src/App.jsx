import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-sans antialiased bg-slate-900 min-h-screen text-white">
      <Hero />
      <Projects />
    </div>
  );
}

export default App;