import React from "react";
import styles from "./PieGraph.module.css";
import { PieChart, Pie, Legend, Cell } from "recharts";
import PropTypes from 'prop-types'


/**
 * Return the pie chart of the user score
 * @param {object} score - The user data.
 * @returns {HTMLElement} - The score chart element
 */
export default function PieGraph ({score}) {
  const COLORS = ['red', 'White'];
  let data = [
    { name: "Done", value: score*100},
    { name: "Todo", value: (1-score)*100},
  ]
  return (
    <div className={styles.pieGraph}>
        <PieChart width={250} height={250}>
          <Pie
            dataKey="value"
            data={data}
            cx={125}
            cy={125}
            innerRadius={70}
            outerRadius={80}
            cornerRadius={10}
            fill='red'
            startAngle={90}
            endAngle={450}
            >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie> 
          <text x={25} y={30} fill="black" dominantBaseline="central">
            <tspan fontSize="15">Score</tspan>
          </text> 
          <text x={110} y={110} fill="black" dominantBaseline="central">
            <tspan fontSize="26">{score*100}%</tspan>
          </text>
          <text x={105} y={140} fill="#747986" dominantBaseline="central">
            <tspan fontSize="16">de votre</tspan>
          </text>
          <text x={105} y={160} fill="#747986" dominantBaseline="central">
            <tspan fontSize="16">objectif</tspan>
          </text>    
        </PieChart>
    </div>
    
  )
}
PieGraph.propTypes = {
  score: PropTypes.number
}