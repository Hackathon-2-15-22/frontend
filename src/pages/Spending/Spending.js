import DailySpending from "../../components/DailySpending/DailySpending"
import { useEffect } from "react";

const Spending = ({ user }) => {

  useEffect(() => {});

  return (
    <main className="home">
      <h1 className="title text-center">Add Spending</h1>

      <div className="box">
        <DailySpending user= {user} />
      </div>
    </main>
  );
};

export default Spending;
