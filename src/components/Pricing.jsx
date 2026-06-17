// src/components/Pricing.jsx
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const Pricing = () => {
  const features = [
    '100% Free Forever',
    'Unlimited Students & Staff',
    'Full Access to All Features',
    'Real-time Analytics',
    'Secure Data Storage',
    '24/7 Customer Support',
    'Regular Updates',
    'No Credit Card Required'
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            With eSkooly, you're not just managing a school — you're building a brighter future for education.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
              <h3 className="text-2xl font-bold">Free Forever Plan</h3>
              <p className="text-blue-100">Complete school management solution</p>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500 ml-2">/ lifetime</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/login" className="btn-primary block text-center">
                Get Started Today
              </Link>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                No credit card required. Start managing your school instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing