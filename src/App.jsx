import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ArchitectureSpotlight from './components/ArchitectureSpotlight';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#090D16] text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Ambient background animations and glowing meshes */}
      <BackgroundEffects />

      {/* Navigation bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <ArchitectureSpotlight />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
