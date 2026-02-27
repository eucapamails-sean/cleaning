import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Standard Turnover',
    description: 'Perfect for 2–3 bedroom vacation homes',
    price: 'From $149',
    unit: 'per turnover',
    features: [
      'Full 60-point checklist',
      'Kitchen & bathroom sanitization',
      'Vacuum & mop all floors',
      'Fresh linen staging',
      'Trash removal & restocking',
      'Photo confirmation',
    ],
    popular: false,
    cta: 'Get Quote',
  },
  {
    name: 'Premium Turnover',
    description: 'Ideal for 4–7 bedroom resort homes',
    price: 'From $249',
    unit: 'per turnover',
    features: [
      'Everything in Standard',
      'Extended deep-touch areas',
      'Patio & pool deck sweep',
      'Game room / media room cleaning',
      'Appliance exterior detailing',
      'Priority scheduling',
      'Dedicated team assignment',
    ],
    popular: true,
    cta: 'Get Quote',
  },
  {
    name: 'Property Manager Plan',
    description: 'Volume pricing for 5+ properties',
    price: 'Custom',
    unit: 'monthly plan',
    features: [
      'Everything in Premium',
      'Volume discounts (up to 20% off)',
      'Dedicated account manager',
      'Priority emergency cleans',
      'Monthly quality reports',
      'Inventory management',
      'Customizable checklists',
    ],
    popular: false,
    cta: 'Contact Us',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Transparent Pricing, No Surprises
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every property is unique. Get a custom quote based on your home&apos;s size, 
            layout, and cleaning frequency. Here&apos;s what to expect:
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border flex flex-col ${
                plan.popular
                  ? 'border-primary-300 ring-2 ring-primary-100 scale-105 shadow-xl'
                  : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary-600 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-2">/ {plan.unit}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          All prices are estimates. Final pricing based on property walkthrough or virtual tour. No hidden fees, ever.
        </p>
      </div>
    </section>
  )
}
