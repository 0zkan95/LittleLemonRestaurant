import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Desserts.css';
import Pancake from '../images/banana-chocolate-pancake.webp';
import LemDess from '../images/lemon-dessert.webp';
import Terrine from '../images/panna-cotta-terrine.webp';
import Parfaits from '../images/ricotta-strawberry-partfaits.webp';
import icon from '../images/courier.jpg';


export const desserts = [
  {
    id: 17,
    title: "Banana Chocolate Pancake",
    price: "8",
    description: "Indulge in the delightful Banana Chocolate Pancake—a perfect blend of fluffy pancakes, ripe bananas, and rich chocolate, offering a sweet escape on your plate.",
    image: Pancake
  },
  {
    id: 18,
    title: "Lemon Dessert",
    price: "8",
    description: "This comes straight from grandma’s cherished recipe book, every last ingredient has been sourced and is as authentic and nostalgic as can be imagined.",
    image: LemDess
  },
  {
    id: 19,
    title: "Panna Cotta Terrine",
    price: "8",
    description: "Savor the exquisite Panna Cotta Terrine, a luscious Italian dessert. Layers of velvety cream and fruit coulis create a heavenly symphony for your taste buds.",
    image: Terrine
  },
  {
    id: 20,
    title: "Strawberry Parfaits",
    price: "8",
    description: "Indulge in the delightful sweetness of our Strawberry Parfaits, a perfect harmony of fresh strawberries, creamy layers, and heavenly bliss.",
    image: Parfaits
  },
]

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
        {desserts.map((dessert) => (
          <div key={dessert.id} className="desserts-card">
            <img src={dessert.image} alt={dessert.title} className="desserts-image" />
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
