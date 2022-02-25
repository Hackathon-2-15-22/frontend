import React from "react";

const DailySpendingList = ({ expense, handleDeleteExpense }) => {
  return (
    <>
      <div className="expense-list column">
        <div className="row">
          <input
            type="text"
            value={expense.name }
          ></input>
          <input
            type="text"
            value={expense.amount }
          ></input>
          <input
            type="date"
            value={expense.timestamp }
          ></input>
          <button onClick={() => handleDeleteExpense(expense._id)}>-</button>
        </div>
      </div>
    </>
    
  );
};

export default DailySpendingList;
