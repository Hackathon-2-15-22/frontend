import React, { useState } from "react"
import { createExpense } from "../../utility/expeneService"
import { useNavigate } from "react-router-dom"
import ExpenseForm from "../../components/AddExpense/ExpenseForm"

const Expenses = () => {
  


  return (
    <>
    <div className="expenses">
      <h1>Monthly Expenses</h1>
      <ExpenseForm />
      
    </div>
    </>
  )
}

export default Expenses