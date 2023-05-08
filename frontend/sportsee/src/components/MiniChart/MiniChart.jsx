/* eslint-disable react/react-in-jsx-scope */
import styles from './MiniChart.module.css'
import PropTypes from 'prop-types'
/**
 * Return the chart of the user main data
 * @param {string} title - The name of the element.
 * @param {string} icon - The icon path.
 * @param {object} data - The user data.
 * @param {string} unit - The unit of the data.
 * @returns {HTMLElement} - The bare chart element
 */
export default function Minichart({title, icon, data, unit}) {
    const quotedData = data //.toLocaleString('en')
    return (
        <div className={styles.mini}>
            <div className={styles.icons}>
                <img src={icon} alt="icon" className={styles.icon}/>
            </div>
            <div className={styles.txt}>
                <span><b>{quotedData + unit}</b></span> 
                <span>{title}</span>
            </div>
             
        </div>      
    )
}
Minichart.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    data: PropTypes.number,
    unit: PropTypes.string
}