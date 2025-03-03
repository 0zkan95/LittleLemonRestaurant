import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Desserts.module.css';
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
    <div className={`${styles["desserts-container"]}`}>
      <div className={`${styles["desserts-header"]}`}>
        <h2 id={`${styles["desserts-heading"]}`}>This Season Desserts</h2>
        <button id={`${styles["order-button"]}`} onClick={() => navigate('/order')}>
          Order a Delivery 
          <img src={icon} className={styles.icon} alt="desserts" />
        </button>
      </div>
      <div className={`${styles["desserts"]}`}>
        {dessertItems.map((dessert) => (
          <div key={dessert.id} className={`${styles["desserts-card"]}`}>
            <img 
              src={imgGalary[dessert.image]} 
              alt={dessert.title} 
              className={`${styles["desserts-image"]}`} />
            <div className={`${styles["desserts-head"]}`}>
              <h3>{dessert.title}</h3>
              <p className={`${styles["desserts-price"]}`}>${dessert.price}</p>
            </div>
            <p className={`${styles["desserts-description"]}`}>{dessert.description}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Desserts;
