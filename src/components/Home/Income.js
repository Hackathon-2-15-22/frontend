import React from "react"




const Income = (props) => {

  return (
    <>
    <div className="income">
      <h1>Income</h1>
      <h3>$ {props.userWealth}</h3>
      <button>Adjust Income</button>
    </div>
    </>
  )
}

export default Income