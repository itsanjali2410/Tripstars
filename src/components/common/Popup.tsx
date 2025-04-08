import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import logoImg from "../../assets/images/logo/logo.webp";
import logo1 from "../../assets/popup/Customers.png";
import logo2 from "../../assets/popup/Awardwinners .png";
import logo3 from "../../assets/popup/Customerservice.png";
import axios from "axios";
import ThankYou from "./thankyou";

// Animation for popup fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled components
const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); // semi-transparent overlay
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;



const PopupContent = styled.div`
  background: white;
  border-radius: 15px;
  width: 700px;
  display: flex;
  position: relative;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    max-height: 90vh;
  }
`;

const LeftPanel = styled.div`
  background: rgb(11, 11, 11);
  color: white;
  padding: 20px;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-logo {
    margin-bottom: 20px;
    img {
      width: 150px;
      height: auto;
    }
  }

  .logo-container {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    img {
      width: 100px;
      height: auto;
    }
  }

  ul {
    list-style: none;
    margin: 15px 0 0 0;
    padding: 0;
    li {
      font-size: 14px;
      display: flex;
      align-items: center;
      margin: 10px 0;
      gap: 8px;
    }
  }

  /** Hide LeftPanel on screens smaller than 768px */
  @media (max-width: 768px) {
    display: none;
  }
`;


const RightPanel = styled.div`
  padding: 20px;
  flex: 2;
  position: relative;
  width: 100%; /* Increased width of the form area */

  @media (max-width: 768px) {
    flex: none;
    padding-left: 33px;
    padding-top: 10%;
    padding-bottom: 10%
    height: 80vh;
    width: 100%; /* Ensures form still takes full width on smaller devices */
  }

  h3 {
    font-size: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .row {
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  label {
    font-size: 12px;
    color: #555;
  }

  input,
  select {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 12px; /* Increased font size */
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #0a0a52;
    }

    @media (max-width: 768px) {
      padding: 15px;
      font-size: 14px; /* Adjust font size for smaller screens */
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .custom-datepicker {
    width: 100%;
    border: 1px solid #ddd;
    padding: 12px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:hover {
      border-color: #0a0a52;
    }

    @media (max-width: 768px) {
      padding: 11px;
    }
  }

  button {
    padding: 6px;
    background: rgb(9, 9, 9);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background: #218838;
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: black;

  &:hover {
    color: #555;
  }
`;

const PaxCounterWrapper = styled.div`
  display: flex;
  gap: 20px; /* Space between "Number of Pax" and "Number of Children" */
  align-items: center; /* Align items vertically centered */
  justify-content: flex-start; /* Ensure they are aligned to the left */
  flex-wrap: wrap; /* Allow wrapping in case of small screens */
`;

const PaxCounter = styled.div`
  display: flex;
  flex-direction: column; /* Arrange label vertically on top */
  align-items: center; /* Align label, count, and buttons at the center */
  gap: 5px; /* Space between label and count + buttons */

  label {
    font-size: 14px;

  }

  .counter-row {
    display: flex; /* Make the count and buttons appear in a row */
    gap: 10px; /* Space between the count and the buttons */
    align-items: center;
  }

  span {
    font-size: 16px;
  }

  button {
    padding: 5px 10px;
    background: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background: #bbb;
    }

    &:disabled {
      background: #000;
      cursor: not-allowed;
    }
  }
`;

interface PopupProps {
  title?: string;
  image?: string;
  pricing?: string;
  info?: { icon: string; text: string }[];
  onClose: () => void;
}


