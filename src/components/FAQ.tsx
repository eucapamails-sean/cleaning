'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly can you turn over a property?',
    answer: 'Our standard turnover time is 2–3 hours for most properties. For larger 6–7 bedroom homes, we typically need 3–4 hours. We coordinate with your checkout/check-in schedule to ensure seamless transitions.',
  },
  {
    question: 'Do you bring your own cleaning supplies?',
    answer: 'Yes! We bring all professional-grade, eco-friendly cleaning products and equipment. We can also use specific products you prefer if your property has special requirements (marble counters, specialty flooring, etc.).',
  },
  {
    question: 'What areas in Florida do you serve?',
    answer: 'We primarily serve Davenport, Champions Gate, Reunion, Windsor Hills, Solara Resort, and surrounding communities in the Greater Orlando/Kissimmee area. If you\'re near Disney World, we\'ve got you covered.',
  },
  {
    question: 'How do you handle same-day or emergency cleanings?',
    answer: 'We understand that the vacation rental business can be unpredictable. We offer same-day emergency cleaning service for our existing clients. Just call or text us and we\'ll dispatch a team as quickly as possible.',
  },
  {
    question: 'Can you handle linen and laundry service?',
    answer: 'Absolutely. We offer full linen service including laundering, pressing, and professional staging of all beds and bathrooms. We can also manage your linen inventory and replacements.',
  },
  {
    question: 'Do you provide pool or hot tub cleaning?',
    answer: 'We offer basic pool deck cleaning and tidying as part of our Premium turnover package. For full pool chemical maintenance and servicing, we partner with licensed pool professionals and can coordinate that service for you.',
  },
  {
    question: 'What if I\'m not satisfied with a cleaning?',
    answer: 'We offer a 100% satisfaction guarantee. If any aspect of the cleaning doesn\'t meet your standards, contact us within 24 hours and we\'ll send a team back to address it at no additional charge.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply fill out our quote form or give us a call. We\'ll discuss your property, schedule a walkthrough (in-person or virtual), and provide a custom quote within 24 hours. Most new clients are onboarded within a week.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about our vacation home cleaning services.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
