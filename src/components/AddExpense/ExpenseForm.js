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
              {categories.map((element) => (
                <option value={element.category}>{element.category}</option>
              ))}
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
