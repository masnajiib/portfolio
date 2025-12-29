import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface PageData {
  path: string;
  visitors: number;
  percent: number;
}

interface PageStatsProps {
  data: PageData[];
}

const PageStats: React.FC<PageStatsProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-full transition-colors duration-500">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Top Pages</h3>
      
      <div className="space-y-4">
        {data.map((page, index) => (
          <div key={`${page.path}-${index}`} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300 font-medium truncate w-[70%]">{page.path}</span>
              <span className="text-gray-900 dark:text-white font-bold">{page.visitors}</span>
            </div>
            
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-secondary rounded-full"
                style={{ width: `${page.percent}%` }}
              />
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-4">No page data available</p>
        )}
      </div>
    </div>
  );
};

export default PageStats;
