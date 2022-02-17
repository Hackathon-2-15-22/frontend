import React, { useState, useEffect } from "react";

const ExpenseForm = (props) => {
  const [expenseList, setExpenseList] = useState([
    { category: "", amount: "" },
  ]);

  const handleExpenseChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...expenseList];
    list[index][name] = value;
    setExpenseList(list);
  };

  const handleExpenseRemove = (index) => {
    const list = [...expenseList];
    console.log("before remove", list);
    list.splice(index, 1);
    setExpenseList(list);
    console.log("after remove", list);
  };

  const handleExpenseAdd = () => {
    setExpenseList([...expenseList, { category: "", amount: "" }]);
  };

  useEffect(() => {}, [expenseList]);

  return (
    <>
      <form className="expense-form" autoComplete="off">
        <div className="form-field">
          <label htmlFor="add-expense">Add Expenses</label>
          {expenseList.map((singleExpense, index) => (
            <div key={index} className="expenses">
              <div className="category-select">
                <select
                  name="category"
                  required
                  onChange={(e) => handleExpenseChange(e, index)}
                  value={singleExpense.category}
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
                  <option value="Homeowners Insurance">
                    Homeowners Insurance
                  </option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Student Loans">Student Loans</option>
                  <option value="Credit Card Debt">Credit Card Debt</option>
                  <option value="Retirement">Retirement</option>
                  <option value="Emergency Fund">Emergency Fund</option>
                  <option value="Large Purchases">Large Purchases</option>
                  <option value="Goals">Goals</option>
                </select>
                {expenseList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleExpenseRemove(index)}
                    className="remove-btn"
                  >
                    <span>-</span>
                  </button>
                )}
              </div>
              <div className="expense-input">
                <input
                  name="amount"
                  type="number"
                  id="amount"
                  placeholder="$0.00"
                  value={singleExpense.amount}
                  onChange={(e) => handleExpenseChange(e, index)}
                  required
                />
              </div>
              {expenseList.length - 1 === index && expenseList.length < 15 && (
                <button
                  type="button"
                  onClick={handleExpenseAdd}
                  className="add-btn"
                >
                  <span>Add Expense</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
