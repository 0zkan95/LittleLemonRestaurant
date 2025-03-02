import React from "react";
import styles from '../styles/About.module.css';
import {  useNavigate } from 'react-router-dom';
import ownerimg1 from '../images/Mario and Adrian A.jpg';
import ownerimg2 from '../images/Mario and Adrian b.jpg';
import '@fontsource/karla';
import '@fontsource/markazi-text';


const Aboutt = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styles["about-container"]}`}>
            <div className={`${styles["about-text"]}`}>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is owned by two Italian brothers,
                Mario and Adrian, who moved to the United States
                to pursue their shared dream of owning a restaurant.

                To craft the menu, Mario relies on family recipes
                and his experience as a chef in Italy. Adrian does
                all the marketing for the restaurant and led the
                 effort to expand the menu beyond classic Italian
                 to incorporate additional cuisines from the
                 Mediterranean region.
                </p>
                <button onClick={() => navigate('/about')} className={`${styles["readmore"]}`}>
                    Read More
                </button>
            </div>
            <div className={`${styles["owners-img"]}`}>
                <div >
                    <img src={ownerimg1} alt="owners 1" id={`${styles["owner1-img"]}`} />
                </div>
                <div >
                    <img src={ownerimg2} alt="owners 2" id={`${styles["owner2-img"]}`}/>
                </div>
            </div>
        </div>
    )
}

export default Aboutt;
