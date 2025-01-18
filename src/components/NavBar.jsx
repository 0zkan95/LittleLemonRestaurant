import React from "react";
import '../styles/NavBar.css';
import logo from '../images/Logo.svg';




const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <ul className="links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/order">Order Online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;