import { Shield, Award, Clock, Users } from 'lucide-react'

const stats = [
  { icon: Users, value: '200+', label: 'Happy Property Managers' },
  { icon: Award, value: '5,000+', label: 'Turnovers Completed' },
  { icon: Clock, value: '3hr', label: 'Average Turnover Time' },
  { icon: Shield, value: '100%', label: 'Satisfaction Guarantee' },
]

export default function TrustBar() {
  return (
    <section className="relative -mt-2 z-10">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-8 px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 mb-3">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
