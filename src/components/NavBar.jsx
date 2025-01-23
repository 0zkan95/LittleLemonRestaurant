import React, { useState } from "react";
import {Link, NavLink, useNavigate } from "react-router-dom";
import '../styles/NavBar.css';
import logo from '../images/Logo.svg';





const NavBar = ({ user, setUser }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = () => {
        setUser(null); //Clear user data
        navigate("/"); //Redirect to Home page
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"} {/* Toggle between menu and close icons */}
            </button>

            <ul className={`links ${menuOpen ? "show" : ""}`}>
                <li>
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reservation" onClick={() => setMenuOpen(false)}>
                        Reservation
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order" onClick={() => setMenuOpen(false)}>
                        Order Online
                    </NavLink>
                </li>
                <li>
                    {!user ? (
                        <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                            Login
                        </NavLink>
                    ) : (
                        <div className="user-menu">
                            <span onClick={() => setDropdownVisible((prev) => !prev)}>
                                {user.name}
                            </span>
                            {dropdownVisible && (
                                <div className="dropdown">
                                    <Link to="/profile">Profile</Link>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </div>
                    )}

                </li>
            </ul>
        </nav>
    );
}

export default NavBar;