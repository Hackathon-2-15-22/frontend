import React from "react";
import { useNavigate } from "react-router-dom";




const Income = (props) => {

  const navigate = useNavigate();

  return (
    <>
    <div className="income">
      <h1>Income</h1>
      <h3>$ {props.userWealth}</h3>
      <button onClick={() => navigate('/adjust/income')}>Adjust Income</button>
    </div>
    </>
  )
}

export default Income