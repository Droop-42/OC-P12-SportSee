import React from "react";
import styles from "./RadarGraph.module.css";
import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
  //ResponsiveContainer
} from "recharts";

/**
 * Return the radar chart of the user performances
 * @param {object} perf - The user data.
 * @returns {HTMLElement} - The radar chart element
 */
export default function RadarGraph ({perf}) {
  const axis = ["Intensité","Vitesse","Force","Endurance","Energie","Cardio"]
  function formatAxis (value) {
    return axis[value]
  }
  return (
    <div className={styles.radarChart}>
      <RadarChart
        cx={126}
        cy={120}
        outerRadius={90}
        width={250}
        height={230}
        data={perf.data}
        fill='red'
        /*fillOpacity={0.6}*/
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis tickLine={false} axisLine={false}  tickFormatter={formatAxis} style={{ fill: 'white', fontSize: '12px', margin: '5px'}} dy={3}/>
        <Radar
          name="Performances"
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}

RadarGraph.propTypes = {
  perf: PropTypes.shape({
    value: PropTypes.number,
    //kind: PropTypes.number
  })
}