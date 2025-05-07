import React from 'react';
import styled from 'styled-components';
import google from "../../assets/icons/google.png";
import customer from "../../assets/icons/customer-review.png";
import services from "../../assets/icons/24-hours-support.png";

const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 1rem;
  flex-wrap: wrap;
  font-size: 14px;
  background: transparent; /* Light background */
  padding: 1rem;
  border-radius: 8px;

  @media (max-width: 600px) {
  gap: 5px;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: flex-start;
  padding: 1rem 1.5rem; /* Balanced horizontal padding */
  scroll-snap-type: x mandatory; /* Optional: enables snapping */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */
}


  .stat {
    text-align: center;
    min-width: 120px;

    img {
      width: 35px !important;
      height: 35px !important;
      margin-bottom: 5px;
      object-fit: contain;
      flex-shrink: 0;
      display: inline-block;
    }

    .rating {
      color: orange;
      font-weight: bold;
    }

    .count {
      color: #fff;
    }

    .bold {
      font-weight: bold;
      font-size: 16px;
      color: orange;
    }

    .subtext {
      color: #fff;
    }
  }
`;

const Stars: React.FC = () => {
  return (
    <StatsWrapper>
      <div className="stat">
        <img src={google} alt="Google" />
        <div className="rating">★ 4.9</div>
        <div className="count">(12,800 reviews)</div>
      </div>
      
      <div className="stat">
        <img src={customer} alt="Happy Customers" />
        <div className="bold">20k+ Bookings</div>
        <div className="subtext">Happy Passengers</div>
      </div>
      <div className="stat">
        <img src={services} alt="Customer Service" />
        <div className="rating">24/7 </div>
        <div className="count">Customised Service</div>
      </div>
    </StatsWrapper>
  );
};

export default Stars;
