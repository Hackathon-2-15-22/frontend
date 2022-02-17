import React, { useState } from "react"
import { createExpense } from "../../utility/expeneService"
import { useNavigate } from "react-router-dom"
import ExpenseForm from "./ExpenseForm"

const AddExpense = () => {
  const navigate = useNavigate()
  const [expense, setExpense] = useState('')

  const formData = {
    expense: expense,
  }

  const handleAddExpense = async (e) => {
    e.preventDefault()
    try {
      const newExpense = await createExpense(formData)
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  return (
    <>
    <div className="add-expense">
      <h1>Expense</h1>
      <ExpenseForm 
        expense={expense}
        setExpense={setExpense}
        handleAddExpense={handleAddExpense}
      />
    </div>
    </>
  )
}

export default AddExpense