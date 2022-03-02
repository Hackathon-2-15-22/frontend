import React from "react"
import ExpenseForm from "../../components/AddExpense/ExpenseForm"

const Expenses = (props) => {

  
  
  return (
    <>
    <div className="">
      <ExpenseForm />
      <button onClick={()=> props.toggleClick()}>Next</button>
    </div>
    </>
  )
}

export default Expenses