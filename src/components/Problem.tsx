export function Problem() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Hand-drawn arrow */}
      <svg className="absolute top-10 right-10 w-24 h-24 text-yellow-400 opacity-50 hidden lg:block" viewBox="0 0 100 100" fill="none">
        <path d="M10 50 Q 50 10, 90 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M85 45 L 90 50 L 85 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold">
            <span className="inline-block transform -rotate-1">Wall Street</span>{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Speaks Its Own</span>
              <div className="absolute inset-0 bg-red-200 -skew-y-2 opacity-50"></div>
            </span>{' '}
            <span className="inline-block transform rotate-1">Language</span>
          </h2>
          <p className="text-gray-600 text-xl sm:text-2xl italic">
            It's not you. It's the language barrier. 🤷
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-3xl p-8 border-4 border-red-300 transform md:-rotate-2 hover:rotate-0 transition-all hover:scale-105 relative shadow-lg">
            <div className="text-5xl mb-4">📰</div>
            <h3 className="text-gray-900 mb-3 text-2xl font-bold">Financial Media</h3>
            <p className="text-gray-700 text-lg">
              Uses jargon to sound smart and keep you clicking
            </p>
            <div className="absolute -bottom-2 -right-2 bg-red-400 w-6 h-6 rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-8 border-4 border-yellow-300 transform md:rotate-1 hover:rotate-0 transition-all hover:scale-105 relative shadow-lg">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-gray-900 mb-3 text-2xl font-bold">Companies</h3>
            <p className="text-gray-700 text-lg">
              Hide bad news in complex terms and corporate speak
            </p>
            <div className="absolute -top-2 -right-2 bg-yellow-400 w-6 h-6 rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl p-8 border-4 border-teal-300 transform md:-rotate-1 hover:rotate-0 transition-all hover:scale-105 relative shadow-lg">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-gray-900 mb-3 text-2xl font-bold">"Beginner" Guides</h3>
            <p className="text-gray-700 text-lg">
              Assume you already have an MBA and years of experience
            </p>
            <div className="absolute -bottom-2 -left-2 bg-teal-400 w-6 h-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
