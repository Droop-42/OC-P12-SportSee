import styles from './LineGraph.module.css';
import * as React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import PropTypes from 'prop-types'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.custom_tooltip}>
        <p className="label">{`${payload[0].value}`+" mn"}</p>
      </div>
    );
  }

  return null;
}
/**
 * Gives the line chart of user session
 * @param {object} session - The user session data.
 * @returns {HTMLElement} - The line chart element
 */
export default function LineGraph({session}) {
  const days = ["L","M","M","J","V","S","D"]
  function formatXAxis (value) {
    return days[value-1]
  }
  return (
    <div className={styles.lineGraph}>
      <LineChart width={270} height={220} data={session}>
        <Tooltip cursor={false} content={<CustomTooltip />} wrapperStyle={{ zIndex: 1000 }}/>
        <Line type="natural" dataKey="sessionLength" dot={false} activeDot={{ r: 8 }} stroke="#FFFFFF" strokeWidth={2} />
        <YAxis padding={{ top: 20, bottom: 20 }} tickLine={false} axisLine={false} tick={false}/>
        <XAxis fill="white" tickMargin={15} dataKey="day" padding={{ left: -40, right: 15 }} tickFormatter={formatXAxis} tickLine={false} axisLine={false} tick={{stroke: 'white', strokeWidth: 2}}/>
        <text x={15} y={8} fill="white" textAnchor="left" dominantBaseline="central">
            <tspan fontSize="18">Durée moyenne des sessions</tspan>
        </text>
      </LineChart>
    </div>
  );
}

LineGraph.propTypes = {
  session: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number
}))
}