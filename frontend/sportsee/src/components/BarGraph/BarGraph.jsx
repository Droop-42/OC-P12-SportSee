import React from "react";
import styles from "./BarGraph.module.css";
import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// Given date (tick), return the day
const monthTickFormatter = (tick) => {
  const date = new Date(tick);
  return date.getDate()
}

/**
 * Return the bar chart of the user activity
 * @param {array} activity - The user data.
 * @returns {HTMLElement} - The bare chart element
 */
export default function BarGraph({activity}) {
  //console.log(activity)
  return (
    <div className={styles.barGraph}>
        <BarChart
          width={800}
          height={300}
          data={activity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false}/>
          <XAxis dataKey="day" tickFormatter={monthTickFormatter}/>
          <YAxis yAxisId="left" orientation="right" dataKey="kilogram" tickLine={false} axisLine={false} tickCount={3} domain={['dataMin -2', 'dataMax + 1']}/>
          <YAxis yAxisId="right" orientation="left" dataKey="calories" tickLine={false} tick={false} tickCount={3} axisLine={false} interval="preserveEnd"/>
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="kilogram" fill="black" barSize={10} radius={[10, 10, 0, 0]}/>
          <Bar yAxisId="right" dataKey="calories" fill="red"  barSize={10} radius={[10, 10, 0, 0]}/>
        </BarChart>
    </div>
    
  );
}

BarGraph.propTypes = {
    activity: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number
  }))
}