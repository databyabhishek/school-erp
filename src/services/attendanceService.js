// src/services/attendanceService.js
import { supabase } from '../config/supabase'

export const attendanceService = {
  // Mark attendance
  markAttendance: async (attendanceData) => {
    const { data, error } = await supabase
      .from('attendance')
      .insert([{
        institute_id: attendanceData.instituteId,
        student_id: attendanceData.studentId,
        class_id: attendanceData.classId,
        date: new Date().toISOString().split('T')[0],
        status: attendanceData.status,
        marked_by: attendanceData.markedBy
      }])
      .select()
    return { data, error }
  },

  // Get attendance by date
  getByDate: async (instituteId, date) => {
    const { data, error } = await supabase
      .from('attendance')
      .select(`*, student:students(first_name, last_name, roll_number)`)
      .eq('institute_id', instituteId)
      .eq('date', date)
    return { data, error }
  },

  // Get attendance by student
  getByStudent: async (studentId) => {
    const { data, error } = await supabase
      .from('attendance')
      .select('*')
      .eq('student_id', studentId)
      .order('date', { ascending: false })
    return { data, error }
  }
}