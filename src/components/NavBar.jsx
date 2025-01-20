import React, { useState } from "react";
import '../styles/NavBar.css';
import logo from '../images/Logo.svg';





const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"} {/* Toggle between menu and close icons */}
            </button>

            <ul className={`links ${menuOpen ? "show" : ""}`}>
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