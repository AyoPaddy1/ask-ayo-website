import { useEffect, useRef } from 'react';

interface TradingViewChartProps {
  symbol: string;
  brandName: string;
}

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function TradingViewChart({ symbol, brandName }: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    // Load TradingView script if not already loaded
    if (!window.TradingView) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => initWidget();
      document.head.appendChild(script);
    } else {
      initWidget();
    }

    function initWidget() {
      if (containerRef.current && window.TradingView) {
        // Clear any existing widget
        if (widgetRef.current) {
          containerRef.current.innerHTML = '';
        }

        // Create new widget
        widgetRef.current = new window.TradingView.widget({
          container_id: containerRef.current.id,
          symbol: symbol,
          theme: 'light',
          style: '2', // Area chart style
          interval: 'D', // Daily
          width: '100%',
          height: 400,
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_top_toolbar: true,
          hide_legend: false,
          save_image: false,
          hide_volume: true,
          studies: [],
          show_popup_button: false,
          popup_width: '1000',
          popup_height: '650',
        });
      }
    }

    // Cleanup
    return () => {
      if (widgetRef.current && containerRef.current) {
        containerRef.current.innerHTML = '';
        widgetRef.current = null;
      }
    };
  }, [symbol]);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          {brandName} Stock Price
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Daily price chart powered by TradingView
        </p>
      </div>
      <div 
        id={`tradingview-chart-${symbol.replace(/[^a-zA-Z0-9]/g, '-')}`}
        ref={containerRef}
        className="tradingview-widget-container"
      />
    </div>
  );
}
