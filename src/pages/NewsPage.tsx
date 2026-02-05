import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

export function NewsPage() {
  return (
    <>
      <SEO
        title="Finally Make Sense of Business Headlines"
        description="Interest rates. Inflation. Yield curves. Tariffs. The news is full of terms that sound important but nobody explains. AYO translates business news into plain English."
        canonical="https://www.ask-ayo.com/news"
        keywords={['business news', 'financial news explained', 'interest rates', 'inflation', 'yield curves', 'tariffs', 'economic terms']}
      />
      <Helmet>
        <title>Finally Make Sense of Business Headlines | Ask AYO</title>
        <meta name="description" content="Interest rates. Inflation. Yield curves. Tariffs. The news is full of terms that sound important but nobody explains. AYO does." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
                Finally make sense of business headlines.
              </h1>
              
              {/* What is this? */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is this?</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Interest rates. Inflation. Yield curves. Tariffs. The news is full of terms that sound important but nobody explains.
                </p>
              </div>

              {/* Why this exists */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why this exists</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Financial news is written for insiders. If you don't already know what "quantitative easing" means, you're locked out of understanding what's happening in the world. That's broken. We built AYO to fix it.
                </p>
              </div>

              {/* How it works */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How it works</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  See a term you don't understand? Highlight it. AYO explains it in plain English - on BBC, Reuters, the Financial Times, anywhere.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
                >
                  Get the Extension - Free →
                </a>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <img 
                  src="/images/demo-news.png" 
                  alt="AYO extension explaining quantitative easing on BBC Business" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Works On Section */}
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Works on:</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  BBC Business
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Financial Times
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Reuters
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Bloomberg
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  The Economist
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Any website
                </li>
              </ul>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl text-gray-900 mb-8 font-medium">
                It's not advice. Just clarity.
              </p>
              <a
                href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
              >
                Get the Extension - Free →
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
