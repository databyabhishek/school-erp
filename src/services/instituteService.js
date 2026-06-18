// src/services/instituteService.js
import { supabase } from '../config/supabase'

export const instituteService = {
  // Get institute stats
  getStats: async (instituteId) => {
    // Get total students
    const { count: studentCount } = await supabase
      .from('students')
      .select('*', { count: 'exact', head: true })
      .eq('institute_id', instituteId)

    // Get total teachers
    const { count: teacherCount } = await supabase
      .from('teachers')
      .select('*', { count: 'exact', head: true })
      .eq('institute_id', instituteId)

    // Get today's attendance
    const { count: presentCount } = await supabase
      .from('attendance')
      .select('*', { count: 'exact', head: true })
      .eq('institute_id', instituteId)
      .eq('date', new Date().toISOString().split('T')[0])
      .eq('status', 'present')

    return {
      studentCount: studentCount || 0,
      teacherCount: teacherCount || 0,
      presentCount: presentCount || 0
    }
  }
}