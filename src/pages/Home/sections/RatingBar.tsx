import React from 'react';
import { FaFacebookF, FaStar, FaCheckCircle, FaUserFriends } from 'react-icons/fa';
import styled from 'styled-components';
import google from "../../../assets/icons/google.png";
const BannerContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    justify-content: space-around;
    gap: 1rem;
  }
`;

const FeatureItem = styled.div<{ alwaysVisible?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ alwaysVisible }) =>
    !alwaysVisible &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

const LogoImg = styled.img`
  width: 16px;
  height: 16px;
`;

const Rating = styled.span`
  font-weight: bold;
`;

const FeatureBanner: React.FC = () => {
  return (
    <BannerContainer>
      {/* Rating - Always visible */}
      <FeatureItem alwaysVisible>
        <LogoImg src={google} alt="Google" />
        <Rating>4.9</Rating>
        <FaStar style={{ color: '#FFD700' }} />
        <span>rated</span>
      </FeatureItem>

      {/* Number of Passengers - Always visible */}
      <FeatureItem alwaysVisible>
        <FaUserFriends style={{ color: '#FFD700' }} />
        <span>24x7 Assistance</span>
      </FeatureItem>

      <FeatureItem>
        <FaCheckCircle style={{ color: '#FFD700' }} />
        <span>20k+ Traveler</span>
      </FeatureItem>

      <FeatureItem>
        <FaCheckCircle style={{ color: '#FFD700' }} />
        <span>100% Customised Trips</span>
      </FeatureItem>
    </BannerContainer>
  );
};

export default FeatureBanner;
