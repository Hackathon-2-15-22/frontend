import React from "react";

const ExpenseList = ({ expense, handleDeleteExpense }) => {

  return (
    <>
      <div className="expense-list">
        <div className="expense-top row">
          <div className="expense-category">{expense.category}</div>
          <button onClick={() => handleDeleteExpense(expense._id)}
            className="minus"
          >—</button>
        </div>
        <div className="expense-amount row">
          {`$ ${expense.amount.toFixed(2)}`}
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
