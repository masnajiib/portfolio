import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, X, ZoomIn } from 'lucide-react';
import { CERTIFICATIONS, SECTION_DESCRIPTIONS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-dark relative overflow-hidden transition-colors duration-500">
       {/* Texture Pattern: Radial Dots (Distinct from Projects square grid) */}
      <div className="absolute inset-0 bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.2] z-0"></div>
      
      {/* Central Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f9fafb_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            {SECTION_DESCRIPTIONS.certifications}
          </p>
        </motion.div>

        {/* Flex container with justify-center ensures items are centered if less than max columns */}
        <div className="flex flex-wrap justify-center gap-8">
          {CERTIFICATIONS.map((cert, index) => (
             <motion.div
               key={cert.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: index * 0.1 }}
               // Adjusted lg width to 1.4rem to match Projects.tsx logic perfectly
               className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] bg-white dark:bg-card rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-secondary/50 transition-colors group flex flex-col shadow-lg z-10"
             >
                {/* Image & Hover Effect - Updated to 16:9 Aspect Ratio - Added onClick */}
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900 p-2 border-b border-gray-200 dark:border-gray-800 cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                   <img 
                     src={cert.image} 
                     alt={cert.title} 
                     className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                   />
                   <div className="absolute inset-0 bg-white/90 dark:bg-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
                      <p className="text-gray-900 dark:text-white text-sm text-center font-medium leading-relaxed mb-3">
                        {cert.hoverText}
                      </p>
                      <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-wider bg-secondary/10 px-3 py-1.5 rounded-full">
                        <ZoomIn size={14} /> View Full Size
                      </div>
                   </div>
                   
                   {/* Badge for visual interest */}
                   <div className="absolute top-3 right-3 bg-secondary/90 text-gray-900 p-1.5 rounded-full shadow-lg z-10 pointer-events-none">
                     <Award size={16} />
                   </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative bg-white dark:bg-card">
                   {/* Added gap-4 here to separate issuer badge from date */}
                   <div className="flex justify-between items-start mb-3 gap-4">
                      <div className="text-secondary text-xs font-bold uppercase tracking-wider bg-secondary/10 px-2 py-1 rounded">
                        {cert.issuer}
                      </div>
                      <div className="flex flex-col items-end flex-shrink-0">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs font-mono mt-1">
                          <Calendar size={12} className="mr-1" />
                          {cert.date}
                        </div>
                      </div>
                   </div>
                   
                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary transition-colors leading-snug">
                     {cert.title}
                   </h3>
                   
                   {cert.link && (
                     <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                        >
                          <ExternalLink size={14} />
                          <span>View Credential</span>
                        </a>
                     </div>
                   )}
                </div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-gray-800/50 hover:bg-gray-700/80 p-2 rounded-full transition-all z-50"
              aria-label="Close full view"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            >
              <img 
                src={selectedImage} 
                alt="Certificate Full View" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-800"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;