import React, { useState } from "react";
import '../styles/Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    seats: "indoor",
    occasion: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Your table has been booked successfully!");
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
            onChange={handleChange}
            required
          />
        </label>

        {/* Time Input */}
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        {/* Guests Input */}
        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            min="1"
            defaultValue={2}
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
