import React from "react";
import '../styles/Testimonials.css';
import star from '../images/star.png';
import review1 from '../images/1.png';
import review2 from '../images/2.png';
import review3 from '../images/3.png';
import review4 from '../images/4.png';




const Testimonials = () => {
    return (
        <div className="tes-container">
            <h2>Testimonials</h2>
            <div className="reviews">
                <div className="review-box">
                    <h4>User Name</h4>
                    <div className="review-center">
                        <div className="img-box">
                            <img src={review1} alt="person1" className="img-box" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Vel, odio!
                        </p>
                    </div>
                    <div className="star">
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                    </div>
                </div>
                <div className="review-box">
                    <h4>User Name</h4>
                    <div className="review-center">
                        <div className="img-box">
                        <img src={review2} alt="person2" className="img-box" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Vel, odio!
                        </p>
                    </div>
                    <div className="star">
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                    </div>
                </div>
                <div className="review-box">
                    <h4>User Name</h4>
                    <div className="review-center">
                        <div className="img-box">
                        <img src={review3} alt="person3" className="img-box" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Vel, odio!
                        </p>
                    </div>
                    <div className="star">
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                    </div>
                </div>
                <div className="review-box">
                    <h4>User Name</h4>
                    <div className="review-center">
                        <div className="img-box">
                        <img src={review4} alt="person4" className="img-box" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Vel, odio!
                        </p>
                    </div>
                    <div className="star">
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                        <img src={star} alt="star" className="star"  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;