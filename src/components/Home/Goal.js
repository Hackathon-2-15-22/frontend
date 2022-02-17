import React from "react"


const Goal = (props) => {
  const percentage = 70

  return (
    <>
    <div className="goal">
      <h1>Goal</h1>
      <progress max={100} value={percentage}/>
      <button>Adjust Goals</button>
    </div>
    </>
  )
}

export default Goal