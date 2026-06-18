// src/pages/Dashboard.jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Users, BookOpen, Calendar, DollarSign } from 'lucide-react'

const Dashboard = () => {
  const { user, loading, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login')
    }
  }, [user, loading, navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏫</span>
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {user?.profile?.full_name || user?.email}
            </span>
            <button
              onClick={() => {
                logout()
                navigate('/login')
              }}
              className="text-sm text-red-600 hover:text-red-700 font-medium hover:underline"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back, {user?.profile?.full_name || user?.email}!
          </h2>
          <p className="text-gray-600">
            {user?.profile?.institute?.name || 'Your School'} Dashboard
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Role: <span className="font-medium capitalize">{user?.profile?.role || 'User'}</span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Students</p>
                <p className="text-3xl font-bold text-blue-600">0</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Teachers</p>
                <p className="text-3xl font-bold text-green-600">0</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Present Today</p>
                <p className="text-3xl font-bold text-purple-600">0</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Revenue</p>
                <p className="text-3xl font-bold text-orange-600">$0</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* User Info Card */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Your Profile</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-500">Full Name</p>
              <p className="font-medium">{user?.profile?.full_name || 'Not set'}</p>
            </div>
            <div>
              <p className="text-gray-500">Role</p>
              <p className="font-medium capitalize">{user?.profile?.role || 'User'}</p>
            </div>
            <div>
              <p className="text-gray-500">Institute</p>
              <p className="font-medium">{user?.profile?.institute?.name || 'Not assigned'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard