import Chart from "../../components/Home/Chart";
import Income from "../../components/Home/Income";
import Goal from "../../components/Home/Goal";
import Expense from "../../components/Home/Expense";

import { getAllExpenses } from "../../utility/expenseService";
import { getAllIncomes } from "../../utility/incomeService";
import { getUser } from "../../utility/auth";
import { useEffect, useState } from "react";

const Home = ({ user }) => {
  let moneySpent = 0;
  let wealth = 0;

  const [userExpenses, setUserExpenses] = useState([]);
  const [userWealth, setUserWealth] = useState();
  const [userFundsLeft, setUserFundsLeft] = useState();


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
      setUserFundsLeft(userWealth - userExpenses);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {

    calculateIncomes();
    calculateExpenses();
  });

  // const date = new Date();
  // const n = date.toDateString();
  // const t = date.toLocaleDateString();

  return (
    <main className="home">
      <h1 className="title text-center">Your Dashboard</h1>
      <div className="box">
        <Goal />
      </div>
      <div className="box">
        <Expense
          userFundsLeft={userFundsLeft}
          userWealth={userWealth}
          userExpenses={userExpenses}
        />
      </div>
      <div className="box">
        <Income userWealth={userWealth} />
      </div>
      <div className="box">
        <Chart />
      </div>
    </main>
  );
};

export default Home;
