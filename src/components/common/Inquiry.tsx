import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface TripInquiryFormProps {
  onClose: () => void;
}

const formBoxShadow = "0px 6px 15px rgba(0, 0, 0, 0.15)";
const inputStyles = `
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: ${formBoxShadow};
  transition: all 0.3s ease-in-out;

  h2 {
    color: #222;
    margin-bottom: 30px;
    text-align: center;
  }

  label {
    font-weight: 600;
    margin-bottom: 6px;
    display: block;
    color: #333;
  }

  input, select {
    ${inputStyles}
    font-family: inherit;
  }

  input[type="date"] {
    min-height: 44px;
  }

  button {
    margin-top: 10px;
    background: #000;
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.3s;
  }

  button:hover {
    background: #444;
  }

  button:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const TripInquiryForm: React.FC<TripInquiryFormProps> = ({ onClose }) => {

  const navigate = useNavigate();
  const todayDate = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    destination: "",
    travel_date: "",
    bookingTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "contact" && !/^\d{0,10}$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contactRegex = /^[6-9]\d{9}$/;
    if (!contactRegex.test(formData.contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post("https://stagingbackend.tripstars.in/submit-form", formData);
      if (response.status === 200) {
        navigate("/thankyou");
      } else {
        alert(response.data.message || "Submission failed. Please try again.");
      }
    } catch (error: any) {
      console.error("API Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <h2>Plan Your Trip</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="contact">Contact Number</label>
      <input
        id="contact"
        type="tel"
        name="contact"
        placeholder="10-digit mobile number"
        value={formData.contact}
        onChange={handleChange}
        inputMode="numeric"
        required
      />

      <label htmlFor="destination">Destination</label>
      <input
        id="destination"
        type="text"
        name="destination"
        placeholder="Where do you want to go?"
        value={formData.destination}
        onChange={handleChange}
        required
      />

      <label htmlFor="travel_date">Travel Date</label>
      <input
        id="travel_date"
        type="date"
        name="travel_date"
        min={todayDate}
        value={formData.travel_date}
        onChange={handleChange}
        required
      />

      <label htmlFor="bookingTime">Booking Time</label>
      <select
        id="bookingTime"
        name="bookingTime"
        value={formData.bookingTime}
        onChange={handleChange}
        required
      >
        <option value="">When are you looking to book?</option>
        <option value="this-week">This Week</option>
        <option value="this-month">This Month</option>
        <option value="Just Inquiry">Just Inquiry</option>
      </select>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </ContactForm>
  );
};

export default TripInquiryForm;
