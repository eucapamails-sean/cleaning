import { Phone, Mail, MapPin, ArrowRight, Clock } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-10" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready for Spotless Turnovers?
            </h2>
            <p className="mt-6 text-xl text-primary-100 leading-relaxed">
              Get a free, no-obligation quote for your vacation rental property. 
              We&apos;ll respond within the hour during business hours.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-200" />
                </div>
                <div>
                  <div className="text-primary-200 text-sm">Call or Text</div>
                  <a href="tel:+18631234567" className="text-lg font-semibold hover:text-primary-200 transition-colors">(863) 555-0123</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-200" />
                </div>
                <div>
                  <div className="text-primary-200 text-sm">Email Us</div>
                  <a href="mailto:hello@sunshineclean.com" className="text-lg font-semibold hover:text-primary-200 transition-colors">hello@sunshineclean.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-200" />
                </div>
                <div>
                  <div className="text-primary-200 text-sm">Service Area</div>
                  <div className="text-lg font-semibold">Davenport, FL & Surrounding Areas</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-200" />
                </div>
                <div>
                  <div className="text-primary-200 text-sm">Hours</div>
                  <div className="text-lg font-semibold">Mon–Sun: 7AM – 9PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
            <p className="text-gray-500 mb-6">Fill out the form and we&apos;ll get back to you within the hour.</p>

            <form className="space-y-4" action="#" method="POST">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="(863) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="properties" className="block text-sm font-medium text-gray-700 mb-1">Number of Properties</label>
                <select
                  id="properties"
                  name="properties"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option>1 property</option>
                  <option>2–4 properties</option>
                  <option>5–10 properties</option>
                  <option>10+ properties</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us about your property</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Number of bedrooms, location, current cleaning schedule..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                Get My Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <p className="text-xs text-gray-400 text-center">
                No spam, no obligations. We&apos;ll only use your info to provide your quote.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
