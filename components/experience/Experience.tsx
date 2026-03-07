import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { EXPERIENCES, EDUCATION, SECTION_CONTENT } from '../../src/constants';
import { parseBoldText } from '../../src/utils';
import { motion } from 'framer-motion';
import ImageWithLoader from '../common/ImageWithLoader';

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{SECTION_CONTENT.experience.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          {SECTION_CONTENT.experience.description && (
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              {parseBoldText(SECTION_CONTENT.experience.description)}
            </p>
          )}
        </motion.div>

        {/* Grouped Experience List */}
        <div className="space-y-8">
          {(() => {
            const grouped = EXPERIENCES.reduce((acc, exp) => {
              const last = acc[acc.length - 1];
              if (last && last.company === exp.company) {
                last.roles.push(exp);
              } else {
                acc.push({ company: exp.company, logo: exp.logo, roles: [exp] });
              }
              return acc;
            }, [] as { company: string; logo?: string; roles: typeof EXPERIENCES }[]);

            return grouped.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex gap-4">
                  {/* Logo Column */}
                  <div className="flex flex-col items-center flex-shrink-0 w-12 md:w-14">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded bg-white border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center p-1 relative z-10 shadow-sm">
                      {group.logo ? (
                        <ImageWithLoader 
                          src={group.logo} 
                          alt={group.company} 
                          className="w-full h-full object-contain" 
                          containerClassName="w-full h-full flex items-center justify-center"
                        />
                      ) : (
                        <Briefcase className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow pb-8 pt-1 pr-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{group.company}</h3>
                    
                    <div className="space-y-10 relative pl-2">
                        {group.roles.map((role, roleIdx) => (
                           <div key={role.id} className="relative">
                              {/* Line connecting to the next item */}
                              {group.roles.length > 1 && roleIdx < group.roles.length - 1 && (
                                <div className="absolute -left-[3.375rem] md:-left-[3.625rem] top-[0.4rem] h-[calc(100%+2.5rem)] w-3 flex justify-center" aria-hidden="true">
                                  <div className="w-0.5 bg-gray-200 dark:bg-gray-700 h-full" />
                                </div>
                              )}

                              {/* Dot on the line - positioned relative to content start */}
                              {/* 
                                 Correct centering calculation:
                                 Dist to Logo Center = (pl-2 [0.5rem]) + (gap-4 [1rem]) + (LogoWidth / 2)
                                 Mobile (w-12): 0.5 + 1.0 + 1.5 = 3.0rem
                                 Desktop (w-14): 0.5 + 1.0 + 1.75 = 3.25rem
                                 
                                 Element is w-3 (0.75rem). To center element at distance D:
                                 Left = -(D + Width/2) = -(D + 0.375)
                                 Mobile: -(3.0 + 0.375) = -3.375rem
                                 Desktop: -(3.25 + 0.375) = -3.625rem
                              */}
                              {group.roles.length > 1 && (
                                <div className="absolute -left-[3.375rem] md:-left-[3.625rem] top-[0.4rem] w-3 h-3 rounded-full border-2 border-primary bg-white ring-2 ring-white dark:ring-dark z-10" />
                              )}
                              
                              <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 mb-2">
                                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight">
                                  {role.role}
                                </h4>
                                <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 whitespace-nowrap flex-shrink-0">
                                  {role.period}
                                </span>
                              </div>
                              
                              {role.location && (
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                  <MapPin className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-primary" />
                                  <span>{role.location}</span>
                                </div>
                              )}

                              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {role.description.map((item, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="ml-1 mr-3 mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                    <span>{parseBoldText(item)}</span>
                                  </li>
                                ))}
                              </ul>
                           </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ));
          })()}
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
                    <ImageWithLoader 
                      src={edu.image} 
                      alt={edu.institution} 
                      className="w-full h-full object-cover" 
                      containerClassName="w-full h-full"
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