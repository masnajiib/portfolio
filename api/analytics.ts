import type { VercelRequest, VercelResponse } from '@vercel/node';

// CONFIGURATION
const UMAMI_API_URL = 'https://api.umami.is/v1';
const WEBSITE_ID = process.env.VITE_UMAMI_WEBSITE_ID || 'd52de2f4-a7c6-4507-aefd-c34417c28a97';
const API_KEY = process.env.UMAMI_API_KEY || 'api_nPggW0J4Fly5cWagdUbLQyAfeRUenAc7';

// Allowed Origins for Security
const ALLOWED_ORIGINS = [
  'https://www.almasnajiib27.my.id',
  'https://almasnajiib27.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000'
];

export default async function handler(request: VercelRequest, response: VercelResponse) {
  // CORS / Security Check
  const origin = request.headers.origin;
  const isAllowed = ALLOWED_ORIGINS.some(allowed => origin === allowed);
  
  if (!isAllowed && process.env.NODE_ENV === 'production') {
    // Optional: Enable strict checking in production
  }

  try {
    const headers = {
      'x-umami-api-key': API_KEY,
      'Content-Type': 'application/json',
    };

    // Date Range: All Time (Safe Start)
    const endAt = Date.now();
    const startAt = new Date('2024-01-01').getTime();

    // Helper for fetch with error check
    const fetchUmami = async (endpoint: string) => {
        const res = await fetch(`${UMAMI_API_URL}/websites/${WEBSITE_ID}${endpoint}`, { headers });
        if (!res.ok) {
            const txt = await res.text();
            throw new Error(`Umami API Error (${res.status}): ${txt}`);
        }
        return res.json();
    };

    // 1. Fetch General Stats
    const stats = await fetchUmami(`/stats?startAt=${startAt}&endAt=${endAt}&timezone=Asia/Jakarta`);

    // 2. Fetch Traffic Chart Data
    const chartData = await fetchUmami(`/pageviews?startAt=${startAt}&endAt=${endAt}&unit=day&timezone=Asia/Jakarta`);
    
    // 3. Fetch Top Countries
    const countryData = await fetchUmami(`/metrics?startAt=${startAt}&endAt=${endAt}&type=country&limit=50&timezone=Asia/Jakarta`);

    return response.status(200).json({
      stats,
      chart: chartData,
      countries: countryData
    });

    return response.status(200).json({
      stats,
      chart: chartData,
      countries: countryData,
      pages: pageData
    });

  } catch (error) {
    console.error('Umami API Error:', error);
    return response.status(500).json({ error: 'Failed to fetch analytics data' });
  }
}
