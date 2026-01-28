import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface StockChartProps {
  ticker: string;
}

type TimeRange = '1D' | '1W' | '1M' | '3M' | '1Y' | '5Y';

interface ChartDataPoint {
  date: string;
  price: number;
}

export function StockChart({ ticker }: StockChartProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>('1M');
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchChartData();
  }, [ticker, timeRange]);

  const fetchChartData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Map time ranges to Twelve Data API parameters
      const intervalMap: Record<TimeRange, string> = {
        '1D': '5min',
        '1W': '1h',
        '1M': '1day',
        '3M': '1day',
        '1Y': '1week',
        '5Y': '1month'
      };

      const outputSizeMap: Record<TimeRange, number> = {
        '1D': 78, // 5-min intervals for 1 day (market hours)
        '1W': 35, // Hourly for 1 week
        '1M': 30, // Daily for 1 month
        '3M': 90, // Daily for 3 months
        '1Y': 52, // Weekly for 1 year
        '5Y': 60 // Monthly for 5 years
      };

      const interval = intervalMap[timeRange];
      const outputsize = outputSizeMap[timeRange];

      // Twelve Data API endpoint
      const apiKey = 'demo'; // Replace with actual API key from env
      const url = `https://api.twelvedata.com/time_series?symbol=${ticker}&interval=${interval}&outputsize=${outputsize}&apikey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'error') {
        throw new Error(data.message || 'Failed to fetch stock data');
      }

      if (!data.values || data.values.length === 0) {
        throw new Error('No data available for this time range');
      }

      // Transform API response to chart data
      const transformed: ChartDataPoint[] = data.values
        .reverse()
        .map((item: any) => ({
          date: item.datetime,
          price: parseFloat(item.close)
        }));

      setChartData(transformed);
    } catch (err) {
      console.error('Error fetching stock data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load chart data');
      
      // Fallback to mock data for demo
      generateMockData();
    } finally {
      setLoading(false);
    }
  };

  const generateMockData = () => {
    // Generate mock data for demo purposes
    const dataPoints = timeRange === '1D' ? 78 : timeRange === '1W' ? 35 : 30;
    const basePrice = 150 + Math.random() * 50;
    const mockData: ChartDataPoint[] = [];

    for (let i = 0; i < dataPoints; i++) {
      const variance = (Math.random() - 0.5) * 10;
      mockData.push({
        date: `Point ${i + 1}`,
        price: basePrice + variance + (i * 0.5)
      });
    }

    setChartData(mockData);
  };

  const timeRanges: TimeRange[] = ['1D', '1W', '1M', '3M', '1Y', '5Y'];

  const priceChange = chartData.length > 1
    ? ((chartData[chartData.length - 1].price - chartData[0].price) / chartData[0].price) * 100
    : 0;

  const isPositive = priceChange >= 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Share Price</h3>
          {chartData.length > 0 && (
            <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '+' : ''}{priceChange.toFixed(2)}% {timeRange}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                timeRange === range
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="h-64 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        </div>
      )}

      {error && !loading && (
        <div className="h-64 flex items-center justify-center">
          <p className="text-sm text-gray-500">{error}</p>
        </div>
      )}

      {!loading && !error && chartData.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                // Format date based on time range
                if (timeRange === '1D') return value.split(' ')[1] || value;
                if (timeRange === '1W' || timeRange === '1M') return value.split(' ')[0] || value;
                return value;
              }}
            />
            <YAxis
              domain={['auto', 'auto']}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${value.toFixed(0)}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
              formatter={(value: number | undefined) => value !== undefined ? [`$${value.toFixed(2)}`, 'Price'] : ['', '']}
              labelStyle={{ fontWeight: 600, marginBottom: '4px' }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke={isPositive ? '#10b981' : '#ef4444'}
              strokeWidth={2}
              dot={false}
              animationDuration={300}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      <p className="text-xs text-gray-500 mt-4">
        Data provided by Twelve Data. 15-minute delay for free tier.
      </p>
    </div>
  );
}
