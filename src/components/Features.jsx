// src/components/Features.jsx
import { Shield, Cpu, TrendingUp, Lock, Globe, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: '99.8% User Satisfaction',
      description: 'Average revenue growth for per successful implementation'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: '100% Free Forever',
      description: 'Instant Insights with Limitless Scale'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Best UI/UX Designed',
      description: 'By HCI experts, most customizable software'
    }
  ]

  const whyChoose = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: 'Innovation at our core',
      description: 'Pioneering integration of next-generation technologies redefining educational administration worldwide.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: 'Simplifying complexity',
      description: 'Infographics & animations distill complex academic data into intuitive visuals.'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Empowering institutional growth',
      description: 'Automated workflows, real-time analytics, and streamlined communication.'
    }
  ]

  const securityFeatures = [
    'GDPR, CCPA, UK Cyber Essentials & ISO 27001 controls',
    'AES-256 encryption at rest & in transit',
    '99.9% uptime SLA + daily off-site backups',
    '7 global data centers (US-East, US-West, London, Frankfurt, Mumbai, Singapore, Sydney)'
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Us?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            eSkooly is a revolution in education management
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Fortified Security</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Your data is safer here than on-premise
              </h3>
              <ul className="space-y-2">
                {securityFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Lock className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="text-4xl font-bold">99.9%</div>
                <p className="text-sm opacity-80">Uptime SLA</p>
                <div className="mt-4 flex justify-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>7 Global Data Centers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features