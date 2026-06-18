// src/services/authService.js
import { supabase } from '../config/supabase'

export const authService = {
  // Login with email and password
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Get current user with profile
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) return { user: null, error }

    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select('*, institute:institutes(*)')
      .eq('id', user.id)
      .single()

    return { user: { ...user, profile }, error: profileError }
  },

  // Logout
  logout: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }
}