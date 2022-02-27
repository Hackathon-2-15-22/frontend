import React, { useEffect } from "react";
import { Row } from "react-bootstrap";


const DailySpendingList = ({ expense, handleDeleteExpense }) => {
  let inputStyle = {
    flexDirection: "row",
    alignItems: "center",
  };

   let date = new Date(expense.createdAt)
  
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
            style={{ width: "20vw" }}
            type="text"
            value={( date.toDateString().slice(4))}
          ></input>
          <button onClick={(e, onboarding) => handleDeleteExpense(e, expense._id, onboarding=true)}
            className="minus"
          >—</button>
        </div>
      </div>
    </>
  );
};

export default DailySpendingList;
