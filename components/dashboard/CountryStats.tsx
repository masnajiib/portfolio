import React from 'react';

interface CountryData {
  code: string;
  name: string;
  visitors: number;
  percent: number;
}

interface CountryStatsProps {
  data: CountryData[];
}

const CountryStats: React.FC<CountryStatsProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-full transition-colors duration-500">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Top Countries</h3>
      
      <div className="space-y-4">
        {data.map((country) => (
          <div key={country.code} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg">{country.code}</span> {/* Emoji Header fallback/simple representation */}
                <span className="text-gray-700 dark:text-gray-300 font-medium">{country.name}</span>
              </div>
              <span className="text-gray-900 dark:text-white font-bold">{country.visitors}</span>
            </div>
            
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${country.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryStats;
