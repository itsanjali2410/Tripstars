import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

import contactbanner from "../../assets/contact/contactbanner.webp";
import FloatingContactButton from "../Home/sections/Floating";
import Cta from "../Thirdpage2/sections/cta";
import Stars from "../../components/common/Stars";
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Banner = styled.div`
  width: 100%;
  text-align: center;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    display: block;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
`;

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


const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: ${formBoxShadow};
  max-width: 350px;
  text-align: center;

  h3 {
    color: rgb(0, 0, 0);
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    padding: 10px;
    background: #f5f7fa;
    border-radius: 6px;
  }
`;

const contactDetails = [
  { icon: <FaPhone />, label: "9875097169", link: "tel:9875097169" },
  { icon: <FaEnvelope />, label: "Info@tripstars.in" },
  { icon: <FaMapMarkerAlt />, label: "1817/1818-B, Navratna Corporate Park, Iscon-Ambli Road, Ahmedabad - 380058" },
  { icon: <FaMapMarkerAlt />, label: "105 Sai Arcade, Mulund W, Mumbai 400080" },
  { icon: <FaMapMarkerAlt />, label: "601 Bhairaav Milestone, Thane W, Mumbai 400604" },
];

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const todayDate = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    destination: "",
    travel_date: todayDate,
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
    <ContactContainer>
      <Banner>
        <img src={contactbanner} alt="Contact Us" />
        <Stars />
      </Banner>

      <ContactSection>
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

        <ContactInfo>
          <h3>Contact Information</h3>
          {contactDetails.map((detail, index) => (
            <div key={index}>
              {detail.icon}{" "}
              {detail.link ? (
                <a href={detail.link} style={{ color: "inherit", textDecoration: "none" }}>
                  {detail.label}
                </a>
              ) : (
                detail.label
              )}
            </div>
          ))}
        </ContactInfo>
      </ContactSection>

      <FloatingContactButton />
      <Cta />
    </ContactContainer>
  );
};

export default Contact;
