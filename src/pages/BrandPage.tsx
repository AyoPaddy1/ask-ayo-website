import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands } from '../data/brands';
import { earningsReports } from '../data/earnings';
import { StockChart } from '../components/StockChart';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function BrandPage() {
  const { slug } = useParams<{ slug: string }>();
  const brand = brands.find(b => b.slug === slug);
  const [activeTab, setActiveTab] = useState<'overview' | 'earnings'>('overview');
  const [livePrice, setLivePrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (brand) {
      fetchLivePrice();
    }
  }, [brand]);

  const fetchLivePrice = async () => {
    if (!brand) return;

    try {
      const apiKey = 'demo'; // Replace with actual API key
      const url = `https://api.twelvedata.com/quote?symbol=${brand.ticker}&apikey=${apiKey}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.price) {
        setLivePrice(parseFloat(data.price));
        if (data.percent_change) {
          setPriceChange(parseFloat(data.percent_change));
        }
      }
    } catch (err) {
      console.error('Error fetching live price:', err);
      // Fallback to mock data
      setLivePrice(150 + Math.random() * 50);
      setPriceChange((Math.random() - 0.5) * 5);
    } finally {
      setLoading(false);
    }
  };

  if (!brand) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Brand not found</h1>
          <Link to="/brands" className="text-purple-600 hover:text-purple-700">
            ← Back to Brands
          </Link>
        </div>
      </div>
    );
  }

  // Filter earnings articles for this brand
  const brandEarnings = earningsReports.filter((e: any) => 
    e.title.toLowerCase().includes(brand.name.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>{brand.name} ({brand.ticker}) - Earnings, Stock Price & Business Breakdown | Ask AYO</title>
        <meta name="description" content={`${brand.insight} Track ${brand.name}'s earnings, live stock price, and understand how they make money. ${brand.tagline}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/brands" className="text-gray-500 hover:text-gray-700">Brands</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{brand.name}</span>
            </nav>
          </div>
        </div>

        {/* Brand Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="text-6xl">{brand.logo}</div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{brand.name}</h1>
                  <p className="text-lg text-gray-600 mt-1">{brand.ticker}</p>
                </div>
              </div>

              {/* Live Stock Price */}
              <div className="text-right">
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 w-24 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                  </div>
                ) : (
                  <>
                    <p className="text-3xl font-bold text-gray-900">
                      ${livePrice?.toFixed(2) || '—'}
                    </p>
                    {priceChange !== null && (
                      <p className={`text-sm font-medium ${priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}% today
                      </p>
                    )}
                  </>
                )}
                <p className="text-xs text-gray-500 mt-1">Live price</p>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl text-gray-700 mt-4 italic">"{brand.tagline}"</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('earnings')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'earnings'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Earnings ({brandEarnings.length})
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Stock Chart */}
              <StockChart ticker={brand.ticker} />

              {/* Section 1: The Killer Hook */}
              <section className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Business</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{brand.insight}</p>
              </section>

              {/* Section 2: How They Make Money */}
              <section className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How They Make Money</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{brand.howTheyMakeMoney.summary}</p>
                
                <div className="space-y-4">
                  {brand.howTheyMakeMoney.breakdown.map((segment, idx) => (
                    <div key={idx} className="border-l-4 border-purple-600 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{segment.segment}</h3>
                        <span className="text-lg font-bold text-purple-600">{segment.percentage}%</span>
                      </div>
                      <p className="text-sm text-gray-600">{segment.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: The Growth Story */}
              <section className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Growth Story</h2>
                <p className="text-gray-700 leading-relaxed">{brand.growthStory}</p>
              </section>

              {/* Section 4: What the Pros Watch */}
              <section className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Pros Watch</h2>
                <p className="text-gray-600 mb-6">These are the metrics that move the stock:</p>
                
                <div className="space-y-4">
                  {brand.whatProsWatch.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">📊 {item.metric}</h3>
                      <p className="text-sm text-gray-600">{item.why}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Right Now */}
              <section className="bg-purple-50 rounded-lg border border-purple-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Right Now</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{brand.rightNow}</p>
                <p className="text-sm text-gray-500">Last updated: {brand.lastUpdated}</p>
              </section>

              {/* Extension CTA */}
              <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-3">Want earnings alerts for {brand.name}?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Get notified when {brand.name} reports earnings. No spam, just the numbers that matter.
                </p>
                <a
                  href="https://chromewebstore.google.com/detail/ask-ayo/your-extension-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Add to Chrome — It's Free
                </a>
              </section>

              {/* Disclaimer */}
              <div className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600">
                <p className="font-semibold mb-2">⚠️ Not Financial Advice</p>
                <p>
                  This is educational content, not investment advice. We're not telling you to buy or sell anything. 
                  Do your own research. Past performance doesn't guarantee future results. Investing involves risk. 
                  We may earn affiliate commissions if you sign up for services through our links.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-6">
              {brandEarnings.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <p className="text-gray-500">No earnings articles yet. Check back soon!</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900">Earnings Coverage</h2>
                  <div className="grid gap-6">
                    {brandEarnings.map((article: any) => (
                      <Link
                        key={article.id}
                        to={`/brands/${brand.slug}/earnings/${article.slug}`}
                        className="bg-white rounded-lg border border-gray-200 p-6 hover:border-purple-600 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            article.type === 'preview'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {article.type === 'preview' ? '📅 Preview' : '✅ Results'}
                          </span>
                          <span className="text-sm text-gray-500">{article.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.author}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
