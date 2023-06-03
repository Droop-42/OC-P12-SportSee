/* eslint-disable react/react-in-jsx-scope */
import LineGraph from '../../components/LineGraph/LineGraph';
import PieGraph from '../../components/PieGraph/PieGraph';
import RadarGraph from '../../components/RadarGraph';
import BarGraph from '../../components/BarGraph';
import MiniChart from '../../components/MiniChart';
import styles from './Profil.module.css'
import icon1 from '../../assets/calories-icon.png';
import icon2 from '../../assets/protein-icon.png';
import icon3 from '../../assets/carbs-icon.png';
import icon4 from '../../assets/fat-icon.png';
import { useParams } from 'react-router-dom'
//import { getUserMainData, getUserActivity, getUserAverageSession, getUserPerformance } from '../../API/RESTRequests'
//import { getUserMainData, getUserActivity, getUserAverageSession, getUserPerformance } from '../../API/MockedRESTRequests'
import {API} from '../../API'
import { useState, useEffect } from "react";
import { UserMainDataModel } from '../../formatModels/UserMainDataModel'
import { UserActivityModel } from '../../formatModels/UserActivityModel'
import { UserSessionModel } from '../../formatModels/UserSessionModel'
import { UserPerfModel } from '../../formatModels/UserPerfModel'
import Error500 from '../../views/Error500'

const { getUserMainData, getUserActivity, getUserAverageSession, getUserPerformance } = API

/**
 * Return the profil view of the user
 * @returns {object} - The view
 */
export default function Profil() {
    const { userId } = useParams()
    let [name, setName] = useState('toto')
    let [score, setScore] = useState(0)
    let [keyData, setKeyData] = useState([])
    let [activity, setActivity] = useState([])
    let [sessions, setSessions] = useState([])
    let [perfs, setPerfs] = useState({})
    let [isError, setIsError] = useState(false)


    useEffect( () => {
        async function fetchData() {
            getUserMainData(userId)
                .then((data) => {
                    const userData = new UserMainDataModel(data)
                    setName(userData.firstName)
                    setScore(userData.score)
                    setKeyData(userData.keyData)
                    setIsError(false)
                })
                .catch((err) => setIsError(true))
            

            getUserActivity(userId)
                .then((data) => {
                    const userActivity = new UserActivityModel(data)
                    setActivity(userActivity.sessions)
                    setIsError(false)
                })
                .catch((err) => setIsError(true))

            getUserAverageSession(userId)
                .then((data) => {
                    const userSessions = new UserSessionModel(data)
                    setSessions(userSessions.sessions)
                    setIsError(false)
                })
                .catch((err) => setIsError(true))

            getUserPerformance(userId)
                .then((data) => {
                    const userPerfs = new UserPerfModel(data)
                    setPerfs(userPerfs.datas)
                    setIsError(false)
                })
                .catch((err) => setIsError(true))

        } fetchData()
    }, [userId])

    if (isError) {
         return <Error500 />
    } else {
        return (
            <div className={styles.profil}>
                <div className={styles.greetings}>
                    <h1>Bonjours <strong>{name}</strong></h1>
                    <p>Félicitation! Vous avez explosé vos objectifs hier 👋 </p>
                </div>
                <div className={styles.dashContainer} >
                <div className={styles.dashboard}>
                    <BarGraph activity={activity}/>
                    <div className={styles.charts}>
                            <LineGraph session={sessions}/>
                            <RadarGraph perf={perfs}/>
                            <PieGraph score={score}/>
                    </div>
                </div>
                <div className={styles.rightPanel}>
                    <MiniChart title={'Calories'} icon={icon1} data={keyData.calorieCount} unit="kCal"/>
                    <MiniChart title={'Proteines'} icon={icon2} data={keyData.proteinCount} unit="g"/>
                    <MiniChart title={'Glucides'} icon={icon3} data={keyData.carbohydrateCount} unit="g"/>
                    <MiniChart title={'Lipides'} icon={icon4} data={keyData.lipidCount} unit="g"/>
                </div>
                </div>             
            </div>      
        )
    }
    
    
}
