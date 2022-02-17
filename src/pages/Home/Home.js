import Chart from '../../components/Home/Chart';
import Income from '../../components/Home/Income';
import Goal from '../../components/Home/Goal';
import Expense from '../../components/Home/Expense';

import { getAllExpenses } from "../../utility/expenseService";
import { getAllIncomes } from "../../utility/incomeService";
import { getAllGoals } from "../../utility/goalService";
import { getUser } from "../../utility/auth";
import { useEffect, useState } from 'react';

const Home = ({ user }) => {

  let moneySpent = 0;
  let wealth = 0;
  let goalTotal = 0
  let towardGoal = 0

  const [userExpenses, setUserExpenses] = useState([]);
  const [userWealth, setUserWealth] = useState();
  const [userFundsLeft, setUserFundsLeft] = useState();
  // const [userGoalTotal, setUserGoalTotal] = useState(0);
  // const [userSavedForGoal, setUserSavedForGoal] = useState(0);

  const calculateExpenses = async () => {
    try {
      const expenseData = await getAllExpenses();
      const userId = await getUser();
      expenseData.forEach((exp) => {
        if (exp.owner === userId.profile) {
          moneySpent += exp.amount;
        }
      });
      setUserExpenses(moneySpent);
    } catch (error) {
      throw error;
    }
  };
  
  // const calculateSavedTowardGoal = async () => {
  //   try {
  //     const expenseData = await getAllExpenses();
  //     const userId = await getUser();
  //     expenseData.forEach((exp) => {
  //       if (exp.owner === userId.profile && exp.category === "Goals") {
  //         towardGoal+=exp.amount;
  //       }
  //     });
  //     setUserSavedForGoal(towardGoal);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const calculateGoalTotal = async () => {
  //   try {
  //     const goalData = await getAllGoals();
  //     const userId = await getUser();
  //     goalData.forEach((g) => {
  //       if (g.owner === userId.profile) {
  //         goalTotal += g.amount
  //       }
  //     });
  //     setUserGoalTotal(goalTotal);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const calculateIncomes = async () => {
    try {
      const incomeData = await getAllIncomes();
      const userId = await getUser();
      incomeData.forEach((inc) => {
        if (inc.owner === userId.profile) {
          wealth += inc.amount;
        }
      });
      setUserWealth(wealth);
      setUserFundsLeft(userWealth-userExpenses)
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // calculateSavedTowardGoal()
    calculateIncomes()
    // calculateGoalTotal()
    calculateExpenses()
  },);

  // const date = new Date();
  // const n = date.toDateString();
  // const t = date.toLocaleDateString();


  return (

    <main className="home">
      <h1 className='title text-center'>Your Dashboard</h1>
      <div class="box">
        <Goal />
      </div>
      <div class="box">
        <Income userWealth={userWealth} />
      </div>
      <div class="box">
        <Expense userFundsLeft={userFundsLeft} userWealth={userWealth} userExpenses={userExpenses}/>
      </div>
      <div class="box">
        <Chart />
      </div>

    </main>
  )
}

export default Home