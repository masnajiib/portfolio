import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ANALYTICS_CONFIG } from '../../constants';
import ThemeToggle from '../theme/ThemeToggle';

const Analytics: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark flex flex-col transition-colors duration-500">
      
      {/* Header */}
      <div className="bg-white/80 dark:bg-card/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
              aria-label="Back to Home"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Visitor Analytics
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-dark z-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <iframe 
          src={ANALYTICS_CONFIG.shareUrl}
          className="w-full h-[calc(100vh-64px)] border-0 relative z-10"
          onLoad={() => setIsLoading(false)}
          title="Analytics Dashboard"
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export default Analytics;
