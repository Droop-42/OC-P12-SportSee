import styles from './LineGraph.module.css';
import * as React from "react";
import { LineChart, Line, XAxis } from "recharts";
import PropTypes from 'prop-types'

/**
 * Gives the line chart of user session
 * @param {object} session - The user session data.
 * @returns {HTMLElement} - The line chart element
 */
export default function LineGraph({session}) {
  return (
    <div className={styles.lineGraph}>
      <LineChart width={270} height={100} data={session}>
        <Line type="basis" dataKey="sessionLength" dot={false} activeDot={{ stroke: 'white', strokeWidth: 2, r: 10 }} stroke="#FFFFFF" strokeWidth={2} />
      </LineChart>
      <span className={styles.title}>Durée moyenne des sessions</span>
    </div>
  );
}

LineGraph.propTypes = {
  session: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number
}))
}