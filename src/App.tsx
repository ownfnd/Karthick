import React from 'react';
import { BackgroundGrid } from './components/common/BackgroundGrid';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { TechMarquee } from './components/common/TechMarquee';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Curriculum } from './components/sections/Curriculum';
import { TeachingLabs } from './components/sections/TeachingLabs';
import { Demos } from './components/sections/Demos';
import { TeachingExperience } from './components/sections/TeachingExperience';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-gray-100 selection:bg-accent-electric/20 selection:text-accent-electric">
      {/* Visual Ambient Node & Grid Overlay */}
      <BackgroundGrid />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Continuous Two-Direction Tech Logo Marquee */}
        <TechMarquee />

        {/* 3. About Section (Engineering + Pedagogical profile) */}
        <About />

        {/* 4. Professional Experience (Sekurzen Technologies) */}
        <Experience />

        {/* 5. Featured Professional Case Studies */}
        <Projects />

        {/* 6. Technical Skills & Hands-On Capability Status */}
        <Skills />

        {/* 7. AI Engineering & Automation Curriculum (12 Modules) */}
        <Curriculum />

        {/* 8. Practical Teaching Labs (10 Labs) */}
        <TeachingLabs />

        {/* 9. Technical Demonstrations & Prototypes (5 Demos) */}
        <Demos />

        {/* 10. Teaching Experience (500+ Trained, Disciplines & Artifacts) */}
        <TeachingExperience />

        {/* 11. Education & Certifications */}
        <Education />

        {/* 12. Contact & Resume Download */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
