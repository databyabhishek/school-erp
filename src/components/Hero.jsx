// src/components/Hero.jsx
import { Link } from 'react-router-dom'
import { Star, Shield, Users, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
              #1 Globally Ranked | Verified
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Free Online</span> School Management Software
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              You can now manage your school, college, or any educational institution seamlessly with eSkooly — completely free for life, with no limitations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="btn-primary">
                Get Started Today
              </Link>
              <a href="#features" className="btn-outline">
                Learn More
              </a>
            </div>
            
            <div className="flex items-center gap-8 mt-8">
              <div>
                <span className="text-2xl font-bold text-gray-800">31,857+</span>
                <p className="text-sm text-gray-600">Schools Trust Us</p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-800">4.6</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <p className="text-sm text-gray-500">Revenue</p>
              <p className="text-2xl font-bold text-gray-800">$638.87</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <p className="text-sm text-gray-500">Revenue</p>
              <p className="text-2xl font-bold text-gray-800">$4,845.00</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 col-span-2">
              <p className="text-sm text-gray-500">Revenue</p>
              <p className="text-2xl font-bold text-gray-800">$8,221.00</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-indigo-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
              <p className="text-sm opacity-80">Join 125,000+ schools</p>
              <p className="font-bold">and a galaxy of users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero