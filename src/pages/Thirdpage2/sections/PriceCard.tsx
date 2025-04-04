import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../../../components/common/Popup";// ✅ Make sure the path is correct

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  text-align: center;
  padding: 30px 0;
  margin: 30px 0;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 20px 0;
    margin: 20px 0;
  }
`;

const Heading = styled.div`
  font-size: 18px;
  color: rgb(255, 247, 247);
  margin-bottom: 10px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const PriceText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;

  span {
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    margin-top: 4px;
  }

  @media (max-width: 480px) {
    font-size: 32px;

    span {
      font-size: 14px;
    }
  }
`;

const EMIContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  margin: 15px 0;
  text-align: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  a {
    color: #d5a527;
    margin-left: 5px;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    font-size: 13px;

    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const NightsText = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    to right,
    #c99603 0%,
    #f4e628 24%,
    #cd9c01 65%,
    #b38201 100%
  );
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
    width: 57%;
  }
`;

interface PriceCardProps {
  totalPackagePrice: number;
  pricePerAdult?: number;
  nights: number;
  emiPrice: number;
  emiLink: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  totalPackagePrice,
  pricePerAdult,
  nights,
  emiPrice,
  emiLink,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <CardContainer>
      <Heading>Starting from</Heading>

      <PriceText>
        ₹{totalPackagePrice.toLocaleString()}
        <span>Per Package</span>
      </PriceText>

      {pricePerAdult !== undefined && (
        <PriceText>
          ₹{pricePerAdult.toLocaleString()}
          <span>Per Person</span>
        </PriceText>
      )}

      <NightsText>{nights} Nights Stay</NightsText>

      <EMIContainer>
        <img
          src="https://img.icons8.com/emoji/48/null/money-bag-emoji.png"
          alt="EMI Icon"
        />
        <span>No Cost EMI Starts from ₹{emiPrice}</span>
        <a href={emiLink}>see option</a>
      </EMIContainer>

      <SubmitButton onClick={handleSubmit}>SUBMIT YOUR QUERY</SubmitButton>

      {isPopupOpen && (
        <Popup

          onClose={handleClosePopup}
        />
      )}
    </CardContainer>
  );
};

export default PriceCard;
