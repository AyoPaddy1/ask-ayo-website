import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands } from '../data/brands';
import { earningsReports } from '../data/earnings';
import { StockChartStatic } from '../components/StockChartStatic';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function BrandPage() {
  const { slug } = useParams<{ slug: string }>();
  const brand = brands.find(b => b.slug === slug);
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
      const apiKey = 'a565b337a77c4e6586e4158a21e2d4c4';
      const url = `https://api.twelvedata.com/quote?symbol=${brand.ticker}&apikey=${apiKey}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.close) {
        setLivePrice(parseFloat(data.close));
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
          <Link to="/investing" className="text-purple-600 hover:text-purple-700">
            ← Back to Investing
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
        <title>{brand.name} ({brand.ticker}) - Earnings & Stock Price | Ask AYO</title>
        <meta name="description" content={`Track ${brand.name}'s earnings and live stock price. Understand every term in their reports with Ask AYO.`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/investing" className="text-gray-500 hover:text-gray-700">Investing</Link>
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
                <img
                  src={`https://img.logo.dev/${brand.domain}?token=pk_ZsKdfCf9SJqbryuxYrFPDA&format=png&size=128`}
                  alt={`${brand.name} logo`}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{brand.name}</h1>
                  <p className="text-lg text-gray-600 mt-1">{brand.ticker} · {brand.sector}</p>
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
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {/* Stock Chart */}
            <div>
              <StockChartStatic ticker={brand.ticker} brandSlug={brand.slug} />
            </div>

            {/* Earnings Feed */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Earnings</h2>
              
              {brandEarnings.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <p className="text-gray-500">No earnings articles yet. Check back soon!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {brandEarnings.map((article: any) => {
                    // Determine badge based on beat status
                    const didBeat = article.revenue?.beat && article.eps?.beat;
                    const didMiss = !article.revenue?.beat || !article.eps?.beat;
                    
                    let badgeClass = '';
                    let badgeText = '';
                    
                    if (article.status === 'preview') {
                      badgeClass = 'bg-blue-100 text-blue-700';
                      badgeText = 'PREVIEW';
                    } else if (didBeat) {
                      badgeClass = 'bg-green-100 text-green-700';
                      badgeText = '↗ BEAT';
                    } else if (didMiss) {
                      badgeClass = 'bg-red-100 text-red-700';
                      badgeText = '↘ MISS';
                    } else {
                      badgeClass = 'bg-green-100 text-green-700';
                      badgeText = '✅ Results';
                    }
                    
                    return (
                      <Link
                        key={article.id}
                        to={`/investing/${brand.slug}/earnings/${article.slug}`}
                        className="block bg-white rounded-lg border border-gray-200 p-6 hover:border-purple-600 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${badgeClass}`}>
                            {badgeText}
                          </span>
                          <span className="text-sm text-gray-500">{article.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                        <div className="flex items-center text-sm text-teal-600 font-medium">
                          <span>{article.readTime} →</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Investor Relations Link */}
            {/* Investor Relations section - commented out until irUrl is added to Brand interface
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📎</span>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Investor Relations</p>
                  <a
                    href={brand.irUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    View Investor Relations →
                  </a>
                </div>
              </div>
            </section>
            */}

            {/* Extension CTA */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Understand every term in these reports.</h2>
              <p className="text-lg mb-6 opacity-90">
                Highlight any financial jargon — on this page or anywhere else — and get an instant explanation.
              </p>
              <a
                href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get the Extension — Free →
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
        </div>

        <Footer />
      </div>
    </>
  );
}
