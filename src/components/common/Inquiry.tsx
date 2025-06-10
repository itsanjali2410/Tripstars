import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

interface TripInquiryFormProps {
  onClose: () => void;
}
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const formBoxShadow = "0px 10px 30px rgba(0, 0, 0, 0.1)";
const inputBorderColor = "#ccc";
const inputFocusBorderColor = "#007BFF";
const buttonBgColor = "#ffd700";
const buttonHoverBgColor = "#ffd700";

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  padding: 40px 35px;
  border-radius: 12px;
  box-shadow: ${formBoxShadow};
  transition: all 0.3s ease-in-out;

  h2 {
    color: #222;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
  }

  label {
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
    font-size: 1rem;
  }

  input,
  select {
    width: 100%;
    padding: 14px 16px;
    margin-bottom: 20px;
    border: 1.8px solid ${inputBorderColor};
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${inputFocusBorderColor};
    }

    &::placeholder {
      color: #999;
      font-style: italic;
    }
  }

  input[type="date"] {
    min-height: 44px;
  }

  button {
    margin-top: 10px;
    background: ${buttonBgColor};
    color: #fff;
    padding: 14px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    transition: background 0.3s ease, box-shadow 0.3s ease;

    &:hover:not(:disabled) {
      background: ${buttonHoverBgColor};
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
      box-shadow: none;
      color: #666;
    }

    &:focus-visible {
      outline: 2px solid ${inputFocusBorderColor};
      outline-offset: 2px;
    }
  }
`;

const destinationMap: { [key: string]: string } = {
  maldives: "Maldives",
  bali: "Bali",
  dubai: "Dubai",
  thailand: "Thailand",
  singapore: "Singapore",
  malaysia: "Malaysia",
  hongkong: "Hong Kong",
  europe: "Europe",
  vietnam: "Vietnam",
  australia: "Australia",
  ladakh: "Ladakh",
  srilanka: "Sri Lanka",
  nepal: "Nepal",
  kashmir: "Kashmir",
  goa: "Goa",
  mauritius: "Mauritius",
  bhutan: "Bhutan",
  himachal: "Himachal",
  kerala: "Kerala",
  bangkok: "Bangkok",
  baku: "Baku",
  turkey: "Turkey",
};


const TripInquiryForm: React.FC<TripInquiryFormProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const todayDate = new Date().toISOString().split("T")[0];

  // Extract and map destination slug from the path
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const destinationSlug = pathSegments[0]?.toLowerCase() || "";
  const mappedDestination = destinationMap[destinationSlug] || "";
 const urlParams = new URLSearchParams(window.location.search);
const utmSource = urlParams.get("utm_source") || "";
const utmMedium = urlParams.get("utm_medium") || "";
const utmCampaign = urlParams.get("utm_campaign") || "";

  const [formData, setFormData] = useState({
  name: "",
  contact: "",
  destination: mappedDestination,
  travel_date: "",
  bookingTime: "",
  utmSource,
  utmMedium,
  utmCampaign,
});


  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      if (name === "contact" && !/^\d{0,10}$/.test(value)) return;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const contactRegex = /^[6-9]\d{9}$/;
  if (!contactRegex.test(formData.contact)) {
    alert("Please enter a valid 10-digit contact number.");
    return;
  }

  setIsSubmitting(true);

  const currentDomain =
    typeof window !== "undefined" ? window.location.origin : "unknown";

  try {
    const response = await axios.post("https://stagingbackend.tripstars.in/submit-form", {
      ...formData,
      sourceDomain: currentDomain,
    });

    if (response.data.success) {
      // Push to dataLayer if exists
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "tripInquirySubmitted",
          formData: { ...formData },
          sourceDomain: currentDomain,
          utm: {
            source: formData.utmSource,
            medium: formData.utmMedium,
            campaign: formData.utmCampaign,
          },
        });
      }

      // Redirect to thank-you page
      window.location.href = "/thankyou";
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
    <ContactForm onSubmit={handleSubmit} noValidate>
      <h2>Plan Your Trip</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your full name"
        value={formData.name}
        onChange={handleChange}
        required
        autoComplete="name"
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
        autoComplete="tel"
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
        autoComplete="off"
        disabled={!!mappedDestination}
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
        <option value="" disabled>
          When are you looking to book?
        </option>
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
