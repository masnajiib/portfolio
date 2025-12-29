import React from 'react';
import { Divide } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number; // percent change
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon, trend = 'neutral' }) => {
  return (
    <div className="bg-white dark:bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</h3>
        </div>
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-primary">
          {icon}
        </div>
      </div>
      
      {change !== undefined && (
        <div className="flex items-center text-xs">
          <span 
            className={`font-medium ${
              trend === 'up' ? 'text-green-500' : 
              trend === 'down' ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            {change > 0 ? '+' : ''}{change}%
          </span>
          <span className="text-gray-400 ml-2">from last month</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
