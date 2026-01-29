import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function NewsPage() {
  return (
    <>
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
                  See a term you don't understand? Highlight it. AYO explains it in plain English — on BBC, Reuters, the Financial Times, anywhere.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
                >
                  Get the Extension — Free →
                </a>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="aspect-video bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-24 h-24 mx-auto mb-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm font-medium">Screenshot: Extension working on BBC Business</p>
                    <p className="text-xs mt-2 text-gray-400">User highlights "quantitative easing"</p>
                    <p className="text-xs text-gray-400">→ AYO explains it in plain English</p>
                  </div>
                </div>
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
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
              >
                Get the Extension — Free →
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
