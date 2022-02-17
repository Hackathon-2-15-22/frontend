import React, { useState } from "react";
import { getAllExpenses } from "../../utility/expeneService";
import { getAllIncomes } from "../../utility/incomeService";
import { getUser } from "../../utility/auth";

const Expense = () => {
  let moneySpent = 0;
  let wealth = 0;

  const [userExpenses, setUserExpenses] = useState([]);
  const [userWealth, setUserWealth] = useState();
  const [userFundsLeft, setUserFundsLeft] = useState();

  const calculateExpenses = async () => {
    try {
      const expenseData = await getAllExpenses();
      const userId = await getUser();
      expenseData.forEach((exp) => {
        if (exp.owner === userId.profile) {
          moneySpent += exp.amount;
        }
      });
      setUserExpenses(moneySpent);
    } catch (error) {
      throw error;
    }
  };
  const calculateIncomes = async () => {
    try {
      const incomeData = await getAllIncomes();
      const userId = await getUser();
      incomeData.forEach((inc) => {
        if (inc.owner === userId.profile) {
          wealth += inc.amount;
        }
      });
      setUserWealth(wealth);
      setUserFundsLeft(userWealth-userExpenses)
    } catch (error) {
      throw error;
    }
  };

  calculateExpenses();
  calculateIncomes();

  return (
    <>
      <div className="expense">
        <h1>Expense</h1>
        <h3>Your Monthly Budget: ${userWealth}</h3>
        <h3>You Spent: ${userExpenses}</h3>
        <h3>You Have: ${userFundsLeft}</h3>
        <button>Add Spending</button>
      </div>
    </>
  );
};

export default Expense;
