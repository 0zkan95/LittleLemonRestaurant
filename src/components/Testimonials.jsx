import React from "react";
import styles from '../styles/Testimonials.module.css';
import star from '../images/star.png';
import review1 from '../images/1.png';
import review2 from '../images/2.png';
import review3 from '../images/3.png';
import review4 from '../images/4.png';
import '@fontsource/karla';
import '@fontsource/markazi-text';




const Testimonials = () => {
    return (
        <div className={`${styles["tes-container"]}`}>
            <h2>Testimonials</h2>
            <div className={styles.reviews}>
                <div className={`${styles["review-box"]}`}>
                    <h4>User Name</h4>
                    <div className={`${styles["review-center"]}`}>
                        <div className={`${styles["img-box"]}`}>
                            <img 
                                src={review1} 
                                alt="person1" 
                                className={`${styles["img-box"]}`} />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Vel, odio!
                        </p>
                    </div>
                    <div>
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                    </div>
                </div>
                <div className={`${styles["review-box"]}`}>
                    <h4>User Name</h4>
                    <div className={`${styles["review-center"]}`}>
                        <div className={`${styles["img-box"]}`}>
                        <img src={review2} alt="person2" className={`${styles["img-box"]}`} />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Vel, odio!
                        </p>
                    </div>
                    <div>
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                    </div>
                </div>
                <div className={`${styles["review-box"]}`}>
                    <h4>User Name</h4>
                    <div className={`${styles["review-center"]}`}>
                        <div className={`${styles["img-box"]}`}>
                        <img src={review3} alt="person3" className={`${styles["img-box"]}`} />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Vel, odio!
                        </p>
                    </div>
                    <div className="star">
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                        <img src={star} alt="star" className={styles.star}  />
                    </div>
                </div>
                <div className={`${styles["review-box"]}`}>
                    <h4>User Name</h4>
                    <div className={`${styles["review-center"]}`}>
                        <div className={`${styles["img-box"]}`}>
                        <img src={review4} alt="person4" className={`${styles["img-box"]}`} />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Vel, odio!
                        </p>
                    </div>
                    <div className="star">
                        <img src={star} alt="star" className={styles.star} />
                        <img src={star} alt="star" className={styles.star} />
                        <img src={star} alt="star" className={styles.star} />
                        <img src={star} alt="star" className={styles.star} />
                        <img src={star} alt="star" className={styles.star} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;