import React from "react"

const Expense = () => {

  return (
    <>
    <div className="expense">
      <h1>Expense</h1>
      <h3>Your Monthly Budget: $(AMOUNT)</h3>
      <h3>You Spent: $(AMOUNT)</h3>
      <h3>You Have: $(AMOUNT)</h3>
      <button>Add Spending</button>
    </div>
    </>
  )
}

export default Expense