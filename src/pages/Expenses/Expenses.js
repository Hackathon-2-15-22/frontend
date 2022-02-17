import React from "react"
import ExpenseForm from "../../components/AddExpense/ExpenseForm"

const Expenses = (props) => {
  
  return (
    <>
    <div className="expenses">
      <h1>Monthly Expenses</h1>
      <ExpenseForm />
      <button onClick={()=> props.toggleClick()}>Next</button>
    </div>
    </>
  )
}

export default Expenses