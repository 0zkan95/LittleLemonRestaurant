import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import '../styles/Booking.css';
import { useNavigate } from "react-router-dom";


const avaibleTimesReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return action.payload;
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

const useBookingAPI = () => {
  const fetchAPI = async (date) => {
    // Simulate fetching available times
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  };

  const submitAPI = async (formData) => {
    // Simulate form submission
    console.log("Form data submitted:", formData);
    return true; // Simulate successful submission
  };

  return { fetchAPI, submitAPI };
};


const Booking = () => {

  const [availableTimes, dispatch] = useReducer(avaibleTimesReducer, []);
  const { fetchAPI, submitAPI } = useBookingAPI(); // Using custom hook
  const navigate = useNavigate();  // Initializing useNavigate

  // Fetch availble times for today's date
  const initializeTimes = async () => {
    const today = new Date().toISOString().split("T")[0]; //Get today's date in YYYY-MM-DD
    const times = await fetchAPI(today); //Fetch avaible times for today
    dispatch({ type: "INITIALIZE_TIMES", payload: times });
  };

  // Fetch vailable times for a selected date
  const updateTimes = async (date) => {
    const times = await fetchAPI(date); // Fetch available times for the selected date
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  // Initialize available times when the component mounts
  useEffect(() => {
    initializeTimes();
  }, [])

  // Handle date selection
  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    setFormData({...formData, date: selectedDate });  //Update formData
    updateTimes(selectedDate); // Fetch available times
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const reservationDetails = {};
    for (let [key, value] of formData.entries()) {
      reservationDetails[key] = value;
    }



    const isSubmitted = await submitAPI(reservationDetails); //access submitAPI 
    if (isSubmitted) {
      navigate("/confirmed"); // Navigate to the confirmation page
    } else {
      alert("Failed to submit reservation. Please try again.")
    }
  };



  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    seats: "indoor",
    occasion: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  return (
    <div className="booking-container">
      <h2>Book a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Date Input */}
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleDateChange}
            required
          />
        </label>

        {/* Time Input */}
        <label>
          Time:
          <select
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </label>

        {/* Guests Input */}
        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            min="1"
            max="2"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </label>

        {/* Seats Input */}
        <label>
          Seating Preference:
          <select
            name="seats"
            value={formData.seats}
            onChange={handleChange}
          >
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </label>

        {/* Occasion Input */}
        <label>
          Occasion:
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select an Occasion</option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="business">Business Meeting</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Special Requests */}
        <label>
          Special Requests:
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Enter any special requests here..."
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Book My Table
        </button>
      </form>

      {/* Alternative Contact Buttons */}
      <div className="contact-options">
        <button
          className="call-btn"
          onClick={() => alert("Please call us at +1-234-567-890!")}
        >
         <i className="fas fa-phone-alt"></i>
          Prefer to Call
        </button>
        <button
          className="email-btn"
          onClick={() => alert("Email us at bookings@example.com!")}
        >
          <i className="fas fa-envelope"></i>
          Prefer to Email
        </button>
      </div>
    </div>
  );
};

export default Booking;
