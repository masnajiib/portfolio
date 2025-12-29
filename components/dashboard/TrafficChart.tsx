import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { THEME_COLORS } from '../../src/theme';

interface TrafficData {
  date: string;
  visitors: number;
  pageviews: number;
}

interface TrafficChartProps {
  data: TrafficData[];
}

const TrafficChart: React.FC<TrafficChartProps> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="bg-white dark:bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-[400px] transition-colors duration-500">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Traffic Trends</h3>
      
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis 
              tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              dx={-10}
            />
            <Tooltip 
              cursor={{ fill: isDark ? '#334155' : '#f1f5f9', opacity: 0.4 }}
              contentStyle={{ 
                backgroundColor: isDark ? '#1e293b' : '#fff',
                borderColor: isDark ? '#334155' : '#e2e8f0',
                borderRadius: '8px',
                color: isDark ? '#fff' : '#000'
              }}
              itemStyle={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
            />
            <Legend 
               wrapperStyle={{ paddingTop: '20px' }}
            />
            <Bar 
              dataKey="visitors" 
              name="Visitors"
              stackId="a" 
              fill={THEME_COLORS.primary} 
              radius={[0, 0, 4, 4]}
              barSize={20}
            />
            <Bar 
              dataKey="pageviews" 
              name="Views"
              stackId="a" 
              fill={THEME_COLORS.secondary} 
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficChart;
