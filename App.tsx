import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import NotFound from './components/NotFound';

// Lazy load components
const Hero = lazy(() => import('./components/hero/Hero'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Projects = lazy(() => import('./components/projects/Projects'));
const Publications = lazy(() => import('./components/publications/Publications'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Certifications = lazy(() => import('./components/certifications/Certifications'));
const Contact = lazy(() => import('./components/contact/Contact'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-gray-50 dark:bg-dark min-h-screen text-gray-900 dark:text-gray-200 font-sans selection:bg-primary selection:text-white transition-colors duration-500">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <main>
                  <Suspense fallback={<LoadingFallback />}>
                    <Hero />
                    <Experience />
                    <Projects />
                    <Publications />
                    <Certifications />
                    <Skills />
                    <Contact />
                    <footer className="bg-gray-100 dark:bg-black py-8 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500 border-t border-gray-200 dark:border-gray-800">
                      <p>© {new Date().getFullYear()} Almas Najiib Imam Muttaqin. All rights reserved.</p>
                    </footer>
                  </Suspense>
                </main>
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;