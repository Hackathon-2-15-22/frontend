import React from "react"
import { ProgressBar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Goal = () => {
  const percentage = 73

  return (
    <>
    <div className="goal">
      <h1>Goal</h1>
      <ProgressBar now={percentage} label={`${percentage}% completed`}/>
      <button>Adjust Goals</button>
    </div>
    </>
  )
}

export default Goal