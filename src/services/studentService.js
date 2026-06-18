// src/services/studentService.js
import { supabase } from '../config/supabase'

export const studentService = {
  // Get all students in institute
  getAll: async (instituteId) => {
    const { data, error } = await supabase
      .from('students')
      .select(`*, class_info:classes(name, section)`)
      .eq('institute_id', instituteId)
      .order('first_name', { ascending: true })
    return { data, error }
  },

  // Create new student
  create: async (studentData) => {
    const { data, error } = await supabase
      .from('students')
      .insert([{
        institute_id: studentData.instituteId,
        admission_number: studentData.admissionNumber,
        first_name: studentData.firstName,
        last_name: studentData.lastName,
        email: studentData.email,
        phone: studentData.phone,
        class: studentData.class,
        section: studentData.section,
        roll_number: studentData.rollNumber,
        parent_name: studentData.parentName,
        parent_email: studentData.parentEmail,
        parent_phone: studentData.parentPhone
      }])
      .select()
    return { data, error }
  },

  // Update student
  update: async (id, studentData) => {
    const { data, error } = await supabase
      .from('students')
      .update({ ...studentData, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
    return { data, error }
  },

  // Delete student
  delete: async (id) => {
    const { error } = await supabase
      .from('students')
      .delete()
      .eq('id', id)
    return { error }
  }
}