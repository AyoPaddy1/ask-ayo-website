export function Mission() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500 via-teal-600 to-yellow-500 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-block mb-8">
          <span className="bg-white text-teal-600 px-6 py-3 rounded-full text-sm transform -rotate-2 inline-block shadow-xl border-4 border-teal-700 font-semibold">
            Our Mission 🎯
          </span>
        </div>
        
        <h2 className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold">
          Financial literacy shouldn't <br />
          <span className="relative inline-block">
            <span className="relative z-10">require learning</span>
            <div className="absolute inset-0 bg-yellow-400 -skew-y-2 opacity-50"></div>
          </span>{' '}
          <br />
          a new language.
        </h2>
        
        <p className="text-white text-2xl sm:text-3xl mb-6">
          We translate Wall Street into words you actually use.
        </p>
        
        <div className="inline-block bg-white rounded-2xl px-8 py-4 transform rotate-1 shadow-2xl border-4 border-yellow-400">
          <p className="text-gray-900 text-xl italic">
            Because "basis points" is just <br />
            <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">percentages with attitude</span>. 💅
          </p>
        </div>
      </div>
    </section>
  );
}
