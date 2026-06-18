// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '../services/authService'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      const { user, error } = await authService.getCurrentUser()
      if (!error && user) {
        setUser(user)
      }
      setLoading(false)
    }
    loadUser()
  }, [])

  const login = async (email, password) => {
    const { data, error } = await authService.login(email, password)
    if (error) throw error
    
    const { user: userData } = await authService.getCurrentUser()
    setUser(userData)
    return data
  }

  const logout = async () => {
    const { error } = await authService.logout()
    if (error) throw error
    setUser(null)
  }

  const value = { user, loading, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}