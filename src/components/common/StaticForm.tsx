import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logo1 from "../../assets/popup/Customers.png";
import logo2 from "../../assets/popup/Awardwinners .png";
import logo3 from "../../assets/popup/Customerservice.png";
import logoImg from "../../assets/images/logo/logo.webp";
import axios from "axios";
// Optional fade-in animation (can be removed if not needed)
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

// Use a static container instead of a Popup overlay
const StaticContainer = styled.div`
  padding: 2rem;
  background:rgb(255, 255, 255);
  animation: ${fadeIn} 0.4s ease-out;
`;

const ContentWrapper = styled.div`
  background: white;
  border-radius: 15px;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  background: rgb(11, 11, 11);
  color: white;
  padding: 20px;
  flex: 1;
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
  }

  img {
    width: 70px;
    height: auto;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightPanel = styled.div`
  padding: 20px;
  flex: 2;
  position: relative;


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

const StaticForm: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [pax, setPax] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [child, setChild] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    destination: "",
    departureCity: "",
    bookingTime: "",
  });
  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Restrict contact input to digits only
    if (name === "contact") {
      const digitsOnly = value.replace(/\D/g, ""); // Remove non-digit characters
      if (digitsOnly.length <= 10) {
        setFormData((prev) => ({
          ...prev,
          [name]: digitsOnly,
        }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaxChange = (increment: boolean) => {
    setPax((prev) => (increment ? prev + 1 : prev - 1));
  };

  const handleChildChange = (increment: boolean) => {
    setChild((prev) => (increment ? prev + 1 : prev - 1));
  };

  const API_URL = "https://stagingbackend.tripstars.in"; // ✅ Correct API URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!startDate) {
      alert("Please select a travel date!");
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = {
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      destination: formData.destination,
      departure_city: formData.departureCity,
      travel_date: startDate.toISOString().split("T")[0],
      bookingTime: formData.bookingTime,
      pax,
      child,
    };

    try {
      const response = await axios.post(`${API_URL}/submit-form`, formDataToSend);

      if (response.status === 200) {
        // Redirecting to thank you page – this will stop further code execution
        window.location.href = "/thankyou";
        return;
      }

      // Reset the form only if not redirected
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
      alert("Form submission failed. Please try again later.");

      setTimeout(() => {
        setIsSubmitting(false); // Re-enable only if staying on the same page
      }, 2000);
    }
  };


  return (
    <StaticContainer>
      <ContentWrapper>
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
              placeholder="Your Contact Number"
              required
              pattern="[0-9]{10}"
              title="Please enter a 10-digit contact number"
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
                <select name="destination" value={formData.destination} onChange={handleChange} required>
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
                  <option value="Other">Any other place ?</option>
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
              <option value="">When are you looking to Book?</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="Just Inquiry">Just Inquiry</option>
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

          </form>
        </RightPanel>
      </ContentWrapper>
    </StaticContainer>
  );
};

export default StaticForm;
function setIsVisible(arg0: boolean) {
  throw new Error("Function not implemented.");
}

