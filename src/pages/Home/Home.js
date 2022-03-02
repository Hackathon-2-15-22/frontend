import Chart from "../../components/Home/Chart";
import Income from "../../components/Home/Income";
import Goal from "../../components/Home/Goal";
import Expense from "../../components/Home/Expense";

import { useEffect, useState } from "react";
import { getAllExpenses } from "../../utility/expenseService";
import { getAllIncomes } from "../../utility/incomeService";
import { getAllGoals } from "../../utility/goalService";

const Home = ({ user }) => {
  let moneySpent = 0;
  let wealth = 0;
  let towardGoal = 0;
  let goalTotal = 0;
  let data = [];

  const [userExpenseData, setUserExpenseData] = useState([]);
  const [totalMoneySpent, setTotalMoneySpent] = useState([]);
  const [allGoalsSet, setAllGoalsSet] = useState([]);
  const [userWealth, setUserWealth] = useState();
  const [goalSavedTotal, setGoalSavedTotal] = useState(0);
  const [userGoalTotal, setUserGoalTotal] = useState(0);

  // fetch all user expenses and store them in state
  const allUserExpenseData = async () => {
    try {
      const expenseData = await getAllExpenses();
      data = expenseData.filter((exp) => exp.owner === user.profile);
      setUserExpenseData(data);
    } catch (error) {
      throw error;
    }
  };

  // fetch user income, calculate total and store in state
  const calculateIncomes = async () => {
    try {
      const incomeData = await getAllIncomes();
      incomeData.forEach((inc) => {
        if (inc.owner === user.profile) {
          wealth += inc.amount;
        }
      });
      setUserWealth(wealth);
    } catch (error) {
      throw error;
    }
  };

  // fetch user goals and store in state
  const getAllUserGoals = async () => {
    try {
      const goalData = await getAllGoals();
      data = goalData.filter((goal) => goal.owner === user.profile);
      setAllGoalsSet(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    calculateIncomes();
    allUserExpenseData();
    getAllUserGoals();
  }, [userWealth]);

  const calculateExpenses = () => {
    userExpenseData.filter((exp) => (moneySpent += exp.amount));
    setTotalMoneySpent(moneySpent);
  };

  const calculateSavedTowardGoal = () => {
    userExpenseData.filter((exp) => {
      if (exp.category === "Goals") {
        towardGoal += exp.amount;
      }
      setGoalSavedTotal(towardGoal);
      return towardGoal;
    });
  };
  const calculateGoalTotal = () => {
    allGoalsSet.forEach((g) => {
      goalTotal += g.amount;
    });
    setUserGoalTotal(goalTotal);
  };

  useEffect(() => {
    calculateSavedTowardGoal();
    calculateGoalTotal();
    calculateExpenses();
  });

  return (
    <main className="home">
      <h1 className="title text-center">Your Dashboard</h1>
      <div className="box">
        <Goal userGoalTotal={userGoalTotal} goalSavedTotal={goalSavedTotal} />
      </div>
      <div className="box">
        <Expense userWealth={userWealth} totalMoneySpent={totalMoneySpent} />
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
