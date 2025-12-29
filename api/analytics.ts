import type { VercelRequest, VercelResponse } from '@vercel/node';

// CONFIGURATION
const UMAMI_API_URL = 'https://api.umami.is/v1';
const WEBSITE_ID = process.env.VITE_UMAMI_WEBSITE_ID;
const API_KEY = process.env.UMAMI_API_KEY;

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
    // return response.status(403).json({ error: 'Forbidden' });
  }

  try {
    const headers = {
      'x-umami-api-key': API_KEY,
      'Content-Type': 'application/json',
    };

    // Date Range: All Time
    const endAt = Date.now();
    const startAt = 0; // 0 = Jan 1, 1970 (Beginning of time for computers)

    // 1. Fetch General Stats (Total for the period)
    const statsRes = await fetch(`${UMAMI_API_URL}/websites/${WEBSITE_ID}/stats?startAt=${startAt}&endAt=${endAt}`, { headers });
    const stats = await statsRes.json();

    // 2. Fetch Traffic Chart Data (Pageviews & Visitors per day)
    // Umami doesn't give a single "traffic" endpoint, we use pageviews grouped by day
    const chartRes = await fetch(
      `${UMAMI_API_URL}/websites/${WEBSITE_ID}/pageviews?startAt=${startAt}&endAt=${endAt}&unit=day&timezone=Asia/Jakarta`, 
      { headers }
    );
    const chartData = await chartRes.json();
    
    // We assume chartData returns { pageviews: [...], sessions: [...] } structure usually
    // Or sometimes it returns [{ x: 'date', y: 123 }] depending on version.
    // For Cloud/v2, typically /pageviews returns `{ pageviews: [...], sessions: [...] }`.
    // Let's normalize it. 

    // 3. Fetch Top Countries
    const countryRes = await fetch(
        `${UMAMI_API_URL}/websites/${WEBSITE_ID}/metrics?startAt=${startAt}&endAt=${endAt}&type=country&limit=5`,
        { headers }
    );
    const countryData = await countryRes.json();

    return response.status(200).json({
      stats,
      chart: chartData,
      countries: countryData
    });

  } catch (error) {
    console.error('Umami API Error:', error);
    return response.status(500).json({ error: 'Failed to fetch analytics data' });
  }
}
