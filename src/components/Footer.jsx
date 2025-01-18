import React from "react";
import '../styles/Footer.css';
import logo1 from "../images/Logo .svg";


const Footer = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={logo1} alt="logo1" id="logo1" />
            </div>
            <div className="doormat">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservation">Reservation</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <h4>Address:</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <h4>Phone:</h4>
                <p>555111222</p>
                <h4>Email:</h4>
                <p>info@littlelemon.com</p>
            </div>
            <div className="social">
                <h3>Social Media</h3>
                <ul className="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">X</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>

        </div>
    )
}


export default Footer;