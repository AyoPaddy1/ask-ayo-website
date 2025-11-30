import { useState } from 'react';
import { Sparkles, Zap } from 'lucide-react';

export function TryIt() {
  const [text, setText] = useState('');

  const handleTranslate = () => {
    if (text.trim()) {
      window.open('https://chromewebstore.google.com/detail/ask-ayo/aadolefccokodn0bpipmpknijggnjcj', '_blank');
    }
  };

  return (
    <section id="try-it" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 via-white to-teal-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-yellow-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-teal-400 rounded-full opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 transform rotate-2 shadow-xl font-semibold">
              <Zap className="w-4 h-4" />
              Try it right now (seriously)
            </span>
          </div>
          
          <h2 className="text-gray-900 mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold">
            See Jargon.{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Highlight It.</span>
              <div className="absolute inset-0 bg-yellow-300 -skew-x-12 opacity-50"></div>
            </span>{' '}
            <br />
            Understand It.
          </h2>
          <p className="text-gray-600 text-xl sm:text-2xl">
            We turn financial gibberish into English. 👇
          </p>
        </div>
        
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border-4 border-gray-900 transform hover:rotate-0 -rotate-1 transition-all">
          <div className="mb-8">
            <label className="text-gray-900 mb-4 flex items-center gap-3 text-xl font-semibold">
              <Sparkles className="w-6 h-6 text-teal-600" />
              Paste something confusing:
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Try: 'The company expects sequential deceleration in top-line growth with 320 basis points of margin compression...'"
              className="w-full h-56 p-6 border-4 border-gray-300 rounded-3xl resize-none focus:outline-none focus:border-teal-500 focus:ring-8 focus:ring-teal-100 transition-all text-gray-900 placeholder:text-gray-400 text-lg bg-gray-50"
            />
          </div>
          
          <div className="text-sm text-gray-600 mb-8 flex flex-wrap gap-2">
            <span className="text-gray-900 font-semibold">Try pasting:</span>
            <span className="bg-gradient-to-r from-teal-100 to-teal-200 px-4 py-2 rounded-full border-2 border-teal-300 font-medium">📄 Annual reports</span>
            <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 py-2 rounded-full border-2 border-yellow-300 font-medium">📞 Earnings calls</span>
            <span className="bg-gradient-to-r from-red-100 to-red-200 px-4 py-2 rounded-full border-2 border-red-300 font-medium">🏛️ Fed statements</span>
            <span className="bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full border-2 border-green-300 font-medium">📰 Financial news</span>
          </div>
          
          <button
            onClick={handleTranslate}
            className="w-full bg-gradient-to-r from-teal-500 via-teal-600 to-yellow-500 hover:from-teal-600 hover:via-teal-700 hover:to-yellow-600 text-white py-6 rounded-3xl transition-all shadow-xl hover:shadow-2xl text-2xl hover:scale-[1.02] border-4 border-teal-700 font-bold"
          >
            ✨ Translate to Plain English
          </button>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://chromewebstore.google.com/detail/ask-ayo/aadolefccokodn0bpipmpknijggnjcj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-4 border-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg font-bold text-gray-900"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.894l-2.894-5.014a4.002 4.002 0 0 0-6.894 4.12l-2.894 5.014a10.002 10.002 0 0 1 12.682-4.12z"/>
            </svg>
            <span>Get the Chrome Extension — It's Free</span>
          </a>
          <p className="text-gray-500 mt-4 text-base">
            Just highlight any term on any website, right-click, and get instant explanations.
          </p>
        </div>
      </div>
    </section>
  );
}
