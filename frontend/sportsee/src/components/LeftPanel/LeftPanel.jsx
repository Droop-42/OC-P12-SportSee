/* eslint-disable react/react-in-jsx-scope */

import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import styles from './LeftPanel.module.css'

/**
 * Return the left panel element
 * @returns {HTMLElement} 
 */
export default function LeftPanel() {
    return (
        <div className={styles.leftPanel}>
            <div className={styles.icons}>
                <img src={icon1} alt="icon1" className={styles.iconMenu}/>
                <img src={icon2} alt="icon2" className={styles.iconMenu}/>
                <img src={icon3} alt="icon3" className={styles.iconMenu}/>
                <img src={icon4} alt="icon4" className={styles.iconMenu}/>
            </div>
            <p className={styles.copyright}>Copyright, SportSee 2020</p>
        </div>      
    )
}