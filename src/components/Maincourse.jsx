import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/MainCourse.module.css';
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
import '@fontsource/karla';
import '@fontsource/markazi-text';
import { mainCourses } from "../data";

const mainCourseItems = [...mainCourses]
const imgGalary = {
  Bruschetta: Bruschetta,
  Falafel: Falafel,
  GreekSalad: GreekSalad,
  GrilledBrouchetta: GrilledBrouchetta,
  GrilledCheken: GrilledCheken,
  GrilledFish: GrilledFish,
  GrilledSalmon: GrilledSalmon,
  LentilWaff: LentilWaff,
  MediterChicken: MediterChicken,
  MediterPasta: MediterPasta,
  TurPanini: TurPanini,
  MedPizza: MedPizza
}



const MainCourse = () => {

  const navigate = useNavigate();

  return (
    <div className={`${styles["main-course-container"]}`}>
      <div className={`${styles["mains-header"]}`}>
        <h2 id={`${styles["mains-heading"]}`}>This Season Menu</h2>
        <button className={`${styles["mains-button"]}`} onClick={() => navigate('/order')}>
          Order a Delivery
          <img src={icon} className={styles.icon} alt="main courses" />
        </button>
      </div>

      <div className={`${styles["main-course"]}`}>
        {mainCourseItems.map((course) => (
          <div key={course.id} className={`${styles["course-card"]}`}>
            <img
              src={imgGalary[course.image]}
              alt={course.title}
              className={`${styles["course-image"]}`}
            />
            <div className={`${styles["course-head"]}`}>
              <h3>{course.title}</h3>
              <p className={`${styles["course-price"]}`}>${course.price}</p>
            </div>

            <p className={`${styles["course-description"]}`}>
              {course.description}
            </p>

          </div>
        ))}
      </div>
    </div>

  );
};

export default MainCourse;
