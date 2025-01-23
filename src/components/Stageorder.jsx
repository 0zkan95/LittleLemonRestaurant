import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Stageorder.css';
import { drinks } from "./Drinks";
import { desserts } from "./Dessert";
import { mainCourses } from "./Maincourse";
import { GrSubtractCircle } from "react-icons/gr";
import { TbCirclePlus } from "react-icons/tb";


const OrderOnline = () => {
    const navigate = useNavigate();
    const [stage, setStage] = useState(1); // Track the current stage
    const [cart, setCart] = useState([]); // Track selected meals
    const [recipientInfo, setRecipientInfo] = useState({
        name: "",
        surname: "",
        address: "",
        phone: "",
        cardNumber: "",
        cardHolder: "",
        expiryDate: "",
        cvv: "",
    });
    const [errors, setErrors] = useState({}); // Track validation errors

    // Function to go to the next stage
    const nextStage = () => {
        if (stage === 2) {
            if (!validateForm()) return; // Stop if validation fails
        }
        if (stage < 3) setStage(stage + 1);
    };

    // Function to go to the previous stage
    const previousStage = () => {
        if (stage > 1) setStage(stage - 1);
    };

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipientInfo((prev) => ({ ...prev, [name]: value }));
    };

    // Validation logic
    const validateForm = () => {
        const newErrors = {};

        // Card Number: 16 digits only
        if (!/^\d{16}$/.test(recipientInfo.cardNumber)) {
            newErrors.cardNumber = "Card number must be 16 digits.";
        }

        // Expiry Date: MM/YY format, valid month (01-12)
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(recipientInfo.expiryDate)) {
            newErrors.expiryDate = "Expiry date must be in MM/YY format.";
        }

        // CVV: 3 digits only
        if (!/^\d{3}$/.test(recipientInfo.cvv)) {
            newErrors.cvv = "CVV must be 3 digits.";
        }

        // Set errors and return validation result
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const allItems = [...mainCourses, ...drinks, ...desserts];

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    }

    const subtractFromCart = (item) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);

            if (itemIndex === -1) {
                // Item not found in the cart
                return prevCart;
            }

            //create a new cart array with the item removed
            const newCart = [...prevCart];
            newCart.splice(itemIndex, 1);

            return newCart
        });
    };


    const handleConfirmOrder = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to your cart before confirming the order.")
        } else {
            alert ("Thank you for your order!")
            navigate('/')
        }
    };

    return (
        <div className="order-container">

            {/* meals menu render */}

            <div className="meals-grid">
                {allItems.map((item) => (
                    <div key={item.id} className="meal-card">
                        <img src={item.image} alt={item.title} className="meal-image" />
                        <div className="meals-header">
                            <h3 className="meal-title">{item.title}</h3>
                            <p className="meal-price">${item.price}</p>
                        </div>
                        <div className="add-substract">
                            <button onClick={() => subtractFromCart(item)}> <GrSubtractCircle style={{ fontSize: '1.8rem' }} /> </button>
                            <button onClick={() => addToCart(item)}> <TbCirclePlus style={{ fontSize: '2rem' }} /> </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="seco">
                <div className="progress-container">
                    <div className="progress">
                        {["Select Meals", "Recipient Info", "Confirmation"].map(
                            (label, index) => (
                                <div key={index} className="progress-step">
                                    <div
                                        className={`diamond ${index + 1 <= stage ? "active" : ""}`}
                                    ></div>
                                    <span className="step-label">{label}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>


                {stage === 1 && (
                    <div className="select-meals">
                        <h2>Select Your Meals</h2>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    {item.title} - ${item.price}
                                </li>
                            ))}
                        </ul>
                        <h3>Total: ${cart.reduce((acc, item) => acc + Number(item.price), 0)}</h3>
                        <div className="control-buttons">
                            <button onClick={nextStage}> Next </button>
                        </div>
                    </div>
                )}

                {stage === 2 && (
                    <div className="recipient-info">
                        <h2>Recipient Information</h2>
                        <form className="recipient-form">
                            <div className="row-input">
                                <div>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={recipientInfo.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label>Surname:</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        value={recipientInfo.surname}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={recipientInfo.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>Phone:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={recipientInfo.phone}
                                    onChange={handleInputChange}
                                    placeholder="5XX XXX XXXX"
                                />
                            </div>
                            <div>
                                <label>Card Number:</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={recipientInfo.cardNumber}
                                    onChange={handleInputChange}
                                    maxLength={16}
                                    placeholder="0000 0000 0000 0000"
                                />
                                {errors.cardNumber && <p style={{ color: "red" }}>{errors.cardNumber}</p>}
                            </div>
                            <div>
                                <label>Card Holder Full Name:</label>
                                <input
                                    type="text"
                                    name="cardHolder"
                                    value={recipientInfo.cardHolder}
                                    onChange={handleInputChange}
                                    placeholder="name surname"
                                />
                            </div>
                            <div className="row-input">
                                <div>
                                    <label>Expiry Date:</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        value={recipientInfo.expiryDate}
                                        onChange={handleInputChange}
                                        placeholder="MM/YY"
                                    />
                                    {errors.expiryDate && <p style={{ color: "red" }}>{errors.expiryDate}</p>}
                                </div>
                                <div>
                                    <label>CVV:</label>
                                    <input
                                        type="password"
                                        name="cvv"
                                        value={recipientInfo.cvv}
                                        onChange={handleInputChange}
                                        maxLength={3}
                                    />
                                    {errors.cvv && <p style={{ color: "red" }}>{errors.cvv}</p>}
                                </div>
                            </div>

                        </form>
                        <div className="control-buttons">
                            <button onClick={previousStage}>Back </button>
                            <button onClick={nextStage}>Next </button>
                        </div>

                    </div>
                )}

                {stage === 3 && (
                    <div className="confirmation">
                        <h2>Order Confirmation</h2>
                        <p><strong>Name:</strong> {recipientInfo.name}</p>
                        <p><strong>Surname:</strong> {recipientInfo.surname}</p>
                        <p><strong>Address:</strong> {recipientInfo.address}</p>
                        <p><strong>Phone:</strong> {recipientInfo.phone}</p>
                        <h3>Ordered Meals:</h3>
                        <ul>
                            {cart.map((meal, index) => (
                                <li key={index}>
                                    {meal.title} - ${meal.price}
                                </li>
                            ))}
                        </ul>
                        <h3>Total: ${cart.reduce((acc, meal) => acc + Number(meal.price), 0)}</h3>
                        <div className="control-buttons">
                            <button onClick={previousStage}>Back </button>
                            <button 
                                onClick={handleConfirmOrder}>
                                    Confirm Order
                                </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderOnline;

