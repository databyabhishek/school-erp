// src/services/feeService.js
import { supabase } from '../config/supabase'

export const feeService = {
  // Create fee entry
  create: async (feeData) => {
    const { data, error } = await supabase
      .from('fees')
      .insert([{
        institute_id: feeData.instituteId,
        student_id: feeData.studentId,
        amount: feeData.amount,
        due_date: feeData.dueDate,
        status: feeData.status || 'pending',
        created_by: feeData.createdBy
      }])
      .select()
    return { data, error }
  },

  // Get fees by student
  getByStudent: async (studentId) => {
    const { data, error } = await supabase
      .from('fees')
      .select('*')
      .eq('student_id', studentId)
      .order('due_date', { ascending: true })
    return { data, error }
  },

  // Mark fee as paid
  markAsPaid: async (id, paymentData) => {
    const { data, error } = await supabase
      .from('fees')
      .update({
        status: 'paid',
        paid_date: new Date().toISOString().split('T')[0],
        payment_method: paymentData.paymentMethod,
        transaction_id: paymentData.transactionId
      })
      .eq('id', id)
      .select()
    return { data, error }
  }
}