import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark text-gray-900 dark:text-white p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-full transition-colors shadow-lg shadow-blue-500/25"
        >
          <Home className="mr-2 w-5 h-5" />
          Back to Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
