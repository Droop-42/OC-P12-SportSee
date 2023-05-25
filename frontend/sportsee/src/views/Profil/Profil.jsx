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
import Error404 from '../../views/Error404'

const { getUserMainData, getUserActivity, getUserAverageSession, getUserPerformance } = API

/**
 * Return the profil view of the user
 * @returns {object} - The view
 */
export default function Profil() {
    const { userId } = useParams()
    let [name, setName] = useState('toto')
    let [score, setScore] = useState(0)
    let [keyData, setKeyData] = useState()
    let [activity, setActivity] = useState([])
    let [sessions, setSessions] = useState([])
    let [perfs, setPerfs] = useState({})

// !! init var obj/list -> pb en cas d'async 
// modif:
// au lieu de keyData -> calorieCount, proteinCount, ... 

    useEffect( () => {
        async function fetchData() {
            let userData = await getUserMainData(userId)
            userData = new UserMainDataModel(userData)
            setName(userData.firstName)
            setScore(userData.score)
            setKeyData(userData.keyData)

            let userActivity = await getUserActivity(userId)
            userActivity = new UserActivityModel(userActivity)
            setActivity(userActivity.sessions)

            let userSessions = await getUserAverageSession(userId)
            userSessions = new UserSessionModel(userSessions)
            setSessions(userSessions.sessions)

            let userPerfs = await getUserPerformance(userId)
            userPerfs = new UserPerfModel(userPerfs)
            setPerfs(userPerfs.datas)

        } fetchData()
    }, [userId])

    if (!keyData) {return <Error404 />}
    
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