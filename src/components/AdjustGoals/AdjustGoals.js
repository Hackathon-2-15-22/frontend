import React, { useState, useEffect } from "react";

//assests
import AdjustGoalsList from "./AdjustGoalsList";
import { createGoal, deleteGoal, getAllGoals } from "../../utility/goalService";

const AdjustGoals = (props) => {

  const [amount, setAmount] = useState(0);
  const [name, setName] = useState(0);
  const [goals, setGoals] = useState();
  const [click, setClick] = useState(1);

  const handleAddGoal = async (e) => {
    e.preventDefault();
    setClick(click + 1);
    try {
      const newGoal = await createGoal( { name, amount, } );
      setName("");
      setAmount(0);
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteGoal = async (e, goalId, onboarding = false) => {
    if (onboarding === true) {
      e.preventDefault();
    }
    try {
      await deleteGoal(goalId);
      setGoals(goals.filter((goal) => goal._id !== goalId));
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
    const fetchAllGoals = async () => {
      let goalData = await getAllGoals();
      goalData = goalData.filter((g) => g.name && g.owner === props.user.profile);
      setGoals(goalData);
    };
    fetchAllGoals();
  }, [click]);

  return (
    <>
      {goals?.map((goal) => (
        <AdjustGoalsList
          key={goal._id}
          goal={goal}
          handleDeleteGoal={handleDeleteGoal}
          handleRounding={handleRounding}
        />
      ))}
      <form className="column" autoComplete="off">
        <div className="expense-list">
          <label key="label1" htmlFor="">
            Add Goal
          </label>

          <div className="" style={{ flexDirection: "row" }}>
            <input
              className="expense-amount"
              style={{ width: "20vw" }}
              name="name"
              required
              placeholder="add misc daily spending"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="expense-amount"
              style={{ width: "13vw" }}
              name="amount"
              type="decimal"
              id="amount"
              placeholder="$ 0.00"
              value={amount === 0 ? "" : amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="button" onClick={handleAddGoal} className="grey-plus">
          +
        </button>
      </form>
    </>
  );
};

export default AdjustGoals;
