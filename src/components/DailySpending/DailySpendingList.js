import React from "react";
import { Row } from "react-bootstrap";

let inputStyle = {
  flexDirection: "row",
  alignItems: "center",
};

const DailySpendingList = ({ expense, handleDeleteExpense }) => {
  console.log(expense);

  return (
    <>
      <div className="expense-category expense-list">
        <div className="row" style={inputStyle}>
          <input
            className="expense-amount"
            style={{ width: "20vw" }}
            type="text"
            value={expense.name}
          ></input>
          <input
            className="expense-amount"
            style={{ width: "10vw" }}
            type="text"
            value={"$" + expense.amount}
          ></input>
          <input
            className="expense-amount"
            style={{ width: "13vw" }}
            type="text"
            value={expense.timestamp}
          ></input>
          <button onClick={() => handleDeleteExpense(expense._id)}>-</button>
        </div>
      </div>
    </>
  );
};

export default DailySpendingList;
