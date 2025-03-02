import React from "react";
import {  useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import headerLogo from '../images/restauranfood.jpg'
import '@fontsource/karla';
import '@fontsource/markazi-text';



const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styles["header-container"]}`}>
            <div className={styles.left}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean retaurant, focus on
                    traditional recipes served with a modern twist.
                </p>
                <button onClick={() => navigate('reservation')}>Reservation</button>
            </div>
            <div className={styles.right}>
                <div className={`${styles["header-img"]}`}>
                    <img src={headerLogo} alt="Header Logo" />
                </div>
            </div>

        </div>
    )
}

export default Header;
