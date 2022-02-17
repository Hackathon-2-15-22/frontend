import React, { useState, useEffect } from "react";
import {
  createExpense,
  getAllExpenses,
  deleteExpense,
} from "../../utility/expenseService";
import ExpenseList from "./ExpenseList";

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

  const handleDeleteExpense = async (expenseId) => {
    try {
      await deleteExpense(expenseId);
      setExpenses(expenses.filter((expense) => expense._id !== expenseId));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const fetchAllExpenses = async () => {
      const expenseData = await getAllExpenses();
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
        />
      ))}
      <form className="column" autoComplete="off">
        <div className="">
          <label htmlFor="">Add Expenses</label>
          <div className="category-select">
            <select
              name="category"
              required
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">--Choose a Category--</option>
              <option value="Housing">Housing</option>
              <option value="Transportation">Transportation</option>
              <option value="Travel">Travel</option>
              <option value="Groceries">Groceries</option>
              <option value="Dining Out">Dining Out</option>
              <option value="Utilities">Utilities</option>
              <option value="Cell Phone">Cell Phone</option>
              <option value="Pet Food and Care">Pet Food and Care</option>
              <option value="Pet Insurance">Pet Insurance</option>
              <option value="Clothing and Personal Upkeep">
                Clothing and Personal Upkeep
              </option>
              <option value="Health Insurance">Health Insurance</option>
              <option value="Memberships and Subscriptions">
                Memberships and Subscriptions
              </option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Homeowners Insurance">Homeowners Insurance</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Student Loans">Student Loans</option>
              <option value="Credit Card Debt">Credit Card Debt</option>
              <option value="Retirement">Retirement</option>
              <option value="Emergency Fund">Emergency Fund</option>
              <option value="Large Purchases">Large Purchases</option>
              <option value="Goals">Goals</option>
            </select>
          </div>
          <div className="expense-input">
            <input
              name="amount"
              type="number"
              id="amount"
              placeholder="$0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={handleAddExpense} className="add-btn">
            <span>Add Expense</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
