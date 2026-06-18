// src/config/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug: Check if keys are loaded (remove in production)
console.log('Supabase URL:', supabaseUrl ? '✅ Loaded' : '❌ Missing')
console.log('Supabase Key:', supabaseAnonKey ? '✅ Loaded' : '❌ Missing')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Supabase credentials missing! Check your .env file')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})