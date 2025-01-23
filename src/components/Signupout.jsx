import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Signupout.css';




const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        address: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.surname) newErrors.surname = "Surname is required.";
        if (!formData.phone || !/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Phone number must be 10 digits.";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Invalid email address.";
        if (!formData.address) newErrors.address = "Address is required.";
        if (!formData.password || formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters long.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Registration successful!");
                navigate("/login");
            } else {
                alert(data.message || "Registration failed.");
            }
        } catch (error) {
            alert("Error connecting to the server.");
        }
    };

    return (
        <div className="signup-container">
            <form className="signup" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <label>Surname:</label>
                <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="Enter your surname"
                />
                {errors.surname && <p className="error">{errors.surname}</p>}

                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                />
                {errors.address && <p className="error">{errors.address}</p>}

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                />
                {errors.password && <p className="error">{errors.password}</p>}

                <button id="register" type="submit">Register</button>
            </form>
        </div>
    );
};

export default SignUp;
