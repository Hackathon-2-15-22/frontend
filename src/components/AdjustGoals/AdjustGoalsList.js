import React from "react";

const AdjustGoalsList = ({ goal, handleDeleteGoal }) => {
  let inputStyle = {
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <>
      <div className="expense-category expense-list">
        <div className="row" style={inputStyle}>
          <input
            className="expense-amount"
            style={{ width: "20vw" }}
            type="text"
            defaultValue={goal.name}
          ></input>
          <input
            className="expense-amount"
            style={{ width: "10vw" }}
            type="text"
            defaultValue={"$" + goal.amount}
          ></input>
          <button
            className="minus"
            onClick={(e, onboarding) =>
              handleDeleteGoal(e, goal._id, (onboarding = true))
            }
          >
            —
          </button>
        </div>
      </div>
    </>
  );
};

export default AdjustGoalsList;
