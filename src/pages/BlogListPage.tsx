import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { articles } from '../data/articles';
import { Helmet } from 'react-helmet-async';

export function BlogListPage() {
  return (
    <>
      <Helmet>
        <title>Financial Terms Blog | AskAYO</title>
        <meta name="description" content="Learn about financial terms, investing concepts, and stock market basics. Plain English explanations of EBITDA, P/E ratio, market cap, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Financial Terms Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plain English explanations of financial jargon. No textbook definitions—just clear, practical guides to help you understand finance.
            </p>
          </div>

          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block group"
              >
                <article className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center text-teal-600 font-medium group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Want instant explanations while you read?
            </h3>
            <p className="text-teal-50 mb-6 max-w-2xl mx-auto">
              Install the AYO Browser Extension to get AI-powered explanations of any financial term, right where you read.
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
        </div>

        <Footer />
      </div>
    </>
  );
}
