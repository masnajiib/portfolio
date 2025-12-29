import React, { useContext } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { THEME_COLORS } from '../../theme';

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
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={THEME_COLORS.primary} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={THEME_COLORS.primary} stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPageviews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={THEME_COLORS.secondary} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={THEME_COLORS.secondary} stopOpacity={0}/>
              </linearGradient>
            </defs>
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
              contentStyle={{ 
                backgroundColor: isDark ? '#1e293b' : '#fff',
                borderColor: isDark ? '#334155' : '#e2e8f0',
                borderRadius: '8px',
                color: isDark ? '#fff' : '#000'
              }}
              itemStyle={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
            />
            <Area 
              type="monotone" 
              dataKey="pageviews" 
              stackId="1" 
              stroke={THEME_COLORS.secondary} 
              fill="url(#colorPageviews)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="visitors" 
              stackId="1" 
              stroke={THEME_COLORS.primary} 
              fill="url(#colorVisitors)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficChart;
