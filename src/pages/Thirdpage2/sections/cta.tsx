import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  text-align: center;
  padding: 30px 0;
  margin: 0px 0;
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

const MobileOnlyStickyFooter = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    z-index: 100;
    text-align: center;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    to right,
    #c99603 0%,
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
    width: 100%;
  }
`;

interface PriceCardProps {
  onSubmitQuery: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({ onSubmitQuery }) => {
  return (
    <>
      <CardContainer>
        {/* Other content can go here */}
      </CardContainer>

      <MobileOnlyStickyFooter>
        <SubmitButton onClick={onSubmitQuery}>Let’s Begin</SubmitButton>
      </MobileOnlyStickyFooter>
    </>
  );
};

export default PriceCard;
