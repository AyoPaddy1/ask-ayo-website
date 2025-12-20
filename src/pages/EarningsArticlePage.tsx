import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { earningsReports } from '../data/earnings';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { TrendingUp, TrendingDown, Calendar, Clock, ArrowLeft } from 'lucide-react';

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
      <div className="min-h-screen bg-[#1a1a2e]">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Earnings Report Not Found</h1>
            <Link to="/earnings" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Earnings
            </Link>
          </div>
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

      <div className="min-h-screen bg-[#1a1a2e]">
        <Header />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            
            {/* Back Link */}
            <Link 
              to="/earnings" 
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Earnings
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              {/* Company Info */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
                <span className="bg-teal-100 text-teal-700 px-3 py-1.5 rounded-full font-semibold">
                  {report.sector}
                </span>
                <span className="font-bold text-gray-900">{report.ticker}</span>
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
                  {report.readTime} min read
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {report.company} {report.quarter} {report.fiscalYear} Earnings
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {report.description}
              </p>

              {/* Beat/Miss Summary */}
              <div className="grid sm:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                <div>
                  <div className="text-sm text-gray-600 mb-2 font-medium">Revenue</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{report.revenue.actual}</div>
                  <div className="text-sm text-gray-500 mb-3">Expected: {report.revenue.expected}</div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold ${
                    report.revenue.beat 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {report.revenue.beat ? (
                      <>
                        <TrendingUp className="w-4 h-4" />
                        Beat
                      </>
                    ) : (
                      <>
                        <TrendingDown className="w-4 h-4" />
                        Miss
                      </>
                    )}
                  </div>
                </div>

                <div className="sm:border-l sm:border-gray-300 sm:pl-6">
                  <div className="text-sm text-gray-600 mb-2 font-medium">EPS</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{report.eps.actual}</div>
                  <div className="text-sm text-gray-500 mb-3">Expected: {report.eps.expected}</div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold ${
                    report.eps.beat 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {report.eps.beat ? (
                      <>
                        <TrendingUp className="w-4 h-4" />
                        Beat
                      </>
                    ) : (
                      <>
                        <TrendingDown className="w-4 h-4" />
                        Miss
                      </>
                    )}
                  </div>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-teal-600 prose-h2:border-b-2 prose-h2:border-gray-200 prose-h2:pb-3
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
              prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-teal-600 prose-a:no-underline hover:prose-a:text-teal-700 hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-li:my-2 prose-li:text-gray-700
              prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:border-2 prose-table:border-gray-300 prose-table:rounded-lg prose-table:overflow-hidden
              prose-thead:bg-gray-100
              prose-th:bg-gray-100 prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:border prose-th:border-gray-300 prose-th:text-gray-900
              prose-td:p-4 prose-td:border prose-td:border-gray-300 prose-td:text-gray-700
              prose-tr:border-b prose-tr:border-gray-300
              prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-6
              prose-hr:my-10 prose-hr:border-gray-300
            ">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>

            {/* Back to Earnings Link */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <Link 
                to="/earnings" 
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to all earnings reports
              </Link>
            </div>

          </div>
        </article>
        
        <Footer />
      </div>
    </>
  );
}
