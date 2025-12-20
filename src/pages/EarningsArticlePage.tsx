import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { earningsReports } from '../data/earnings';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { TrendingUp, TrendingDown, Calendar, Clock } from 'lucide-react';

export function EarningsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const report = earningsReports.find(r => r.slug === slug);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (report) {
      // Import markdown content
      import(`../data/${report.id}-${report.slug}.md?raw`)
        .then(module => {
          setContent(module.default);
        })
        .catch(err => {
          console.error('Error loading earnings report:', err);
        });
    }
  }, [report]);

  if (!report) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Earnings Report Not Found</h1>
          <Link to="/earnings" className="text-teal-600 hover:text-teal-700 font-medium">
            ← Back to Earnings
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate schema markup for the earnings report
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": report.title,
    "description": report.description,
    "datePublished": new Date(report.date).toISOString(),
    "dateModified": new Date(report.date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "AskAYO"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AskAYO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ask-ayo.com/logo.png"
      }
    },
    "keywords": report.keywords.join(", "),
    "articleSection": "Earnings Reports",
    "about": {
      "@type": "Organization",
      "name": report.company,
      "tickerSymbol": report.ticker
    }
  };

  // Get related earnings reports (same sector, different company)
  const relatedReports = earningsReports
    .filter(r => r.sector === report.sector && r.id !== report.id)
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{report.title} | AskAYO Earnings</title>
        <meta name="description" content={report.description} />
        <meta name="keywords" content={report.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={report.title} />
        <meta property="og:description" content={report.description} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={report.title} />
        <meta name="twitter:description" content={report.description} />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link to="/" className="hover:text-teal-600">Home</Link>
            <span className="mx-2">→</span>
            <Link to="/earnings" className="hover:text-teal-600">Earnings</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">{report.company}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            {/* Company and Quarter Info */}
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
                {report.sector}
              </span>
              <span className="font-semibold text-gray-900">
                {report.ticker}
              </span>
              <span>•</span>
              <span>{report.quarter} {report.fiscalYear}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {report.date}
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {report.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {report.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {report.description}
            </p>

            {/* Beat/Miss Summary */}
            <div className="grid sm:grid-cols-2 gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Revenue</div>
                  <div className="text-2xl font-bold text-gray-900">{report.revenue.actual}</div>
                  <div className="text-sm text-gray-500">Expected: {report.revenue.expected}</div>
                </div>
                <div className={`flex items-center gap-2 ${report.revenue.beat ? 'text-green-600' : 'text-red-600'}`}>
                  {report.revenue.beat ? (
                    <>
                      <TrendingUp className="w-8 h-8" />
                      <span className="text-lg font-bold">Beat</span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-8 h-8" />
                      <span className="text-lg font-bold">Miss</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between border-l border-gray-200 pl-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">EPS</div>
                  <div className="text-2xl font-bold text-gray-900">{report.eps.actual}</div>
                  <div className="text-sm text-gray-500">Expected: {report.eps.expected}</div>
                </div>
                <div className={`flex items-center gap-2 ${report.eps.beat ? 'text-green-600' : 'text-red-600'}`}>
                  {report.eps.beat ? (
                    <>
                      <TrendingUp className="w-8 h-8" />
                      <span className="text-lg font-bold">Beat</span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-8 h-8" />
                      <span className="text-lg font-bold">Miss</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-2
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-teal-600 prose-a:no-underline hover:prose-a:text-teal-700
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-li:my-2
            prose-table:my-8 prose-table:border-collapse
            prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-gray-200
            prose-td:p-3 prose-td:border prose-td:border-gray-200
            prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
          ">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* Extension CTA */}
          <div className="mt-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Want instant explanations while you read?
            </h3>
            <p className="text-teal-50 mb-6 max-w-2xl mx-auto">
              Install the AskAYO Chrome extension to get AI-powered explanations of any financial term, right where you read. No more tab-switching or googling.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Install Free Extension
            </a>
          </div>

          {/* Related Earnings */}
          {relatedReports.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">More {report.sector} Earnings</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedReports.map(relatedReport => (
                  <Link
                    key={relatedReport.id}
                    to={`/earnings/${relatedReport.slug}`}
                    className="block group border border-gray-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition-all"
                  >
                    <span className="text-sm text-teal-600 font-medium mb-2 block">
                      {relatedReport.company} • {relatedReport.quarter} {relatedReport.fiscalYear}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {relatedReport.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {relatedReport.description.slice(0, 120)}...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedReport.readTime}
                      </span>
                      <span className={`flex items-center gap-1 ${relatedReport.revenue.beat && relatedReport.eps.beat ? 'text-green-600' : 'text-red-600'}`}>
                        {relatedReport.revenue.beat && relatedReport.eps.beat ? (
                          <>
                            <TrendingUp className="w-4 h-4" />
                            Beat
                          </>
                        ) : (
                          <>
                            <TrendingDown className="w-4 h-4" />
                            Mixed
                          </>
                        )}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Earnings */}
          <div className="mt-12 text-center">
            <Link
              to="/earnings"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all earnings reports
            </Link>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
