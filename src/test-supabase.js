// src/test-supabase.js
import { supabase } from './config/supabase'

const testConnection = async () => {
  console.log('Testing Supabase connection...')
  console.log('URL:', import.meta.env.VITE_SUPABASE_URL)
  
  const { data, error } = await supabase
    .from('institutes')
    .select('*')
    .limit(1)
  
  if (error) {
    console.error('Connection failed:', error.message)
  } else {
    console.log('✅ Connection successful! Data:', data)
  }
}

testConnection()