import React from "react";
import Footer from "../components/Footer";
import MainCourse from "../components/Maincourse";
import Drinks from "../components/Drinks";
import Desserts from "../components/Dessert";



const Menu = () => {
    return (
        <>
            <MainCourse />
            <Drinks />
            <Desserts />
            <Footer />
        </>
    )
}

export default Menu;