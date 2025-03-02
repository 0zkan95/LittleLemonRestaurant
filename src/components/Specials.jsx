import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Specials.module.css'
import greek from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemon from "../images/lemon dessert.jpg";
import '@fontsource/karla';
import '@fontsource/markazi-text';





const Specials = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styles["spe-container"]}`}>
            <div className={styles.section1}>
                <h2>This weeks specials</h2>
                <button onClick={() => navigate('/order')}>
                    Order Online
                </button>
            </div>
            <div className={styles.section2}>
                <div className={styles.food1}>
                    <div className={styles.img}>
                        <img 
                            src={greek} 
                            alt="greek salad" 
                            className={`${styles["food-img"]}`} />
                    </div>
                    <div className={styles.heading}>
                        <h4>Greek Salad</h4>
                        <h5>$8.00</h5>
                    </div>
                    <div className={styles.description}>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </div>
                </div>
                <div className={styles.food1}>
                    <div className={styles.img}>
                        <img 
                            src={bruchetta} 
                            alt="bruchetta" 
                            className={`${styles["food-img"]}`}
                            style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.heading}>
                        <h4>Bruchetta</h4>
                        <h5>$12.00</h5>
                    </div>
                    <div className={styles.description}>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic, seasoned with salt, and drizzled with olive oil, creating a delightful appetizer.</p>
                    </div>
                </div>
                <div className={styles.food1}>
                    <div className={styles.img}>
                        <img 
                            src={lemon} 
                            alt="bruchetta" 
                            className={`${styles["food-img"]}`} />
                    </div>
                    <div className={styles.heading}>
                        <h4>Lemon Dessert</h4>
                        <h5>$8.00</h5>
                    </div>
                    <div className={styles.description}>
                        <p>This comes straight from grandma’s cherished recipe book, every last ingredient has been sourced and is as authentic and nostalgic as can be imagined.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Specials;