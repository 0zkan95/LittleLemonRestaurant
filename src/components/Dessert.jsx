import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Desserts.css';
import Pancake from '../images/banana-chocolate-pancake.webp';
import LemDess from '../images/lemon-dessert.webp';
import Terrine from '../images/panna-cotta-terrine.webp';
import Parfaits from '../images/ricotta-strawberry-partfaits.webp';
import icon from '../images/courier.jpg';
import { desserts } from "../data/index";
import '@fontsource/karla';
import '@fontsource/markazi-text';



const dessertItems = [...desserts];

const imgGalary = {
  Pancake: Pancake,
  LemDess: LemDess,
  Terrine: Terrine,
  Parfaits: Parfaits
}

const Desserts = () => {
  const navigate = useNavigate();

  return (
    <div className="desserts-container">
      <div className="desserts-header">
        <h2 id="desserts-heading">This Season Desserts</h2>
        <button id="order-button" onClick={() => navigate('/order')}>
          Order a Delivery <img src={icon} className="icon" alt="desserts" />
        </button>
      </div>
      <div className="desserts">
        {dessertItems.map((dessert) => (
          <div key={dessert.id} className="desserts-card">
            <img src={imgGalary[dessert.image]} alt={dessert.title} className="desserts-image" />
            <div className="desserts-head">
              <h3>{dessert.title}</h3>
              <p className="desserts-price">${dessert.price}</p>
            </div>
            <p className="desserts-description">{dessert.description}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Desserts;
