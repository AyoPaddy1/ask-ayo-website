import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface StockChartProps {
  ticker: string;
  brandSlug: string;
}

interface ChartDataPoint {
  date: string;
  close: string;
}

export function StockChartStatic({ ticker, brandSlug }: StockChartProps) {
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    async function loadChartData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch pre-generated chart data from public/charts
        const response = await fetch(`/charts/${brandSlug}.json`);
        
        if (!response.ok) {
          throw new Error('Chart data not available');
        }

        const data = await response.json();
        
        if (data.status === 'error' || !data.values) {
          throw new Error('Invalid chart data');
        }

        // Transform data for recharts
        const transformed = data.values
          .slice(0, 90) // Last 90 days
          .reverse() // Oldest to newest
          .map((point: ChartDataPoint) => ({
            date: new Date(point.datetime).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            }),
            price: parseFloat(point.close)
          }));

        setChartData(transformed);
        
        // Get last updated time from metadata
        try {
          const metaResponse = await fetch('/charts/_metadata.json');
          if (metaResponse.ok) {
            const metadata = await metaResponse.json();
            setLastUpdated(metadata.generated);
          }
        } catch (e) {
          // Metadata fetch failed, not critical
        }

        setLoading(false);
      } catch (err) {
        console.error(`Failed to load chart for ${ticker}:`, err);
        setError(err instanceof Error ? err.message : 'Failed to load chart');
        setLoading(false);
      }
    }

    loadChartData();
  }, [ticker, brandSlug]);

  if (loading) {
    return (
      <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading chart...</div>
      </div>
    );
  }

  if (error || chartData.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-50 rounded-lg flex flex-col items-center justify-center p-6 text-center">
        <div className="text-gray-600 mb-2">📊 Chart data unavailable</div>
        <div className="text-sm text-gray-500">
          Price data for {ticker} is currently unavailable.
        </div>
      </div>
    );
  }

  // Calculate price change
  const firstPrice = chartData[0]?.price || 0;
  const lastPrice = chartData[chartData.length - 1]?.price || 0;
  const priceChange = lastPrice - firstPrice;
  const priceChangePercent = ((priceChange / firstPrice) * 100).toFixed(2);
  const isPositive = priceChange >= 0;

  return (
    <div className="w-full">
      {/* Price Summary */}
      <div className="mb-4">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-gray-900">
            ${lastPrice.toFixed(2)}
          </span>
          <span className={`text-lg font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{priceChange.toFixed(2)} ({isPositive ? '+' : ''}{priceChangePercent}%)
          </span>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          90-day performance
          {lastUpdated && (
            <span className="ml-2">
              • Updated {new Date(lastUpdated).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            domain={['auto', 'auto']}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={isPositive ? '#10b981' : '#ef4444'}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Disclaimer */}
      <div className="mt-4 text-xs text-gray-400 text-center">
        Charts update daily. Not financial advice.
      </div>
    </div>
  );
}
