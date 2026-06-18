// src/pages/landing/Demo/Demo.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  User, Briefcase, Phone, MapPin, School, Users, 
  Mail, FileText, CheckCircle, ArrowRight, 
  Shield, Calendar, Clock, Sparkles, Star
} from 'lucide-react'

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    mobile: '',
    location: '',
    schoolName: '',
    studentCount: '',
    email: '',
    needs: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: '',
          designation: '',
          mobile: '',
          location: '',
          schoolName: '',
          studentCount: '',
          email: '',
          needs: ''
        })
      }, 3000)
    }, 2000)
  }

  const inputFields = [
    { 
      name: 'name', 
      label: 'Full Name', 
      icon: <User className="w-5 h-5" />,
      type: 'text',
      placeholder: 'Enter your full name',
      required: true
    },
    { 
      name: 'designation', 
      label: 'Designation', 
      icon: <Briefcase className="w-5 h-5" />,
      type: 'text',
      placeholder: 'e.g., Principal, Administrator',
      required: true
    },
    { 
      name: 'mobile', 
      label: 'Mobile Number', 
      icon: <Phone className="w-5 h-5" />,
      type: 'tel',
      placeholder: 'Enter your mobile number',
      required: true
    },
    { 
      name: 'location', 
      label: 'Location', 
      icon: <MapPin className="w-5 h-5" />,
      type: 'text',
      placeholder: 'Enter your city/state',
      required: true
    },
    { 
      name: 'schoolName', 
      label: 'School Name', 
      icon: <School className="w-5 h-5" />,
      type: 'text',
      placeholder: 'Enter your school name',
      required: true
    },
    { 
      name: 'studentCount', 
      label: 'Number Of Students', 
      icon: <Users className="w-5 h-5" />,
      type: 'number',
      placeholder: 'Enter student strength',
      required: true
    },
    { 
      name: 'email', 
      label: 'Email ID', 
      icon: <Mail className="w-5 h-5" />,
      type: 'email',
      placeholder: 'Enter your email address',
      required: true
    },
    { 
      name: 'needs', 
      label: 'Specify Your Needs', 
      icon: <FileText className="w-5 h-5" />,
      type: 'textarea',
      placeholder: 'Tell us what you need from Shiksha.ai...',
      required: false,
      rows: 4
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                      REGISTER FOR A DEMO
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                    </h1>
                    <p className="text-blue-100 text-sm">
                      Schedule a personalized demo with our expert team
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {inputFields.map((field) => (
                    <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          {field.icon}
                        </div>
                        {field.type === 'textarea' ? (
                          <textarea
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            rows={field.rows || 4}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300 resize-none"
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 border-2 border-blue-500 rounded flex items-center justify-center cursor-pointer hover:bg-blue-50 transition">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-sm text-gray-600">I'm not a robot</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-xs text-gray-400">reCAPTCHA</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Demo Requested Successfully!
                    </>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {isSuccess && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm flex items-center gap-3 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Thank you! Our team will contact you within 24 hours to schedule your demo.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                  <Calendar className="w-10 h-10" />
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  Why Schedule a Demo?
                </h2>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Get a personalized walkthrough of Shiksha.ai's powerful features and see how it can transform your school management.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Live Walkthrough</p>
                      <p className="text-xs text-blue-100">60-minute personalized demo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Expert Consultation</p>
                      <p className="text-xs text-blue-100">Discuss your specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Free Trial Access</p>
                      <p className="text-xs text-blue-100">30-day full access</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold">125K+</div>
                    <div className="text-xs text-blue-100">Schools Worldwide</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold">4.6★</div>
                    <div className="text-xs text-blue-100">Average Rating</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-xs text-blue-100 text-center">
                    📞 +44 (740) 407 4252 &nbsp;|&nbsp; 📧 support@shiksha.ai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Demo