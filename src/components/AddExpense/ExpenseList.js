import React from "react";

const ExpenseList = ({ expense, handleDeleteExpense }) => {
  return (
    <>
      <div className="expense-list">
        <div className="expense-top row">
          <div className="expense-category">
            {expense.category}
          </div>
          <button
            onClick={(e, onboarding) =>
              handleDeleteExpense(e, expense._id, (onboarding = true))
            }
            className="minus"
          >
            —
          </button>
        </div>
        <div className="expense-amount row">
          {`$ ${expense.amount.toFixed(2)}`}
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
