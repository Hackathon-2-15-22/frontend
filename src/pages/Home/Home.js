import styles from './Home.module.css';
import Chart from '../../components/Home/Chart';
import Income from '../../components/Home/Income';
import Goal from '../../components/Home/Goal';
import Expense from '../../components/Home/Expense';

import { getAllExpenses } from "../../utility/expeneService";
import { getAllIncomes } from "../../utility/incomeService";
import { getUser } from "../../utility/auth";
import { useState } from 'react';

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
        console.log(exp.amount)
        if (exp.owner === userId.profile) {
          moneySpent += exp.amount;
        }
      });
      console.log(moneySpent)
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
      setUserFundsLeft(userWealth-userExpenses)
    } catch (error) {
      throw error;
    }
  };

  calculateExpenses()
  calculateIncomes()

    const date = new Date();
    const n = date.toDateString();
    const t = date.toLocaleDateString();


  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h1>Today is {t}</h1>
      <Goal />
      <Income userWealth={userWealth} />
      <Expense userFundsLeft={userFundsLeft} userWealth={userWealth} userExpenses={userExpenses}/>
      <Chart />
    </main>
  )
}

export default Home