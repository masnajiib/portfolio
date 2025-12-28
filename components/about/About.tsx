import React from 'react';
import { SECTION_CONTENT, ABOUT_DETAILS } from '../../constants';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second for smooth scroll
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth animation (easeInOutCubic)
        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-500">
      {/* Texture Pattern: Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{SECTION_CONTENT.about.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          {SECTION_CONTENT.about.description && (
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              {SECTION_CONTENT.about.description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{ABOUT_DETAILS.subtitle}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {ABOUT_DETAILS.introduction}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ABOUT_DETAILS.highlights && ABOUT_DETAILS.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {ABOUT_DETAILS.quickStats && ABOUT_DETAILS.quickStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 flex justify-center"
        >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#projects');
              }}
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-full flex items-center justify-center transition-all shadow-lg shadow-blue-500/25"
            >
              View Projects <ChevronRight className="ml-2 w-4 h-4" />
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
