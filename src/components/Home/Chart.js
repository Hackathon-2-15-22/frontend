import React, { Suspense, useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

//assests
import categories from "../../data/catagoryData";
import { getUser } from "../../utility/auth";
import { getAllExpenses } from "../../utility/expenseService";

const Chart = (props) => {
  let expenseTotal = 0;
  let calculatedData = [];
  let counter = 0;

  const [allUserExpenseData, setAllUserExpenseData] = useState();
  const [mergedExpenseData, setMergedExpenseData] = useState();

  const getAllUsersExpenses = async () => {
    try {
      let allExpenses = await getAllExpenses();
      const userId = await getUser();
      allExpenses = allExpenses.filter((exp) => exp.owner === userId.profile);

      let merge = allExpenses.reduce((expense, item) => {
        expense[item.category] = (expense[item.category] || 0) + item.amount;
        return expense;
      }, {});

      setMergedExpenseData(merge);
      setAllUserExpenseData(allExpenses);

    } catch (error) {
      throw error;
    }
  };

  if (allUserExpenseData){
  for (let ele in allUserExpenseData) {
    expenseTotal += allUserExpenseData[ele].amount;
  }

  for (let i in mergedExpenseData) {
    let col = categories.find((cat) => cat.category === i);
    calculatedData[counter] = {
      id: 1 + mergedExpenseData[i],
      title: i,
      value: Math.floor((mergedExpenseData[i] / expenseTotal) * 100),
      color: col.color,
    };
    counter += 1;
  }
}
  useEffect(() => {
    getAllUsersExpenses();
  }, []);

  const defaultLabelStyle = {
    fontSize: "4px",
    fontFamily: "sans-serif",
  };

  const expensesList = calculatedData.map((expenseData) => (
        <tr key={expenseData.id}>
          <td className="color"
            style={{ background: expenseData.color }}>
            &emsp;
          </td>
          <td className="category">{expenseData.title}</td>
          <td className="amount">{`$${mergedExpenseData[expenseData.title]}`}</td>
        </tr>
  ));

  return (
    <>
      <div id="chart1" className="chart">
        <h1>Your Spendings</h1>
        <PieChart
          animate
          animationDuration={1000}
          onMouseOver
          data={calculatedData}
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
          labelStyle={defaultLabelStyle}
          labelPosition={85}
        />

        <table>
          <tbody>{expensesList}</tbody>
        </table>

      </div>
    </>
  );
} 

export default Chart;
