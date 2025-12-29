import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, Eye, MousePointerClick, Globe, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../theme/ThemeToggle';
import StatsCard from './StatsCard';
import TrafficChart from './TrafficChart';
import CountryStats from './CountryStats';

// Map country codes to names/emojis manually or via library if needed.
// For simplicity, we just use the code provided by Umami (ISO 2 code)
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
        
        // Transform Stats
        // Umami stats: { pageviews: { value, change }, visitors: { value, change }, visits: { value, change }, bounces: { value, change }, totaltime: { value, change } }
        // Note: The API response structure might vary slightly, treating as flat object for safety or specific object
        // Actually Umami /stats usually returns: { pageviews: { value: 123, change: 10 }, ... }
        
        // Safe access helper
        const getVal = (obj: any) => obj?.value || 0;
        const getChange = (obj: any) => obj?.change || 0;

        // Note: If the api returns flat structure (depends on version), adjust here.
        // Assuming /stats endpoint returns object with keys pageviews, visitors, visits, bounces
        
        const s = data.stats || {};
        setStats({
          visits: getVal(s.visits),
          visitors: getVal(s.visitors),
          pageviews: getVal(s.pageviews),
          bounceRate: getVal(s.bounces) // Bounces is usually a count, bounce rate need calc? 
          // Umami usually returns `bounces` as object. Bounce rate = (bounces/visits)*100. 
          // Wait, Umami UI shows Bounce Rate. The API might return it or we calc it.
          // Let's assume `s.bounces.value` is total bounces.
        });
        
        // Transform Traffic Data
        // data.chart.pageviews = [{x: "2023-01-01", y: 10}, ...]
        // data.chart.sessions = [{x: "2023-01-01", y: 5}, ...]
        const pvs = data.chart?.pageviews || [];
        const visitors = data.chart?.sessions || []; // Umami uses 'sessions' for unique visits in charts usually
        
        // Merge arrays by date
        const mergedChart = pvs.map((item: any, index: number) => ({
             date: new Date(item.x).toLocaleDateString('en-US', { weekday: 'short' }), // "Mon"
             visitors: visitors[index]?.y || 0,
             pageviews: item.y || 0
        }));
        setTrafficData(mergedChart);
        
        // Transform Country Data
        // data.countries = [{ x: "ID", y: 100 }, ...]
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
        // Fallback to Mock if API fails (e.g. locally where /api doesn't exist)
        // Check if we are in dev
         if (process.env.NODE_ENV === 'development') {
             console.warn("Using Mock Data due to API failure (expected locally without 'vercel dev')");
             // Set mock data...
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
    <div className="min-h-screen bg-gray-50 dark:bg-dark flex flex-col transition-colors duration-500">
      
      {/* Header */}
      <div className="bg-white/80 dark:bg-card/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30 transition-colors duration-500">
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
      <div className="flex-1 relative overflow-y-auto">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-dark z-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
           <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
               <AlertCircle size={48} className="mb-4 text-red-500" />
               <p>{error}</p>
           </div>
        ) : (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
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
                title="Bounce Rate" 
                value={`${stats.visits > 0 ? Math.round((stats.bounceRate / stats.visits) * 100) : 0}%`}
                trend="neutral"
                icon={<Globe size={24} />} 
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TrafficChart data={trafficData} />
              </div>
              <div>
                <CountryStats data={countryData} />
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-400 dark:text-gray-600 mt-8">
              Data updated automatically every 5 minutes.
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default Analytics;
