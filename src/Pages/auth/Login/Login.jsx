// src/pages/auth/Login/Login.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Mail, Lock, Eye, EyeOff, User, 
  School, Users, GraduationCap, 
  CheckCircle, ArrowRight, Sparkles,
  AlertCircle
} from 'lucide-react'
import { useAuth } from '../../../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const roles = [
    { id: 'admin', label: 'Admin', icon: <User className="w-5 h-5" /> },
    { id: 'employee', label: 'Employee', icon: <Users className="w-5 h-5" /> },
    { id: 'student', label: 'Student', icon: <GraduationCap className="w-5 h-5" /> },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (!formData.email || !formData.password) {
        setError('Please enter both email and password')
        setLoading(false)
        return
      }

      await login(formData.email, formData.password)
      navigate('/dashboard')

    } catch (err) {
      setError(err.message || 'Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50 flex items-center justify-center p-4 py-20">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Back to Home */}
        <div className="lg:col-span-2 mb-2">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Left Side - Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🏫</span>
              <span className="text-2xl font-bold text-blue-600">Shiksha.ai</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Please enter your credentials to access your school dashboard.
            </p>
          </div>

          <div className="relative mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              Welcome Back! <span className="text-3xl">👋</span>
            </h1>
          </div>

          {/* Error Message */}
          {error && (
            <div className="relative mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Role Selection */}
          <div className="relative mb-8">
            <p className="text-sm font-medium text-gray-700 mb-3">You're</p>
            <div className="grid grid-cols-3 gap-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`
                    relative flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 transition-all duration-300
                    ${selectedRole === role.id 
                      ? 'border-blue-600 bg-blue-50 shadow-md scale-105' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }
                  `}
                >
                  <span className={selectedRole === role.id ? 'text-blue-600' : 'text-gray-600'}>
                    {role.icon}
                  </span>
                  <span className={`text-xs font-medium ${selectedRole === role.id ? 'text-blue-600' : 'text-gray-700'}`}>
                    {role.label}
                  </span>
                  {selectedRole === role.id && (
                    <span className="absolute -top-1 -right-1">
                      <CheckCircle className="w-5 h-5 text-blue-600 fill-white" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="relative space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="sr-only"
                  />
                  <div className={`
                    w-5 h-5 rounded-md border-2 transition-all duration-300 flex items-center justify-center
                    ${rememberMe 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'border-gray-300 group-hover:border-blue-400'
                    }
                  `}>
                    {rememberMe && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                </div>
                <span className="text-sm text-gray-700 group-hover:text-blue-600 transition">
                  Remember Me
                </span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline transition">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                <>
                  <span>Login</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>

            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Want to try Shiksha.ai?{' '}
                <Link to="/demo" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition">
                  Request a Demo
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side - Info Panel */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-10 text-white h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-3xl">🏫</span>
                  <span className="text-2xl font-bold">Shiksha.ai</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">
                  Continue Managing!
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Pick up right where you left off. Sign in to the world's favorite fast, easy, and 100% free school management platform.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-white/20 rounded-lg p-2">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">100% Free Forever</p>
                    <p className="text-sm text-blue-100">No hidden charges</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-white/20 rounded-lg p-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">125,000+ Schools</p>
                    <p className="text-sm text-blue-100">Trusted worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-white/20 rounded-lg p-2">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">All-in-One Solution</p>
                    <p className="text-sm text-blue-100">Complete management</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">4.6</div>
                  <div className="text-sm text-blue-100">⭐ Average Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">99.8%</div>
                  <div className="text-sm text-blue-100">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </div>
  )
}

export default Login