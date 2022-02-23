
import React, { useState } from "react";

import { getAllExpenses } from "../../utility/expenseService";
import { getAllGoals } from "../../utility/goalService";
import { getUser } from "../../utility/auth";

const Goal = (props) => {
  let goalTotal = 0;
  let towardGoal = 0;

  const [userGoalTotal, setUserGoalTotal] = useState(0);
  const [userSavedForGoal, setUserSavedForGoal] = useState(0);

  const calculateGoalTotal = async () => {
    try {
      const goalData = await getAllGoals();
      const userId = await getUser();
      goalData.forEach((g) => {
        if (g.owner === userId.profile) {
          goalTotal += g.amount;
        }
      });
      setUserGoalTotal(goalTotal);
    } catch (error) {
      throw error;
    }
  };

  const calculateSavedTowardGoal = async () => {
    try {
      const expenseData = await getAllExpenses();
      const userId = await getUser();
      expenseData.forEach((exp) => {
        if (exp.owner === userId.profile && exp.category === "Goals") {
          towardGoal += exp.amount;
        }
      });
      setUserSavedForGoal(towardGoal);
    } catch (error) {
      throw error;
    }
  };

  calculateSavedTowardGoal();
  calculateGoalTotal();

  let percentage = (userSavedForGoal / userGoalTotal) * 100;

  return (
    <>
      <div className="goal">
        <h1>Goal</h1>
        <h2>${userSavedForGoal} out of ${userGoalTotal}</h2>
        <progress max={100} value={percentage} />
        <button>Adjust Goals</button>
      </div>
    </>
  );
};

export default Goal;
