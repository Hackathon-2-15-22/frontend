import React from "react";
import { useNavigate } from "react-router-dom";

const Expense = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="expense">
        <h1>Expense</h1>
        <h3>Your Monthly Budget: $ {props.userWealth}</h3>
        <h3>You Spent: $ {props.userExpenses}</h3>
        <h3>You Have: $ {props.userFundsLeft}</h3>
        <button onClick={() => navigate("/adjust/spending")}>
          Add Spending
        </button>
      </div>
    </>
  );
};

export default Expense;
