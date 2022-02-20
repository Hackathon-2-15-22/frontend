import React from "react";

const ExpenseList = ({ expense, handleDeleteExpense }) => {
  return (
    <>
      <div className="expense-list column">
        <div className="row">
          <input
            TYPE="text"
            value={expense.category + "   " + expense.amount}
          ></input>
          <button onClick={() => handleDeleteExpense(expense._id)}>-</button>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
