import React, { useState, useEffect } from "react";
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
} from "../../utility/expenseService";


//assests
import { getUser } from "../../utility/auth";
import DailySpendingList from "./DailySpendingList";

const DailySpending = (props) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState(0);
  const [expenses, setExpenses] = useState();
  const [date, setDate] = useState();

  const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      const newExpense = await createExpense({ category:"Groceries", name, amount });
      console.log("newExpense:", newExpense);
      setCategory("Groceries");
      setName("")
      setAmount(0);
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteExpense = async (e, expenseId, onboarding=false) => {
    if (onboarding===true) {e.preventDefault()}
    try {
      await deleteExpense(expenseId);
      setExpenses(expenses.filter((expense) => expense._id !== expenseId));
    } catch (error) {
      throw error;
    }
  };

  const handleRounding = (n) => {
    if (String(n).indexOf('.') > -1) {
      const dollars = String(n).split('.')[0]
      let cents = String(n).split('.')[1]
      console.log(cents)
      if (cents.length < 2) {cents = cents.padEnd(2, '0')} 
      else if (cents.length > 2) {cents = cents.slice(0,2)}
      n = parseFloat(dollars+'.'+cents)
    }
    return n
  }

  useEffect(() => {
    const fetchAllExpenses = async () => {
      let expenseData = await getAllExpenses();
      const userId = await getUser();
      expenseData = expenseData.filter((exp) => exp.name && exp.owner === userId.profile);
      setExpenses(expenseData);
    };
    fetchAllExpenses();
  }, [expenses]);

  return (
    <>
    {expenses?.map((expense) => (
          <DailySpendingList
            key={expense.id}
            expense={expense}
            handleDeleteExpense={handleDeleteExpense}
            handleRounding={handleRounding}
          />
        ))}
      <form className="column" autoComplete="off">

        <div  className="expense-list">
          <label htmlFor="">Add Spending</label>
          <div className="expense-category-form">
            <input
              name="name"
              required
              placeholder="add misc daily spending"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="expense-input">
            <input
              name="amount"
              type="decimal"
              className="expense-amount"
              id="amount"
              placeholder="$ 0.00"
              value={amount===0? "" : amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="expense-input">
            <input
              name="date"
              type="date"
              className="expense-date"
              id="date"
              placeholder={date}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <button type="button" onClick={handleAddExpense} className="grey-plus">+</button>
      </form>
    </>
  );
};

export default DailySpending