import { CheckCircle, Zap, Eye, Heart, ShieldCheck, MessageCircle } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Lightning-Fast Turnovers',
    description: 'We understand the tight windows between checkout and check-in. Our trained teams deliver spotless results in 2–3 hours.',
  },
  {
    icon: Eye,
    title: 'Detailed 60-Point Checklist',
    description: 'Every clean follows our proven 60-point vacation rental checklist. Nothing gets missed — from ceiling fans to under the beds.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Fully Insured',
    description: 'Full liability coverage and workers\' comp. Your property is protected, and so is your peace of mind.',
  },
  {
    icon: Heart,
    title: 'Vacation Rental Specialists',
    description: 'We\'re not a generic cleaning service. We specialize in vacation homes and understand what guests expect in the Disney area.',
  },
  {
    icon: MessageCircle,
    title: 'Real-Time Communication',
    description: 'Photo confirmations after every clean, instant booking via text or app, and a dedicated account manager for your portfolio.',
  },
  {
    icon: CheckCircle,
    title: '100% Satisfaction Guarantee',
    description: 'If anything isn\'t perfect, we\'ll come back and make it right — free of charge, no questions asked.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              The Cleaning Service Your Vacation Rental Deserves
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Property managers and owners across Davenport, Champions Gate, and Reunion 
              trust us because we deliver consistent, reliable results that keep guests 
              coming back.
            </p>

            <div className="mt-10 space-y-6">
              {reasons.slice(0, 3).map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{reason.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - More Reasons */}
          <div className="space-y-6">
            {reasons.slice(3).map((reason) => (
              <div key={reason.title} className="flex gap-4 bg-gray-50 p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{reason.description}</p>
                </div>
              </div>
            ))}

            {/* Stats Box */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-primary-200 text-sm mt-1">Client Retention Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-primary-200 text-sm mt-1">Average Review Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-primary-200 text-sm mt-1">Properties Serviced</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-primary-200 text-sm mt-1">Emergency Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
