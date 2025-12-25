import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../constants';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black text-center relative transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Let's Work Together
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mb-12 max-w-lg mx-auto"
        >
          I'm currently available for freelance projects and full-time opportunities in AI Development and Data Science.
        </motion.p>
        
        <div className="flex justify-center gap-6 mb-12">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 bg-gray-100 dark:bg-gray-900 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary transition-colors shadow-sm dark:shadow-none"
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Scroll To Top Button */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-8 flex justify-center"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-secondary text-gray-900 dark:text-white rounded-full transition-all shadow-lg border border-gray-300 dark:border-gray-700 hover:border-secondary group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;