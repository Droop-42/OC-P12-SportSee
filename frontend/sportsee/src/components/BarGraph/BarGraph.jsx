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
  Legend,
  Text
} from "recharts";

// Given date (tick), return the day
const monthTickFormatter = (tick) => {
  const date = new Date(tick);
  return date.getDate()
}
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.custom_tooltip}>
        <p>{`${payload[0].value}`+" kg"}</p>
        <p>{`${payload[1].value}`+" kCal"}</p>
      </div>
    );
  }

  return null;
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
          width={850}
          height={320}
          data={activity}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false}/>
          <XAxis dataKey="day" tickFormatter={monthTickFormatter} tickLine={false}/>
          <YAxis yAxisId="left" orientation="right" dataKey="kilogram" tickLine={false} axisLine={false} tickCount={3} domain={['dataMin -2', 'dataMax + 1']}/>
          <YAxis yAxisId="right" orientation="left" dataKey="calories" tickLine={false} tick={false} tickCount={3} axisLine={false} interval="preserveEnd"/>
          <Tooltip cursor={false} content={<CustomTooltip />} wrapperStyle={{ zIndex: 1000 }}/>
          <Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} height={80} formatter={(value, entry, index) => 
               { if (value == "kilogram") { return <span className={styles.txtLegend}>Poids (kg)</span>}
              else { return <span className={styles.txtLegend}>Calories brûlées (kCal)</span>} }
              }/>
          <text x={30} y={20} fill="black" textAnchor="left" dominantBaseline="central">
            <tspan fontSize="18">Activité quotidienne</tspan>
          </text>
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