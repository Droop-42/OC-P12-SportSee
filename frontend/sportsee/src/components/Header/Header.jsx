/* eslint-disable react/react-in-jsx-scope */
import styles from './Header.module.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" height="60px" />
            <nav>
                <Link to="/Profil">Accueil</Link>
                <Link to="/Profil">Profil</Link>
                <Link to="/Profil">Réglage</Link>
                <Link to="/Profil">Communauté</Link>
            </nav>
        </div>      
    )
}