import React from "react"
import { PieChart } from "react-minimal-pie-chart"

const Chart = () => {
  return (
    <>
    <div className="chart">
      <PieChart
          animate
          animationDuration={1000}
          onMouseOver
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
          label={({ dataEntry }) => dataEntry.title}
          // label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
        />    
    </div>
    </>
  )
}

export default Chart