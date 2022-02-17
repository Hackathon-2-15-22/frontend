import React from "react"

const ExpenseList = ({ expense, handleDeleteExpense }) => {

  return (
    <>
    <div className="expense-list column">
      <div className="row">
        <h3>{expense.category}</h3>
        <h3>{expense.amount}</h3>
        <button onClick={() => handleDeleteExpense(expense._id)}
        >-</button>
      </div>
    </div>
    </>
  )
}

export default ExpenseList