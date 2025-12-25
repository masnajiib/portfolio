import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-dark relative overflow-hidden transition-colors duration-500">
      {/* Texture Pattern: Diagonal Mesh (Diamond Grid) */}
      {/* Uses repeating linear gradients to create a cross-hatch/diamond pattern that doesn't conflict with vertical lines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(-45deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_30px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(-45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_30px)] z-0"></div>
      
      {/* Subtle radial fade for the background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 dark:from-dark dark:via-transparent dark:to-dark z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Updated vertical line: border-l-2 and border-gray-700 for better visibility */}
        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4 md:ml-12 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot - Adjusted position to -left-[13px] to center on the 2px border (relative to padding box) */}
              <div className="absolute -left-[13px] top-0 bg-primary w-6 h-6 rounded-full border-4 border-gray-50 dark:border-dark flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0 font-mono bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full w-fit border border-gray-200 dark:border-gray-800">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Briefcase className="mr-3 text-secondary" /> Education
          </h3>
          
          <div className="grid gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="bg-white/80 dark:bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 transition-colors flex flex-col md:flex-row gap-6 md:items-start shadow-sm dark:shadow-none"
              >
                {/* Education Logo/Image */}
                {edu.image && (
                  <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white">
                    <img 
                      src={edu.image} 
                      alt={edu.institution} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}

                <div className="flex-grow w-full">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">{edu.degree}</p>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      {edu.gpa && (
                        <p className="text-secondary font-bold text-lg">
                          {edu.institution.includes("Dian Nuswantoro") ? "GPA" : "Grade"}: {edu.gpa}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{edu.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="mr-2 text-secondary mt-1">▹</span> 
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;