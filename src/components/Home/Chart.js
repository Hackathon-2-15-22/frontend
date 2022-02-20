import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

//assests
import categories from "../../data/catagoryData";
import { getUser } from "../../utility/auth";
import { getAllExpenses } from "../../utility/expenseService";

const Chart = (props) => {
  let expenseTotal = 0;
  let calculatedData= []


  const [allUserExpenseData, setAllUserExpenseData] = useState();

  const getAllUsersExpenses = async () => {
    try {
      let allExpenses = await getAllExpenses();
      const userId = await getUser();
      allExpenses = allExpenses.filter((exp) => exp.owner === userId.profile);
      console.log(allExpenses);
      setAllUserExpenseData(allExpenses);
    } catch (error) {
      throw error;
    }
  };

  for (let ele in allUserExpenseData) {
    expenseTotal += allUserExpenseData[ele].amount;
  }

  // const calculateData = 
  //   allUserExpenseData.map(ele =>{
  //       value = (ele.amount/expenseTotal)*100
  //       color = categories[ele.category]
  // })

  for (let i in allUserExpenseData){
    let col = categories.find(cat => cat.category===allUserExpenseData[i].category )
    calculatedData[i]={
      value: Math.floor((allUserExpenseData[i].amount/expenseTotal)*100), 
      color: col.color
  }
  }

  useEffect(() => {
    getAllUsersExpenses();
  }, []);

  return (
    <>
   
      <div className="chart">
        <h1>Your Spendings</h1>
        <PieChart
          animate
          animationDuration={1000}
          onMouseOver
          data={calculatedData}
          label={({ dataEntry }) => dataEntry.title}
          // label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          />
        <h3>Category</h3>
        <h3>Category</h3>
        <h3>Category</h3>
      </div>

      </>
  );
};

export default Chart;
