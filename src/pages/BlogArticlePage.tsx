import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { articles } from '../data/articles';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (article) {
      // Import markdown content
      import(`../data/${article.id}-${article.slug}.md?raw`)
        .then(module => {
          setContent(module.default);
        })
        .catch(err => {
          console.error('Error loading article:', err);
        });
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate schema markup for the article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
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
    "keywords": article.keywords.join(", "),
    "articleSection": article.category
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | AskAYO Blog</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        
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
            <Link to="/blog" className="hover:text-teal-600">Blog</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">{article.category}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600">
              {article.description}
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none
            prose-headings:font-bold
            prose-h2:text-teal-600 prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-gray-200
            prose-h3:text-teal-600 prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-teal-600 prose-a:no-underline hover:prose-a:text-teal-700
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-li:my-2
            prose-table:my-8
            prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left
            prose-td:p-3 prose-td:border-t
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

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {articles
                .filter(a => a.id !== article.id)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Link
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.slug}`}
                    className="block group border border-gray-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition-all"
                  >
                    <span className="text-sm text-teal-600 font-medium mb-2 block">
                      {relatedArticle.category}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {relatedArticle.readTime}
                    </p>
                  </Link>
                ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
