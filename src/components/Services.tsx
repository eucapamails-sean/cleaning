import { Home, RotateCcw, CalendarCheck, Paintbrush, SprayCan, Bed } from 'lucide-react'

const services = [
  {
    icon: RotateCcw,
    title: 'Turnover Cleaning',
    description: 'Fast, thorough cleaning between guests. We ensure your property is guest-ready with our detailed checklist — every surface, every time.',
    popular: true,
  },
  {
    icon: Home,
    title: 'Deep Cleaning',
    description: 'Comprehensive deep clean for seasonal refreshes or new property onboarding. Baseboards, vents, behind appliances — everything.',
  },
  {
    icon: Bed,
    title: 'Linen Service',
    description: 'Professional laundering and staging of all linens and towels. Crisp, fresh bedding that makes a 5-star first impression.',
  },
  {
    icon: CalendarCheck,
    title: 'Recurring Maintenance',
    description: 'Regular scheduled cleanings to keep your vacation home in top condition year-round. Weekly, bi-weekly, or monthly plans.',
  },
  {
    icon: SprayCan,
    title: 'Carpet & Upholstery',
    description: 'Professional steam cleaning for carpets, couches, and upholstered furniture. Remove stains and odors between seasons.',
  },
  {
    icon: Paintbrush,
    title: 'Post-Construction',
    description: 'Thorough cleanup after renovations or repairs. Dust, debris, and construction residue removed so your property is guest-ready.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Everything Your Vacation Home Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From quick turnovers to deep seasonal cleans, we offer comprehensive cleaning solutions 
            designed specifically for vacation rental properties in the Davenport and Greater Orlando area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                service.popular ? 'border-primary-200 ring-2 ring-primary-100' : 'border-gray-100'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
