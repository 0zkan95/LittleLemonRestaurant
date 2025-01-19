import React from "react";
import '../styles/Footer.css';
import proxyimg from "../images/proxy-image.png";



const Footer = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={proxyimg} alt="logo1"  id="logo1" />
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
                <h6>Little Lemon Restaurant
                    123 Main Street
                    Anytown, USA 12345</h6>
                <h4>Phone:</h4>
                <h6>555111222</h6>
                <h4>Email:</h4>
                <h6>info@littlelemon.com</h6>
            </div>
            <div className="social">
                <h3>Social Media</h3>
                <ul className="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>

        </div>
    )
}


export default Footer;