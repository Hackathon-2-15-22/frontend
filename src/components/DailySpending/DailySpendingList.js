import React from "react";

const DailySpendingList = ({ expense, handleDeleteExpense }) => {
  let inputStyle = {
    flexDirection: "row",
    alignItems: "center",
  };

  let date = new Date(expense.createdAt);

  return (
    <>
      <div className="adjust">
        <div className="adjust" style={inputStyle}>
          <input
            type="text"
            defaultValue={expense.name}
          ></input>
          <input
            type="text"
            defaultValue={"$" + expense.amount}
          ></input>
          <input
            type="text"
            defaultValue={date.toDateString().slice(4)}
          ></input>
          <button
            className="minus"
            onClick={(e, onboarding) =>
              handleDeleteExpense(e, expense._id, (onboarding = true))
            }
          >
            —
          </button>
        </div>
      </div>
    </>
  );
};

export default DailySpendingList;
