import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Logoutin.css";

const Logoutin = ({ setUser }) => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = () => {
        // Simulated validation logic
        if (credentials.email === "test@example.com" && credentials.password === "password123") {
            const user = { name: "John Doe" }; // Simulated user data
            setUser(user); // Update the user state in the parent
            navigate("/"); // Redirect to home page
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={credentials.emailOrPhone}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="button" className="login-button" onClick={handleLogin}>
                    Login
                </button>
                <a href="/forgot-password" className="forgot-password-link">
                    Forget Password?
                </a>
                <button onClick={() => navigate("/signup")} type="button" className="signup-button">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Logoutin;