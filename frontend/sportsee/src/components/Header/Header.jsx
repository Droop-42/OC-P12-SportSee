/* eslint-disable react/react-in-jsx-scope */
import styles from './Header.module.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';

/**
 * Return the header element
 * @returns {HTMLElement} 
 */
export default function Header() {
    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" height="60px" />
            <nav>
                <Link to="*">Accueil</Link>
                <Link to="/Profil/12">Profil</Link>
                <Link to="/Profil/18">Réglage</Link>
                <Link to="*">Communauté</Link>
            </nav>
        </div>      
    )
}