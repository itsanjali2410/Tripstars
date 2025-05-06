import React from 'react';
import styled from 'styled-components';
import google from "../../assets/icons/google.png";
import customer from "../../assets/icons/customer-review.png";
import services from "../../assets/icons/customer-service.png"
const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 1rem;
  flex-wrap: wrap;
  font-size: 14px;

  @media (max-width: 600px) {
    gap: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0 1rem;
  }

  .stat {
    text-align: center;
    min-width: 120px;

    img {
      width: 28px;
      height: 28px;
      margin-bottom: 5px;
    }

    .rating {
      color: orange;
      font-weight: bold;
    }

    .count {
      color: #ddd;
    }

    .bold {
      font-weight: bold;
      font-size: 16px;
      color: #fff;
    }

    .subtext {
      color: #ccc;
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
        <img src={services} alt="TripAdvisor" />
        <div className="rating">★ 5.0</div>
        <div className="count">(3,580 reviews)</div>
      </div>
      <div className="stat">
        <img src={customer} alt="Happy Customers" />
        <div className="bold">20k+ Bookings</div>
        <div className="subtext">Happy Passengers</div>
      </div>
    </StatsWrapper>
  );
};

export default Stars;
