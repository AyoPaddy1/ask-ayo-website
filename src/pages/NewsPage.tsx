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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Finally make sense of business headlines.
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Interest rates. Inflation. Yield curves. Tariffs.
              </p>
              <p className="text-xl text-gray-600 mb-4">
                The news is full of terms that sound important but nobody explains.
              </p>
              <p className="text-2xl font-semibold text-teal-600 mt-8">
                AYO does.
              </p>
            </div>
          </section>

          {/* Demo Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="aspect-video bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center mb-8">
                  <div className="text-center text-gray-500">
                    <svg className="w-24 h-24 mx-auto mb-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm">Screenshot: Extension working on BBC Business</p>
                    <p className="text-xs mt-2">User highlights "quantitative easing"</p>
                    <p className="text-xs">→ AYO explains it in plain English</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl text-gray-900 mb-2">
                Highlight any term in any article.
              </p>
              <p className="text-2xl text-gray-900 mb-2">
                Get a plain-English explanation.
              </p>
              <p className="text-2xl text-gray-900 mb-8">
                No finance degree required.
              </p>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Get the Chrome Extension — Free →
              </a>
            </div>
          </section>

          {/* Works On Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Works on:</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  BBC Business
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Financial Times
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Reuters
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Bloomberg
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  The Economist
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Any website
                </li>
              </ul>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl text-gray-900 mb-8">
                It's not advice. Just clarity.
              </p>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
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
