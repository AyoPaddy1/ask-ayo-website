/**
 * Automated Demo Prompts Component
 * 
 * This component automatically injects demo prompts into earnings articles
 * at strategic points to encourage widget usage.
 */

export function InlinePrompt() {
  return (
    <div className="my-6 p-4 bg-teal-50 border-l-4 border-teal-500 rounded-r">
      <p className="text-gray-800">
        💡 <strong>Try it now:</strong> Confused by anything on this page? Highlight any term - "fiscal year," "EPS," "gross margin" - and the AYO widget will explain it.
      </p>
    </div>
  );
}

export function CalloutBox() {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl">
      <div className="flex items-start gap-4">
        <div className="text-3xl">📖</div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still confused?</h3>
          <p className="text-gray-700 mb-4">
            That's what AYO is for. Highlight any term on this page - "fiscal year," "revenue beat," "Greater China" - and get a plain-English explanation instantly.
          </p>
          <p className="text-sm text-gray-600">
            Not seeing the widget?{' '}
            <a
              href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 font-semibold underline"
            >
              Get the free extension →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export function BottomCTA() {
  return (
    <div className="my-12 p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Want this for every earnings call?</h2>
      <p className="text-lg mb-6 opacity-90">
        You just saw how AYO breaks down earnings reports. Get the extension and do this on any financial content - news, documents, your company's all-hands.
      </p>
      <a
        href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:shadow-xl transition-all text-lg"
      >
        Get the Extension - Free →
      </a>
    </div>
  );
}

export function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm md:text-base">
          <strong>Confused by a term?</strong> Highlight it. AYO explains.
        </p>
        <a
          href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:shadow-lg transition-all text-sm md:text-base whitespace-nowrap"
        >
          Try it →
        </a>
      </div>
    </div>
  );
}

/**
 * Full Demo Prompts Suite
 * Use this in earnings articles to automatically inject all prompts
 */
export function EarningsArticlePrompts() {
  return (
    <>
      {/* Inline prompt - add after "The 30-Second Version" */}
      <InlinePrompt />
      
      {/* Callout box - add after Beat or Miss table */}
      <CalloutBox />
      
      {/* Bottom CTA - add before sources */}
      <BottomCTA />
      
      {/* Sticky footer - always visible while scrolling */}
      <StickyFooter />
    </>
  );
}
