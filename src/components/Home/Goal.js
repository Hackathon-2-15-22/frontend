import React, { useState } from "react";

import { getAllExpenses } from "../../utility/expenseService";
import { getAllGoals } from "../../utility/goalService";
import { getUser } from "../../utility/auth";

const Goal = (props) => {
  let goalTotal = 0;
  let towardGoal = 0;
  let percentage = 0

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
if (userSavedForGoal>0 && userGoalTotal>0){
  percentage = (userSavedForGoal / userGoalTotal) * 100;
 }
  const goalMessage = () => {
    if (percentage <= 25) {
      return "This is a good start!";
    } else if (percentage > 25 && percentage <= 50) {
      return "You're almost halfway there!";
    } else if (percentage > 50 && percentage <= 75) {
      return "You're more than halfway there!";
    } else if (percentage > 75 && percentage < 100) {
      return "You're almost there!";
    } else if (percentage >= 100) {
      return "Congrats! You have reached your goal!";
    }
  };
  return (
    <>
      <div className="">
        <h1>Goal</h1>
        <div className="goals">
          <span className="num">${userSavedForGoal} / ${userGoalTotal}</span>
        </div>
        <progress max={100} value={percentage} />
        <div>{goalMessage()}</div>
        <button>Adjust Goals</button>
      </div>
    </>
  );
};

export default Goal;
