import { Star, Shield, Clock, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-40" />

      <div className="relative container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary-100">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">Rated 4.9/5 by 200+ property managers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Spotless Vacation Homes,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                5-Star Reviews
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Professional turnover cleaning for vacation rentals in Davenport, FL. 
              We help property managers and owners near Disney World keep guests happy 
              and reviews glowing — every single stay.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="tel:+18631234567" className="btn-secondary">
                Call (863) 555-0123
              </a>
            </div>

            {/* Quick Trust Points */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-600" />
                <span className="text-sm font-medium text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-600" />
                <span className="text-sm font-medium text-gray-700">Same-Day Turnovers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent-600" />
                <span className="text-sm font-medium text-gray-700">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 via-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 bg-white/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Sparkles className="w-12 h-12 text-primary-600" />
                  </div>
                  <p className="text-primary-800 font-semibold text-lg">Sparkling Clean, Every Time</p>
                  <p className="text-primary-600 text-sm">Trusted by 200+ properties in the Davenport area</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">Turnovers / month</div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-sm font-semibold text-gray-800">4.9 Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  )
}
