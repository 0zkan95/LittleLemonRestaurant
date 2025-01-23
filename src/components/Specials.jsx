import React from "react";
import '../styles/Specials.css'
import ikon from "../images/courier.jpg";
import greek from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemon from "../images/lemon dessert.jpg";





const Specials = () => {
    return (
        <div className="spe-container">
            <div className="section1">
                <h2>This weeks specials</h2>
                <button>Order Online</button>
            </div>
            <div className="section2">
                <div className="food1">
                    <div className="img">
                        <img src={greek} alt="greek salad" className="food-img" />
                    </div>
                    <div className="heading">
                        <h4>Greek Salad</h4>
                        <h5>$12.99</h5>
                    </div>
                    <div className="description">
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </div>
                    <div className="order">
                        <button>Order a delivery
                            <img src={ikon} alt="ikon" className="ikon" />
                        </button>

                    </div>
                </div>
                <div className="food1">
                    <div className="img">
                        <img src={bruchetta} alt="bruchetta" className="food-img" />
                    </div>
                    <div className="heading">
                        <h4>Bruchetta</h4>
                        <h5>$7.99</h5>
                    </div>
                    <div className="description">
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic, seasoned with salt, and drizzled with olive oil, creating a delightful appetizer.</p>
                    </div>
                    <div className="order">
                        <button>Order a delivery
                            <img src={ikon} alt="ikon" className="ikon" />
                        </button>

                    </div>
                </div>
                <div className="food1">
                    <div className="img">
                        <img src={lemon} alt="bruchetta" className="food-img" />
                    </div>
                    <div className="heading">
                        <h4>Lemon Dessert</h4>
                        <h5>$5.00</h5>
                    </div>
                    <div className="description">
                        <p>This comes straight from grandma’s cherished recipe book, every last ingredient has been sourced and is as authentic and nostalgic as can be imagined.</p>
                    </div>
                    <div className="order">
                        <button>Order a delivery
                            <img src={ikon} alt="ikon" className="ikon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Specials;