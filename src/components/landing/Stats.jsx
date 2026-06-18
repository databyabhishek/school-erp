// src/components/landing/Stats.jsx
import { Users, Building2, Star, Award } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: '125,000+',
      label: 'Schools Worldwide'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      value: '31,857+',
      label: 'Trusted Schools'
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      value: '4.6',
      label: 'Average Rating'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      value: '99.8%',
      label: 'User Satisfaction'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800">{stat.value}</div>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats