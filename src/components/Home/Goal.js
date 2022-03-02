import React from "react";

const Goal = (props) => {
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
          ${props.goalSavedTotal} out of ${props.userGoalTotal}
        </h2>
        <progress max={100} value={percentage} />
        <button>Adjust Goals</button>
        <h2>{goalMessage()}</h2>
      </div>
    </>
  );
};

export default Goal;
