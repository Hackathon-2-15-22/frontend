import React from "react";
import { useNavigate } from "react-router-dom";

const Expense = (props) => {
  const navigate = useNavigate();

  let userFundsLeft = 0;
  if (props.userWealth > 0 && props.totalMoneySpent > 0) {
    userFundsLeft = props.userWealth - props.totalMoneySpent;
  }

  return (
    <>
      <div className="expense">
        <h1>Expense</h1>
        <h3>Your Monthly Budget: $ {props.userWealth}</h3>
        <h3>You Spent: $ {props.totalMoneySpent}</h3>
        <h3>You Have: $ {userFundsLeft}</h3>
        <button onClick={() => navigate("/adjust/spending")}>
          Add Spending
        </button>
      </div>
    </>
  );
};

export default Expense;