const Popup: React.FC<PopupProps> = ({ title, image, pricing, info, onClose }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [pax, setPax] = useState(1);
  const [child, setChild] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    destination: "",
    departureCity: "",
    bookingTime: "",
  });

  // Open popup after 1 seconds

  const closePopup = () => onClose();
  const navigate = useNavigate();
  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "popup-container") {
      if (window.confirm("Are you sure you want to close the form? Your data will be lost.")) {
        closePopup();
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "contact" && !/^\d*$/.test(value)) return; // prevents non-numeric input

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handlePaxChange = (increment: boolean) => setPax((prev) => (increment ? prev + 1 : prev - 1));
  const handleChildChange = (increment: boolean) => setChild((prev) => (increment ? prev + 1 : prev - 1));

  const API_URL = "https://stagingbackend.tripstars.in"; // ✅ Ensure the correct backend URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!startDate) {
      alert("Please select a travel date!");
      return;  // ✅ Properly exiting the function
    }

    // Prepare the form data
    const formDataToSend = {
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      destination: formData.destination,
      departure_city: formData.departureCity, // ✅ Fixed field name
      travel_date: startDate.toISOString().split("T")[0], // ✅ Fixed format
      bookingTime: formData.bookingTime,
      pax,
      child,
    };

    try {
      // ✅ Send form data to backend API
      const response = await axios.post(`${API_URL}/submit-form`, formDataToSend);

      if (response.status === 200) {

        navigate("/thankyou");
      }

      // ✅ Reset the form and close popup
      closePopup(); // ✅ Using correct function
      setFormData({
        name: "",
        contact: "",
        email: "",
        destination: "",
        departureCity: "",
        bookingTime: "",
      });
      setStartDate(null);
      setPax(1);
      setChild(0);

    } catch (error) {
      console.error("❌ API Error:", error);
      alert("❌ Failed to submit the form. Please try again.");
    }
  };



  return (
    <PopupContainer id="popup-container" onClick={handleOutsideClick}>
      <PopupContent>
        <LeftPanel>
          <div className="main-logo">
            <img src={logoImg} alt="Main Logo" />
          </div>
          <div className="logo-container">
            <img src={logo1} alt="15k Customers" />
            <img src={logo2} alt="Award" />
            <img src={logo3} alt="Customer Service" />
          </div>
          <ul>
            <li>
              <FaCheckCircle size={14} /> 100% Customised Trips
            </li>
            <li>
              <FaCheckCircle size={14} /> 95% Visa Success Rate
            </li>
            <li>
              <FaCheckCircle size={14} /> 24x7 Concierge
            </li>
          </ul>
        </LeftPanel>

        <RightPanel>
          <CloseButton onClick={closePopup}>
            <FaTimes />
          </CloseButton>
          <h3>Plan Your Dream Vacation</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength={10}
              placeholder="Contact Number"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <div className="row">
              <div>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Destination</option> {/* <- empty value here */}
                  <option value="maldives">Maldives</option>
                  <option value="bali">Bali</option>
                  <option value="dubai">Dubai</option>
                  <option value="thailand">Thailand</option>
                  <option value="singapore">Singapore</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="hongkong">Hong Kong</option>
                  <option value="europe">Europe</option>
                  <option value="vietnam">Vietnam</option>
                  <option value="australia">Australia</option>
                  <option value="ladakh">Ladakh</option>
                  <option value="srilanka">Sri Lanka</option>
                  <option value="nepal">Nepal</option>
                  <option value="kashmir">Kashmir</option>
                  <option value="goa">Goa</option>
                  <option value="mauritius">Mauritius</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="himachal">Himachal</option>
                  <option value="kerala">Kerala</option>
                  <option value="bangkok">Bangkok</option>
                  <option value="baku">Baku</option>
                  <option value="turkey">Turkey</option>
                  <option value="Other">Any other place?</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="departureCity"
                  value={formData.departureCity}
                  onChange={handleChange}
                  placeholder="Departure City"
                  required
                />
              </div>
            </div>

            <select
              id="bookingTime"
              name="bookingTime"
              value={formData.bookingTime}
              onChange={handleChange}
              required
            >
              <option value="">Select timeframe</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="undecided">Just Inquiry</option>
            </select>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
              placeholderText="Pick your travel date"
              isClearable
              className="custom-datepicker"
            />

            <PaxCounterWrapper>
              <PaxCounter>
                <label>Number of Adults</label>
                <div className="counter-row">
                  <button type="button" onClick={() => handlePaxChange(false)} disabled={pax <= 1}>
                    -
                  </button>
                  <span>{pax}</span>
                  <button type="button" onClick={() => handlePaxChange(true)}>
                    +
                  </button>
                </div>
              </PaxCounter>
              <PaxCounter>
                <label>Number of Children</label>
                <div className="counter-row">
                  <button type="button" onClick={() => handleChildChange(false)} disabled={child <= 0}>
                    -
                  </button>
                  <span>{child}</span>
                  <button type="button" onClick={() => handleChildChange(true)}>
                    +
                  </button>
                </div>
              </PaxCounter>

            </PaxCounterWrapper>

            <button type="submit">Submit</button>
          </form>
        </RightPanel>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;

function setIsVisible(arg0: boolean) {
  throw new Error("Function not implemented.");
}
