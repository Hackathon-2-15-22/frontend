import React from "react";


const Expense = (props) => {


  return (
    <>
      <div className="expense">
        <h1>Expense</h1>
        <h3>Your Monthly Budget: $ {props.userWealth}</h3>
        <h3>You Spent: $ {props.userExpenses}</h3>
        <h3>You Have: $ {props.userFundsLeft}</h3>
        <button>Add Spending</button>
      </div>
    </>
  );
};

export default Expense;
