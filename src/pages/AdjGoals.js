import AdjustGoals from "../components/AdjustGoals/AdjustGoals";

const AdjGoals = (props) => {
  
  return (
    <main className="column">
      <h1 className="title text-center">Adjust Goals</h1>
      <div className="box">
        <AdjustGoals user={props.user} />
      </div>
    </main>
  );
};

export default AdjGoals;
