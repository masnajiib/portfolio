import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, Eye, MousePointerClick, Globe, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatsCard from './StatsCard';
import TrafficChart from './TrafficChart';
import PageStats from './PageStats';
import CountryStats from './CountryStats';
import { SECTION_CONTENT } from '../../src/constants';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../theme/ThemeToggle';

// Helper to safely get value from Umami object structure
function mapVal(obj: any): number {
  return typeof obj === 'number' ? obj : (obj?.value || 0);
}

const getCountryName = (code: string) => {
  try {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    return regionNames.of(code) || code;
  } catch {
    return code;
  }
};

const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const Analytics: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [stats, setStats] = useState({ visits: 0, visitors: 0, pageviews: 0, bounceRate: 0 });
  const [trafficData, setTrafficData] = useState<any[]>([]);
  const [countryData, setCountryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/analytics');
        if (!response.ok) throw new Error('Failed to load data');
        
        const data = await response.json();
        
        // Transform Traffic Data
        const pvs = data.chart?.pageviews || [];
        const sessions = data.chart?.sessions || [];
        
        const mergedChart = pvs.map((item: any, index: number) => ({
             date: new Date(item.x).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
             visitors: sessions[index]?.y || 0,
             pageviews: item.y || 0
        }));
        setTrafficData(mergedChart);

        // SYNC FIX: Calculate Totals from the Chart Data (which respects timezone)
        // This ensures Cards match the Chart exactly.
        const totalVisitsFromChart = sessions.reduce((acc: number, cur: any) => acc + cur.y, 0);
        const totalPageviewsFromChart = pvs.reduce((acc: number, cur: any) => acc + cur.y, 0);

        // Transform Stats
        const s = data.stats || {};
        setStats({
          visits: mapVal(s.visits), // Use API Stats (Total Sessions) to match Umami
          visitors: mapVal(s.visitors), // Use API Stats (Total Unique Visitors)
          pageviews: totalPageviewsFromChart, // Keep Chart Sum for Views (usually matches well)
          bounceRate: mapVal(s.bounces)
        });
        
        // Transform Country Data
        const totalCountryVisits = data.countries.reduce((acc: number, cur: any) => acc + cur.y, 0);
        const countries = data.countries.map((c: any) => ({
            code: getFlagEmoji(c.x),
            name: getCountryName(c.x),
            visitors: c.y,
            percent: totalCountryVisits > 0 ? Math.round((c.y / totalCountryVisits) * 100) : 0
        }));
        setCountryData(countries);

      } catch (err) {
        console.error(err);
        
        // Check if we are in dev (Localhost)
         if (import.meta.env.DEV) {
             console.warn("Using Mock Data (Localhost)");
             // Mock Data mirrors the API structure
             const mockChart = Array.from({ length: 7 }, (_, i) => ({
                date: new Date(Date.now() - (6-i)*86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                visitors: Math.floor(Math.random() * 50) + 10,
                pageviews: Math.floor(Math.random() * 100) + 20
             }));
             
             setStats({
                visits: mockChart.reduce((a, b) => a + b.visitors, 0),
                visitors: 150,
                pageviews: mockChart.reduce((a, b) => a + b.pageviews, 0),
                bounceRate: 45
             });
             
             setTrafficData(mockChart);
             
             setCountryData([
                { code: '🇮🇩', name: 'Indonesia', visitors: 120, percent: 70 },
                { code: '🇺🇸', name: 'United States', visitors: 30, percent: 20 },
                { code: 'sg', name: 'Singapore', visitors: 10, percent: 10 }
             ]);
             
         } else {
             setError('Unable to load analytics data. Please try again later.');
         }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-500 relative">
      {/* Texture Pattern: Grid - Matching About Section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Global Focus Reset for Dashboard */}
      <style>{`
        *:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        /* Restore standard focus for inputs if needed, but remove for general UI cards */
        input:focus, textarea:focus, select:focus {
           box-shadow: 0 0 0 2px var(--color-primary) !important;
        }
      `}</style>
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-card/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
              aria-label="Back to Home"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {SECTION_CONTENT.dashboard.title}
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 pb-8 relative z-10">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
           <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-gray-500 dark:text-gray-400">
              <AlertCircle size={48} className="mb-4 text-red-500" />
              <p>{error}</p>
           </div>
        ) : (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <div className="mb-8">
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {SECTION_CONTENT.dashboard.description}
              </p>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard 
                title="Visits" 
                value={stats.visits.toLocaleString()} 
                trend="neutral"
                icon={<MousePointerClick size={24} />} 
              />
              <StatsCard 
                title="Visitors" 
                value={stats.visitors.toLocaleString()} 
                trend="neutral"
                icon={<Users size={24} />} 
              />
              <StatsCard 
                title="Views" 
                value={stats.pageviews.toLocaleString()} 
                trend="neutral"
                icon={<Eye size={24} />} 
              />
              <StatsCard 
                title="Countries" 
                value={countryData.length.toString()}
                trend="neutral"
                icon={<Globe size={24} />} 
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TrafficChart data={trafficData} />
              </div>
              <div className="space-y-6">
                <CountryStats data={countryData.slice(0, 5)} />
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default Analytics;
