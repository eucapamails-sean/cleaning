import { MessageSquare, ClipboardList, Sparkles, Camera } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Request a Quote',
    description: 'Tell us about your property — size, number of bedrooms, and how often you need service. We\'ll respond within the hour.',
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Customized Plan',
    description: 'We create a cleaning plan tailored to your property and guest schedule. You approve the checklist and pricing.',
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'We Clean',
    description: 'Our trained team arrives on schedule and follows your customized 60-point checklist to deliver a spotless clean.',
  },
  {
    step: '04',
    icon: Camera,
    title: 'Photo Confirmation',
    description: 'You receive photos of every room when we\'re done. Review from anywhere, and rest easy knowing your property is guest-ready.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Getting Started Is Easy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From first call to spotless property — we make the process simple and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary-200" />
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600 text-white mb-5">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">Step {item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
