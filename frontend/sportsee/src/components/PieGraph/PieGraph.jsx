import React from "react";
import styles from "./PieGraph.module.css";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
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
            >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>      
        </PieChart>
        <span className={styles.title}>Score</span>
        <span className={styles.score}>{score*100}%</span>
        <span className={styles.subScore}>de votre objectif</span>
    </div>
    
  )
}
PieGraph.propTypes = {
  score: PropTypes.number
}