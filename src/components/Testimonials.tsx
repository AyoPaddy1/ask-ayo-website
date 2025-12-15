const testimonials = [
  {
    quote: "I finally understood an earnings call",
    author: "Sarah, 22",
    rotation: "rotate-2"
  },
  {
    quote: "My dad sent me a WSJ article and AYO actually made it make sense",
    author: "Marcus, 19",
    rotation: "-rotate-1"
  },
  {
    quote: "It's like having a smart friend explain it",
    author: "Jamie, 24",
    rotation: "rotate-1"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
            People{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Actually Get It</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C60 3 120 2 180 5C220 7 270 8 298 6" stroke="#14B8A6" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            Now
          </h2>
          <p className="text-gray-600 text-2xl">
            From confused to confident in seconds 🎓
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-teal-50 via-yellow-50 to-teal-50 rounded-3xl p-8 border-4 border-teal-400 relative transform ${testimonial.rotation} hover:rotate-0 transition-all hover:scale-105 shadow-xl`}
            >
              <div className="absolute -top-6 -left-6 bg-yellow-400 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-white font-bold">
                "
              </div>
              <div className="text-gray-900 mb-6 text-xl italic pt-4 leading-relaxed">
                {testimonial.quote}
              </div>
              <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full inline-block border-2 border-teal-200 font-medium">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
