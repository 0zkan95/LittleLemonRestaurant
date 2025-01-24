import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/MainCourse.css';
import Bruschetta from '../images/bruschetta.webp';
import Falafel from '../images/falafel.webp';
import GreekSalad from '../images/greek-salad.webp';
import GrilledBrouchetta from '../images/grilled-brouchet.webp';
import GrilledCheken from '../images/grilled-chicken.webp';
import GrilledFish from '../images/grilled-fish.webp';
import GrilledSalmon from '../images/grilled-salmon.webp';
import LentilWaff from '../images/savory-lentil-waffles.webp';
import MediterChicken from '../images/mediterranean-chicken.webp';
import MediterPasta from '../images/pasta.webp';
import TurPanini from '../images/turkey-panini.webp';
import MedPizza from '../images/pizza.webp';
import icon from '../images/courier.jpg';





// data for the main courses
export const mainCourses = [
  {
    id: 1,
    title: "Bruschetta",
    price: "12",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic, seasoned with salt, and drizzled with olive oil, creating a delightful appetizer.",
    image: Bruschetta
  },
  {
    id: 2,
    title: "Falafel",
    price: "10",
    description: "Indulge in our flavorful Falafel, a perfect blend of chickpeas and spices, deep-fried to golden perfection. A delightful vegetarian treat bursting with Mediterranean goodness.",
    image: Falafel
  },
  {
    id: 3,
    title: "Greek Salad",
    price: "8",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSalad
  },
  {
    id: 4,
    title: "Grilled Brouchette",
    price: "28",
    description: "Indulge in the Grilled Brouchette, a savory delight with succulent skewers, perfectly grilled and bursting with Mediterranean flavors—a culinary experience that captivates the senses.",
    image: GrilledBrouchetta
  },
  {
    id: 5,
    title: "Grilled Chicken",
    price: "12",
    description: "Indulge in the savory perfection of our Grilled Chicken, expertly seasoned and cooked to tender perfection. A delicious choice that satisfies the palate with every bite.",
    image: GrilledCheken
  },
  {
    id: 6,
    title: "Grilled Fish",
    price: "12",
    description: "Savor the exquisite Grilled Fish, a culinary delight that captures the essence of the ocean with its perfectly cooked, flavorful fillet. A seafood lover's dream.",
    image: GrilledFish
  },
  {
    id: 7,
    title: "Grilled Salmon",
    price: "14",
    description: "Indulge in the Grilled Salmon, a delectable dish where succulent salmon meets the flame, creating a flavorful masterpiece that satisfies the palate with every bite.",
    image: GrilledSalmon
  },
  {
    id: 8,
    title: "Lentil Waffles",
    price: "8",
    description: "Indulge in the unique delight of our Lentil Waffles – a savory twist on a classic favorite. A wholesome and flavorful experience awaits in every bite.",
    image: LentilWaff
  },
  {
    id: 9,
    title: "Mediterranean Chicken",
    price: "10",
    description: "Savor the exquisite Mediterranean Chicken, a culinary delight featuring tender, seasoned chicken infused with Mediterranean flavors, creating a mouthwatering and satisfying dining experience.",
    image: MediterChicken
  },
  {
    id: 10,
    title: "Mediterranean Pasta",
    price: "8",
    description: "Indulge in the Mediterranean Pasta, a culinary voyage featuring al dente perfection and a symphony of Mediterranean flavors that transport you to a world of savory delight.",
    image: MediterPasta
  },
  {
    id: 11,
    title: "Turkey Panini",
    price: "9",
    description: "Savor the perfection of our Turkey Panini – a symphony of succulent turkey, melted cheese, and zesty condiments in every bite. Unforgettable flavors in every bite.",
    image: TurPanini
  },
  {
    id: 12,
    title: "Mediterranean Pizza",
    price: "9",
    description: "Savor the Mediterranean essence with our pizza, blending flavorful herbs, sun-kissed tomatoes, and premium toppings for an exquisite culinary journey.",
    image: MedPizza
  },
];



const MainCourse = () => {

  const navigate = useNavigate();

  return (
    <div className="main-course-container">
      <div className="mains-header">
        <h2 id="mains-heading">This Season Menu</h2>
        <button className="mains-button" onClick={() => navigate('/order')}>
          Order a Delivery <img src={icon} className="icon" alt="main courses" />
        </button>
      </div>

      <div className="main-course">
        {mainCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-head">
              <h3>{course.title}</h3>
              <p className="course-price">${course.price}</p>
            </div>

            <p className="course-description">{course.description}</p>

          </div>
        ))}
      </div>
    </div>

  );
};

export default MainCourse;
