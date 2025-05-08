import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactbanner from "../../assets/contact/contactbanner.webp";
import ThankYou from "../../components/common/thankyou";
import axios from "axios";
import FloatingContactButton from "../Home/sections/Floating";
import Cta from "../Thirdpage2/sections/cta";
import Stars from "../../components/common/Stars";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa, rgb(255, 255, 255));
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
  padding: 25px;
  border-radius: 10px;
  box-shadow: ${formBoxShadow};
  text-align: center;

  h2 {
    color: rgb(0, 0, 0);
    margin-bottom: 35px;
  }

  input, textarea {
    ${inputStyles}
  }

  button {
    background: rgb(0, 0, 0);
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s;
  }

  button:hover {
    background: rgb(0, 0, 0);
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
  { icon: <FaMapMarkerAlt />, label: "601 Bhairaav Milestone, Thane W, Mumbai 400604" }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    destination: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate 10-digit contact number (starts with 6-9)
    const contactRegex = /^[6-9]\d{9}$/;
    if (!contactRegex.test(formData.contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const response = await axios.post("https://stagingbackend.tripstars.in/submit-form", {
        name: formData.name,
        contact: formData.contact,
        destination: formData.destination,
        message: formData.message,
      });
  
      if (response.data.success) {
        navigate("/thankyou");
      } else {
        alert(response.data.message || "Something went wrong. Please try again later.");
      }
    } catch (error: any) {
      console.error("API Error:", error);
      alert("Failed to send the message. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <ContactContainer>
      <Banner>
        <img src={contactbanner} alt="Contact Us" />


      </Banner>
      <ContactSection>
        <ContactForm onSubmit={handleSubmit}>
          <h2>Plan Your Trip</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only digits and up to 10 characters
              if (/^\d{0,10}$/.test(value)) {
                setFormData((prevData) => ({ ...prevData, contact: value }));
              }
            }}
            required
            inputMode="numeric"
            pattern="[6-9]{1}[0-9]{9}"
          />

          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination || ""}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your trip..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
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
