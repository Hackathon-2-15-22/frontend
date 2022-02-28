import React from "react";

const DailySpendingList = ({ expense, handleDeleteExpense }) => {
  let inputStyle = {
    flexDirection: "row",
    alignItems: "center",
  };

  let date = new Date(expense.createdAt);

  return (
    <>
      <div className="expense-category expense-list">
        <div className="row" style={inputStyle}>
          <input
            className="expense-amount"
            style={{ width: "20vw" }}
            type="text"
            defaultValue={expense.name}
          ></input>
          <input
            className="expense-amount"
            style={{ width: "10vw" }}
            type="text"
            defaultValue={"$" + expense.amount}
          ></input>
          <input
            className="expense-amount"
            style={{ width: "20vw" }}
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
