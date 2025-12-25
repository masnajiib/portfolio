import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Publications from './components/publications/Publications';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-dark min-h-screen text-gray-900 dark:text-gray-200 font-sans selection:bg-primary selection:text-white transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Publications />
          <Certifications />
          <Skills />
          <Contact />
        </main>
        
        <footer className="bg-white dark:bg-black py-8 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500">
          <p>© {new Date().getFullYear()} Almas Najiib Imam Muttaqin. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;