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
  font-size: 24px;
  color: #fff;
  span {
    font-size: 14px;
    color: #888;
  }
`;

const NightsText = styled.p`
  font-size: 16px;
  color: #fff;
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
  onSubmitQuery: () => void; // New prop to handle submit query
}

const PriceCard: React.FC<PriceCardProps> = ({
  totalPackagePrice,
  pricePerAdult,
  nights,
  emiPrice,
  emiLink,
  onSubmitQuery, // Get the function passed from parent component
}) => {
  return (
    <CardContainer>
      <Heading>Starting from</Heading>

      <PriceText>
        ₹{totalPackagePrice.toLocaleString()}
        <span>Per Person</span>
      </PriceText>

      {pricePerAdult !== undefined && (
        <PriceText>
          ₹{pricePerAdult.toLocaleString()}
          <span>Per Person</span>
        </PriceText>
      )}

      <NightsText>{nights} Nights Stay</NightsText>

      {/* Display EMI details if available */}


      {/* Button triggers the popup visibility */}
      <SubmitButton onClick={onSubmitQuery}>SUBMIT YOUR QUERY</SubmitButton>
    </CardContainer>
  );
};

export default PriceCard;