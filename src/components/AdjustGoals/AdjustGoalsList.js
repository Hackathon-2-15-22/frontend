import React from "react";

const AdjustGoalsList = ({ goal, handleDeleteGoal }) => {
  // let inputStyle = {
  //   flexDirection: "row",
  //   alignItems: "center",
  // };

  return (
    <>
      <div className="adjust">
        <div className="row">
          <input
            className=""
            type="text"
            defaultValue={goal.name}
          ></input>
          <input
            className=""
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
