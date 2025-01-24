import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Drinks.css';
import Aigua from '../images/aigua-de-valencia.webp';
import MedWine from '../images/wine.webp';
import MintLemon from '../images/mint-lemonade.webp';
import PinkLady from '../images/pink-lady.webp';
import icon from '../images/courier.jpg';


export const drinks = [
  {
    id: 13,
    title: "Aigua de Valencia",
    price: "5",
    description: "Sip on the vibrant Aigua de Valencia cocktail, a tantalizing fusion of fresh orange juice, sparkling cava, and a hint of spirits—an uplifting Spanish delight in every sip.",
    image: Aigua
  },
  {
    id: 14,
    title: "Mediterranean Wine",
    price: "8",
    description: "Crafted from the sun-soaked vines of the Mediterranean, this wine embodies tradition and authenticity. Each grape tells a story, evoking the rich heritage of winemaking.",
    image: MedWine
  },
  {
    id: 15,
    title: "Mint Limonade",
    price: "5",
    description: "Sip on the refreshing Mint Lemonade, a tantalizing blend that invigorates your palate with zesty citrus and cool mint, creating a perfect thirst-quenching experience.",
    image: MintLemon
  },
  {
    id: 16,
    title: "Pink Lady",
    price: "5",
    description: "Indulge in the refreshing burst of flavors with our Pink Lady drink, a delightful blend that perfectly balances sweetness and zest.",
    image: PinkLady
  },
]

const Drinks = () => {

  const navigate = useNavigate();

  return (
    <div className="drinks-container">
      <div className="drinks-heading">
        <h2 id="drinks-heading">This Season Drinks</h2>
        <button className="drinks-button" onClick={() => navigate('/order')}>
          Order a Delivery <img src={icon} className="icon" alt="drinkss" />
        </button>
      </div>

      <div className="drinks">
        {drinks.map((drink) => (
          <div key={drink.id} className="drinks-card">
            <img src={drink.image} alt={drink.title} className="drinks-image" />
            <div className="drinks-head">
              <h3>{drink.title}</h3>
              <p className="drinks-price">${drink.price}</p>
            </div>

            <p className="drinks-description">{drink.description}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Drinks
