import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { earningsReports } from '../data/earnings';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TrendingUp, TrendingDown, Calendar, Clock, ArrowLeft } from 'lucide-react';

export function EarningsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState('');
  
  const report = earningsReports.find(r => r.slug === slug);

  useEffect(() => {
    if (report) {
      fetch(`/articles/${report.id}-${report.slug}.md`)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error('Error loading markdown:', error));
    }
  }, [report]);

  if (!report) {
    return (
      <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold mb-4">Report Not Found</h1>
          <Link to="/earnings" className="text-teal-400 hover:text-teal-300">
            ← Back to Earnings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{report.company} {report.quarter} Earnings | AskAYO</title>
        <meta name="description" content={report.description} />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a2e]">
        <Header />
        
        <main className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/earnings"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Earnings</span>
            </Link>

            {/* Report Card */}
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Report Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-4 border-gray-900 px-8 sm:px-12 py-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                      {report.company} {report.quarter} Earnings
                    </h1>
                    <p className="text-lg text-gray-600 font-medium">What They Actually Said</p>
                  </div>
                  {report.revenue.beat && report.eps.beat ? (
                    <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg border-2 border-green-600 whitespace-nowrap">
                      <TrendingUp size={20} />
                      <span className="font-bold">Beat</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-lg border-2 border-red-600 whitespace-nowrap">
                      <TrendingDown size={20} />
                      <span className="font-bold">Miss</span>
                    </div>
                  )}
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-300">
                    <div className="text-gray-500 font-semibold mb-1">Company</div>
                    <div className="text-gray-900 font-bold">{report.company} · {report.ticker}</div>
                  </div>
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-300">
                    <div className="text-gray-500 font-semibold mb-1">Quarter</div>
                    <div className="text-gray-900 font-bold">{report.quarter}</div>
                  </div>
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-300 flex items-center gap-2">
                    <Calendar size={16} className="text-gray-500" />
                    <div>
                      <div className="text-gray-500 font-semibold text-xs">Published</div>
                      <div className="text-gray-900 font-bold">{report.date}</div>
                    </div>
                  </div>
                </div>

                {/* Read Time */}
                <div className="mt-4 flex items-center gap-2 text-gray-600">
                  <Clock size={16} />
                  <span className="text-sm font-medium">12 min read</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="px-8 sm:px-12 py-10">
                <div className="
                  prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-gray-200
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-teal-700
                  prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-a:text-teal-600 prose-a:no-underline hover:prose-a:text-teal-700 hover:prose-a:underline
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-ol:my-6 prose-ol:space-y-2
                  prose-li:text-gray-700 prose-li:my-2 prose-li:leading-relaxed
                  prose-table:w-full prose-table:my-10 prose-table:border-2 prose-table:border-gray-300 prose-table:rounded-lg prose-table:overflow-hidden
                  prose-thead:bg-gray-900 prose-thead:text-white
                  prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:font-bold prose-th:text-sm prose-th:uppercase prose-th:tracking-wide prose-th:border-r prose-th:border-gray-700 last:prose-th:border-r-0
                  prose-td:px-6 prose-td:py-4 prose-td:border-b prose-td:border-r prose-td:border-gray-200 last:prose-td:border-r-0
                  prose-tr:even:bg-gray-50
                  prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-8 prose-blockquote:bg-teal-50 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                  prose-hr:my-12 prose-hr:border-gray-300 prose-hr:border-t-2
                  prose-code:text-teal-700 prose-code:bg-teal-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm
                ">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>
              </div>

              {/* Footer Section */}
              <div className="bg-gray-50 border-t-2 border-gray-200 px-8 sm:px-12 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-gray-600 text-sm">
                    <span className="font-semibold">Sector:</span> {report.sector}
                  </div>
                  <Link 
                    to="/earnings"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                  >
                    <ArrowLeft size={18} />
                    <span>View All Earnings</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
