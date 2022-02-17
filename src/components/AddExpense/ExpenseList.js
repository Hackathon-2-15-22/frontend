import React from "react"

const ExpenseList = ({ expense, handleDeleteExpense }) => {
  return (
    <>
    <div className="expense-list">
    <h1>{expense.category}</h1>
    <h1>{expense.amount}</h1>
    <button onClick={() => handleDeleteExpense(expense._id)}
      >-</button>
    </div>
    </>
  )
}

export default ExpenseList