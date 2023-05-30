import styles from './LineGraph.module.css';
import * as React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";
import PropTypes from 'prop-types'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          fontSize: '8px',
          textAlign: 'center',
          lineHeight: '25px',
          width: '40px',
          height: '25px',
        }}
      >
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }

  return null
}
const CustomCursor = (props) => {
  const { points } = props;
  console.log(props);
  return (
    <Rectangle
      fill="#D00000"
      x={points[1].x}
      width={260}
      height={260}
    />
  );
};

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
      <LineChart 
        width={260} 
        height={260} 
        data={session}
      >
        <Tooltip 
          content={<CustomTooltip />} 
          /*wrapperStyle={{ zIndex: 1000 }} */
          cursor={<CustomCursor />}
          wrapperStyle={{ outline: "none" }}
        />
        <Line 
          type="natural" 
          dataKey="sessionLength" 
          dot={false} activeDot={{ r: 3 }} 
          stroke="#FFFFFF" 
          strokeWidth={2} 
        />
        <YAxis padding={{ top: 20, bottom: 20 }} tickLine={false} axisLine={false} tick={false} domain={['dataMin -10', 'dataMax + 20']}/>
        <XAxis 
          fill="white" 
          tickMargin={15} 
          dataKey="day" 
          padding={{ left: -40, right: 15 }} 
          tickFormatter={formatXAxis} 
          tickLine={false} 
          axisLine={false} 
          tick={{fill: 'white', fontSize: '12px' , opacity: '0.8', padding_bottom: '30px'}}
          dy={-10}
        />
        <text x={25} y={30} fill="white" opacity={0.8} textAnchor="left" dominantBaseline="central">
            <tspan fontSize="15">Durée moyenne des</tspan>
        </text>
        <text x={25} y={50} fill="white" opacity={0.8} textAnchor="left" dominantBaseline="central">
            <tspan fontSize="15">sessions</tspan>
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