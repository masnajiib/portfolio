import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { PUBLICATIONS, SECTION_CONTENT } from '../../constants';
import { motion } from 'framer-motion';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-16 relative bg-gray-50 dark:bg-dark overflow-hidden transition-colors duration-500">
       {/* Texture Pattern: Diagonal Lines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_12px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_12px)] opacity-60 z-0"></div>
      
      {/* Background Gradient Blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 dark:from-dark dark:via-transparent dark:to-dark z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col mb-10"
        >
          <div className="flex items-center">
            <BookOpen className="text-secondary mr-3 w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{SECTION_CONTENT.publications.title}</h2>
          </div>
          {SECTION_CONTENT.publications.description && (
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              {SECTION_CONTENT.publications.description}
            </p>
          )}
        </motion.div>

        <div className="grid gap-6">
          {PUBLICATIONS.map((pub, index) => (
            <motion.a 
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className="block group bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all shadow-lg shadow-gray-200/50 dark:shadow-none"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-gray-900 bg-secondary px-2 py-0.5 rounded">
                      {pub.year}
                    </span>
                    <span className="text-xs text-primary font-medium border border-primary/30 px-2 py-0.5 rounded">
                      {pub.role}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-500 mt-1 italic">{pub.journal}</p>
                </div>
                <div>
                   <ExternalLink className="text-gray-400 dark:text-gray-600 group-hover:text-secondary w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;