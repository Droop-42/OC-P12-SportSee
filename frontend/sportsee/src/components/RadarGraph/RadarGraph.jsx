import React from "react";
import styles from "./RadarGraph.module.css";
import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  //ResponsiveContainer
} from "recharts";

/**
 * Return the radar chart of the user performances
 * @param {object} perf - The user data.
 * @returns {HTMLElement} - The radar chart element
 */
export default function RadarGraph ({perf}) {
  return (
    <div className={styles.radarChart}>
      <RadarChart
        cx={125}
        cy={115}
        outerRadius={90}
        width={250}
        height={230}
        data={perf.data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind"/>
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