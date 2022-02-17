import React, { useState } from "react";
import { createGoal } from "../../utility/goalService.js";

let goalName = "";
let goalAmount = 0;

const GoalForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: null,
  });

  const handleChange = (e) => {
    e.target.name === "name"
      ? (goalName = e.target.value)
      : (goalAmount = e.target.value);
    let userGoal = { name: goalName, amount: goalAmount };
    console.log(userGoal.name);
    console.log(userGoal.amount);
    setFormData({
      ...formData,
      name: userGoal.name,
      amount: userGoal.amount,
    });
  };

  const handleSubmit = (e) => {
    console.log("event", e);
    e.preventDefault();
    createGoal(formData);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          autoComplete="off"
          id="name"
          name="name"
          required={true}
          placeholder="Goal to save up for"
          onChange={handleChange}
        />
        <input
          type="number"
          autoComplete="off"
          id="amount"
          name="amount"
          placeholder="amount to save"
          onChange={handleChange}
        />
      </div>
      <button>Next</button>
    </form>
  );
};

export default GoalForm;
