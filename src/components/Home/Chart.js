import React from "react"
import { PieChart } from "react-minimal-pie-chart"

const Chart = (props) => {

  
  return (
    <>
    <div className="chart">
      <h1>Your Spendings</h1>
      <PieChart
          animate
          animationDuration={1000}
          onMouseOver
          data={[
            { title: 'One', value: 10, color: '#E11619' },
            { title: 'Two', value: 15, color: '#C72A21' },
            { title: 'Three', value: 10, color: '#623133' },
            { title: 'Four', value: 10, color: '#6A4145' },
          ]}
          label={({ dataEntry }) => dataEntry.title}
          // label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
        />    
        <h3>Category</h3>
        <h3>Category</h3>
        <h3>Category</h3>
    </div>
    </>
  )
}

export default Chart