import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
} from "../../utility/expenseService";

//assests
import { getUser } from "../../utility/auth";
import DailySpendingList from "./DailySpendingList";

const DailySpending = (props) => {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState(0);
  const [expenses, setExpenses] = useState();
  const [click, setClick] = useState(1)

  const current = new Date();
  const currentDate = current.toDateString().slice(4);

  const navigator = useNavigate('/home')
  const backToHome = async (e) => {
    navigator('/home')
  }

  const handleAddExpense = async (e) => {
    e.preventDefault();
    setClick(click+1)
    try {
      const newExpense = await createExpense({
        category: "Daily Spending",
        name,
        amount,
      });
      setName("");
      setAmount(0);
    } catch (error) {
      throw error;
    }
  };
  const handleDeleteExpense = async (e, expenseId, onboarding = false) => {
    if (onboarding === true) {
      e.preventDefault();
    }
    try {
      await deleteExpense(expenseId);
      setExpenses(expenses.filter((expense) => expense._id !== expenseId));
    } catch (error) {
      throw error;
    }
  };

  const handleRounding = (n) => {
    if (String(n).indexOf(".") > -1) {
      const dollars = String(n).split(".")[0];
      let cents = String(n).split(".")[1];
      if (cents.length < 2) {
        cents = cents.padEnd(2, "0");
      } else if (cents.length > 2) {
        cents = cents.slice(0, 2);
      }
      n = parseFloat(dollars + "." + cents);
    }
    return n;
  };

  useEffect(() => {
    const fetchAllExpenses = async () => {
      let expenseData = await getAllExpenses();
      const userId = await getUser();
      expenseData = expenseData.filter(
        (exp) => exp.name && exp.owner === userId.profile
      );
      setExpenses(expenseData);
    };
    fetchAllExpenses();
  }, [click]);

  return (
    <>
      {expenses?.map((expense) => (
        <DailySpendingList
          key={expense._id}
          expense={expense}
          handleDeleteExpense={handleDeleteExpense}
          handleRounding={handleRounding}
        />
      ))}
      <form className="adjust" autoComplete="off">
        <div className="row">
          <input
            name="name"
            required
            placeholder="add misc daily spending"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="cash"
            name="amount"
            type="decimal"
            id="amount"
            placeholder="$ 0.00"
            value={amount === 0 ? "" : amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <input
            name="date"
            type="text"
            id="date"
            placeholder={currentDate}
            defaultValue={currentDate}
          />

          <button type="button" onClick={handleAddExpense} className="minus">
            +
          </button>
        </div>

        <button 
          type="submit" 
          className="submit"
          onClick={backToHome}
        >
          Back to Home
        </button>
      </form>
    </>
  );
};

export default DailySpending;
