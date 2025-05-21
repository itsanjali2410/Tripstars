import React from 'react';
import { FaStar, FaCheckCircle, FaUserFriends } from 'react-icons/fa';
import styled from 'styled-components';
import google from "../../../assets/icons/google.png";

const BannerContainer = styled.div`
  background: linear-gradient(90deg, #0a0a0a, #222);
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.6);
  user-select: none;

  @media (max-width: 768px) {
    justify-content: space-around;
    gap: 1.5rem;
    font-size: 1rem;
    padding: 0.8rem 1rem;
  }
`;

const FeatureItem = styled.div<{ alwaysVisible?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: default;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  ${({ alwaysVisible }) =>
    !alwaysVisible &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

const LogoImg = styled.img`
  width: 20px;
  height: 20px;
`;

const Rating = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

const StyledIcon = styled.span`
  color: #FFD700;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

const FeatureBanner: React.FC = () => {
  return (
    <BannerContainer>
      {/* Rating - Always visible */}
      <FeatureItem alwaysVisible>
        <LogoImg src={google} alt="Google" />
        <Rating>4.9</Rating>
        <StyledIcon><FaStar /></StyledIcon>
        <span>Rated</span>
      </FeatureItem>

      {/* Assistance - Always visible */}
      <FeatureItem alwaysVisible>
        <StyledIcon><FaUserFriends /></StyledIcon>
        <span>24x7 Assistance</span>
      </FeatureItem>

      {/* Travelers */}
      <FeatureItem>
        <StyledIcon><FaCheckCircle /></StyledIcon>
        <span>20k+ Travelers</span>
      </FeatureItem>

      {/* Customized Trips */}
      <FeatureItem>
        <StyledIcon><FaCheckCircle /></StyledIcon>
        <span>100% Customized Trips</span>
      </FeatureItem>
    </BannerContainer>
  );
};

export default FeatureBanner;
