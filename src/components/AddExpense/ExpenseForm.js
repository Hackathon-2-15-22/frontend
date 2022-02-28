import React, { useState, useEffect } from "react";
import {
  createExpense,
  getAllExpenses,
  deleteExpense,
} from "../../utility/expenseService";
import ExpenseList from "./ExpenseList";

//assests
import categories from "../../data/catagoryData";
import { getUser } from "../../utility/auth";

const ExpenseForm = (props) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState();

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      const newExpense = await createExpense({ category, amount });
      console.log("newExpense:", newExpense);
      setCategory("");
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
      console.log(cents);
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
      expenseData = expenseData.filter((exp) => exp.owner === userId.profile);
      setExpenses(expenseData);
    };
    fetchAllExpenses();
  }, [expenses]);

  return (
    <>
      {expenses?.map((expense) => (
        <ExpenseList
          expense={expense}
          key={expense._id}
          handleDeleteExpense={handleDeleteExpense}
          handleRounding={handleRounding}
        />
      ))}
      <form className="column" autoComplete="off">
        <div className="expense-list">
          {/* <label htmlFor="">Add Expenses</label> */}
          <div className="expense-category-form">
            <select
              name="category"
              required
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {categories.map((element) => (
                <option key={element.category} value={element.category}>
                  {element.category}
                </option>
              ))}
            </select>
          </div>
          <div className="expense-input">
            <input
              name="amount"
              type="decimal"
              className="expense-amount"
              id="amount"
              placeholder="$ 0.00"
              value={amount === 0 ? 0 : amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="button" onClick={handleAddExpense} className="grey-plus">
          +
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
