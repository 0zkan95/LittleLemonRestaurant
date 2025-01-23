import React from "react";
import '../styles/History.css';
import owner1 from "../images/Mario and Adrian A.jpg";
import owner2 from "../images/Mario and Adrian b.jpg";



const History = () => {
    return (
        <div className="history-container">
            <div className="history-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is owned by two
                    Italian brothers, Mario and Adrian,
                    who moved to the United States to
                    pursue their shared dream of owning
                    a restaurant. To craft the menu,
                    Mario relies on family recipes and
                    his experience as a chef in Italy.
                    Adrian does all the marketing for the
                    restaurant and led the effort to expand
                    the menu beyond classic Italian to
                    incorporate additional cuisines from
                    the Mediterranean region.
                    <br />
                    Based in Chicago, Illinois, Little Lemon 
                    is a family owned Mediterranean restaurant*, 
                    focused on traditional recipes served with a 
                    modern twist.
                    <br />
                    The chefs draw inspiration from Italian, 
                    Greek, and Turkish culture and have a
                     menu of 12-15 items that they rotate
                      seasonally.
                    <br />
                    The restaurant has a rustic and relaxed 
                    atmosphere with moderate prices, making 
                    it a popular place for a meal any time of
                     the day.
                    <br />
                    Little Lemon is owned by two Italian
                     brothers, Mario and Adrian, who moved
                      to the United States to pursue their 
                      shared dream of owning a restaurant.
                    <br />
                    To craft the menu, Mario relies on family
                     recipes and his experience as a chef in 
                     Italy.
                    <br />
                    Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.
                </p>
            </div>

            <div className="history-images">
                <div className="image-container">
                    <img src={owner1} alt="Owner 1" />
                </div>
                <div className="image-container">
                    <img src={owner2} alt="Owner 2" />
                </div>
            </div>
        </div>
    );
};

export default History;
