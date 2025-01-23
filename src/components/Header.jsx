import React from "react";
import {  useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import headerLogo from '../images/restauranfood.jpg'




const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header-container">
            <div className="left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean retaurant, focus on
                    traditional recipes served with a modern twist.
                </p>
                <button onClick={() => navigate('reservation')}>Reservation</button>
            </div>
            <div className="right">
                <div className="header-img">
                    <img src={headerLogo} alt="Header Logo" />
                </div>
            </div>

        </div>
    )
}

export default Header;
