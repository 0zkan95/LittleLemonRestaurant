import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Drinks.module.css';
import Aigua from '../images/aigua-de-valencia.webp';
import MedWine from '../images/wine.webp';
import MintLemon from '../images/mint-lemonade.webp';
import PinkLady from '../images/pink-lady.webp';
import icon from '../images/courier.jpg';
import { drinks } from "../data";
import '@fontsource/karla';
import '@fontsource/markazi-text';


const drinkItems = [...drinks];
const imgGalary = {
  Aigua: Aigua,
  MedWine: MedWine,
  MintLemon: MintLemon,
  PinkLady: PinkLady
}

const Drinks = () => {

  const navigate = useNavigate();

  return (
    <div className={`${styles["drinks-container"]}`}>
      <div className={`${styles["drinks-heading"]}`}>
        <h2 id={`${styles["drinks-heading"]}`}>This Season Drinks</h2>
        <button className={`${styles["drinks-button"]}`} onClick={() => navigate('/order')}>
          Order a Delivery 
          <img src={icon} className={styles.icon} alt="drinkss" />
        </button>
      </div>

      <div className={styles.drinks}>
        {drinkItems.map((drink) => (
          <div key={drink.id} className={`${styles["drinks-card"]}`}>
            <img 
              src={imgGalary[drink.image]} 
              alt={drink.title} 
              className={`${styles["drinks-image"]}`} />
            <div className={`${styles["drinks-head"]}`}>
              <h3>{drink.title}</h3>
              <p className={`${styles["drinks-price"]}`}>${drink.price}</p>
            </div>

            <p className={`${styles["drinks-description"]}`}>{drink.description}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Drinks
