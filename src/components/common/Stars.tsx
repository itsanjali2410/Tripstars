import React from 'react';
import styled from 'styled-components';
import google from "../../assets/icons/google.png";
import customer from "../../assets/icons/customer-review.png";
import services from "../../assets/icons/24-hours-support.png";

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: #f5f5f5;
  padding: 1rem 1rem;
  text-align: center;

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      margin-bottom: 8px;
    }

    .main {
      font-weight: 600;
      font-size: 16px;
      color: #222;
      margin-bottom: 4px;
    }

    .sub {
      font-size: 12px;
      color: #666;
    }

    &.rating .main {
      color: #f4b400;
    }

    &.highlight .main {
      color: #ff5733;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    .stat {
      img {
        width: 24px;
        height: 24px;
      }
      .main {
        font-size: 13px;
      }
      .sub {
        font-size: 10px;
      }
    }
  }
`;

const Stars: React.FC = () => {
  return (
    <StatsWrapper>
      <div className="stat rating">
        <img src={google} alt="Google Reviews" />
        <div className="main">★ 4.9</div>
        <div className="sub">(12,800 reviews)</div>
      </div>

      <div className="stat highlight">
        <img src={customer} alt="Happy Customers" />
        <div className="main">20k+ Bookings</div>
        <div className="sub">Happy Passengers</div>
      </div>

      <div className="stat">
        <img src={services} alt="Customer Service" />
        <div className="main">24/7</div>
        <div className="sub">Customised Service</div>
      </div>
    </StatsWrapper>
  );
};

export default Stars;
