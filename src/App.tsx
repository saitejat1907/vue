import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Extracurricular from './components/Extracurricular';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Blogs />
      <Extracurricular />
      <Contact />
    </div>
  );
}

export default App;