import React from "react";
import { useNavigate } from "react-router-dom";

const Goal = (props) => {
  const navigate = useNavigate();

  let percentage = 0;

  if (props.goalSavedTotal > 0 && props.userGoalTotal > 0) {
    percentage = (props.goalSavedTotal / props.userGoalTotal) * 100;
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
      <div className="goal">
        <h1>Goal</h1>
        <h2>
          <span className="num">
            ${props.goalSavedTotal} / ${props.userGoalTotal}
          </span>
        </h2>
        <progress max={100} value={percentage} />
        <button  onClick={() => navigate("/adjust/goals")} >Adjust Goals</button>
        <h2 className="text-center">{goalMessage()}</h2>
      </div>
    </>
  );
};

export default Goal;
