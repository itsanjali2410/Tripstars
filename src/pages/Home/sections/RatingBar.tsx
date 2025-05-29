import React from "react";
import styled, { keyframes } from "styled-components";
import { FaStar, FaCheckCircle, FaUserFriends } from "react-icons/fa";
import google from "../../../assets/icons/google.png";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  background: linear-gradient(90deg, #0a0a0a, #222);
  padding: 1rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  user-select: none;
`;

const ScrollingContent = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 20s linear infinite;
`;

const DuplicateWrapper = styled.div`
  display: flex;
  gap: 3rem;
  padding: 0 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #fff;
  white-space: nowrap;
  font-size: 1.1rem;
  cursor: default;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 0.4rem;
  }
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

const features = [
  {
    icon: <LogoImg src={google} alt="Google" />,
    text: (
      <>
        <Rating>4.9</Rating>
        <StyledIcon><FaStar /></StyledIcon>
        <span>Rated</span>
      </>
    ),
  },
  {
    icon: <StyledIcon><FaUserFriends /></StyledIcon>,
    text: <span>24x7 Assistance</span>,
  },
  {
    icon: <StyledIcon><FaCheckCircle /></StyledIcon>,
    text: <span>20k+ Travelers</span>,
  },
  {
    icon: <StyledIcon><FaCheckCircle /></StyledIcon>,
    text: <span>100% Customized Trips</span>,
  },
];

const FeatureBanner: React.FC = () => {
  return (
    <MarqueeContainer>
      <ScrollingContent>
        <DuplicateWrapper>
          {features.map((item, idx) => (
            <FeatureItem key={idx}>
              {item.icon}
              {item.text}
            </FeatureItem>
          ))}
        </DuplicateWrapper>
        {/* Duplicate items for seamless scroll */}
        <DuplicateWrapper>
          {features.map((item, idx) => (
            <FeatureItem key={`dup-${idx}`}>
              {item.icon}
              {item.text}
            </FeatureItem>
          ))}
        </DuplicateWrapper>
      </ScrollingContent>
    </MarqueeContainer>
  );
};

export default FeatureBanner;
