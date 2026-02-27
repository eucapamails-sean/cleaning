import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Property Manager, 12 Homes',
    location: 'Champions Gate',
    quote: 'Sunshine Clean transformed my operation. Turnovers that used to stress me out are now completely hands-off. My guest reviews went from 4.3 to 4.9 stars within two months.',
    rating: 5,
  },
  {
    name: 'David & Karen L.',
    role: 'Vacation Home Owners',
    location: 'Reunion Resort',
    quote: 'We live out of state and trust Sunshine Clean completely with our 6-bedroom vacation home. The photo confirmations give us total peace of mind. Best cleaning service we\'ve ever used.',
    rating: 5,
  },
  {
    name: 'Mike R.',
    role: 'Airbnb Superhost, 8 Properties',
    location: 'Davenport',
    quote: 'I\'ve tried 4 different cleaning companies. Sunshine Clean is the only one that consistently delivers. They\'re fast, thorough, and their communication is incredible. My Superhost status is thanks to them.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Trusted by Property Managers Across Davenport
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don&apos;t just take our word for it — hear from the property managers and owners who rely on us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative"
            >
              <Quote className="w-10 h-10 text-primary-200 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
                <div className="text-sm text-primary-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
