import React, { useContext, useState, useMemo, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { THEME_COLORS } from '../../src/theme';

interface TrafficData {
  date: string;
  rawDate: string;
  visitors: number;
  pageviews: number;
}

interface TrafficChartProps {
  data: TrafficData[];
}

const CustomBrushTraveller = (props: any) => {
  const { x, y, width, height, stroke } = props;
  const padding = 2; // Padding from top and bottom
  
  return (
    <g transform={`translate(${x}, ${y})`} style={{ cursor: 'ew-resize' }}>
      {/* Container background for the drag handle */}
      <rect 
        x={0} 
        y={padding} 
        width={width} 
        height={height - padding * 2} 
        fill={stroke} 
        rx={width / 2} 
      />
      {/* Inner grip lines */}
      <line x1={width / 2 - 1.5} y1={height / 2 - 4} x2={width / 2 - 1.5} y2={height / 2 + 4} stroke="#ffffff" strokeWidth={1} strokeLinecap="round" />
      <line x1={width / 2 + 1.5} y1={height / 2 - 4} x2={width / 2 + 1.5} y2={height / 2 + 4} stroke="#ffffff" strokeWidth={1} strokeLinecap="round" />
    </g>
  );
};

const TrafficChart: React.FC<TrafficChartProps> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [sortBy, setSortBy] = useState<'date' | 'highest' | 'lowest'>('date');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const processedData = useMemo(() => {
    if (!data) return [];
    
    // First, map data so modifying it doesn't mutate original
    let filtered = [...data];
    
    // Filter by date range using rawDate
    if (startDate) {
      const start = new Date(startDate).getTime();
      filtered = filtered.filter(item => new Date(item.rawDate).getTime() >= start);
    }
    if (endDate) {
      // Set end date to end of day
      const endObj = new Date(endDate);
      endObj.setHours(23, 59, 59, 999);
      const end = endObj.getTime();
      filtered = filtered.filter(item => new Date(item.rawDate).getTime() <= end);
    }
    
    // Sort
    if (sortBy === 'lowest') {
      filtered.sort((a, b) => a.visitors - b.visitors);
    } else if (sortBy === 'highest') {
      filtered.sort((a, b) => b.visitors - a.visitors);
    } else {
      // chronological
      filtered.sort((a, b) => new Date(a.rawDate).getTime() - new Date(b.rawDate).getTime());
    }
    
    return filtered;
  }, [data, startDate, endDate, sortBy]);

  return (
    <div className="bg-white dark:bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Traffic Trends</h3>
        
        <div className="flex flex-wrap gap-3 items-center">
          {/* Start Date */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 dark:text-gray-400">Start:</label>
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-primary focus:border-primary px-2 py-1 outline-none dark:[color-scheme:dark]"
            />
          </div>

          {/* End Date */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 dark:text-gray-400">End:</label>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-primary focus:border-primary px-2 py-1 outline-none dark:[color-scheme:dark]"
            />
          </div>

          {/* Sort */}
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-primary focus:border-primary px-2 py-1 outline-none"
          >
            <option value="date">Date (Chronological)</option>
            <option value="highest">Highest Visitors</option>
            <option value="lowest">Lowest Visitors</option>
          </select>
        </div>
      </div>
      
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={processedData}
            margin={{
              top: 10,
              right: isMobile ? 10 : 50,
              left: isMobile ? 10 : 30,
              bottom: 20,
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
            <Brush 
              dataKey="date" 
              height={25} 
              stroke={isDark ? THEME_COLORS.primary : THEME_COLORS.primary} 
              fill={isDark ? '#1e293b' : '#ffffff'}
              tickFormatter={() => ''}
              travellerWidth={10}
              traveller={CustomBrushTraveller}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficChart;
