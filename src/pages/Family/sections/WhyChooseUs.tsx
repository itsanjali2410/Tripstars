import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from '../../../components/common/Popup'; // adjust path if needed

// Base button styling
const CTAButton = styled.button`
  background: #FFD700;
  color: #000;
  font-weight: bold;
  font-size: 20px;
  padding: 14px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: auto;

  &:hover {
    background: #FFC300;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #FFD700;
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 12px;
  }
`;

// Title styling
const Title = styled.h2`
  color: #ffffff;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Wrapper
const ContentWrapper = styled.div`
  background-color: rgba(4, 26, 34, 0.8); /* Cyan overlay */
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  margin: 20px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 10px;
    border-radius: 15px;
  }
`;

const ConnectNowSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center flex justify-center items-center px-4"
        style={{
          backgroundImage: "url('https://dailywildlifephoto.nathab.com/photography-guide/wp-content/uploads/2016/05/alaska-1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ContentWrapper>
          {/* Title */}
          <Title>Didn’t find what you were looking for?</Title>

          {/* Subtitle */}
          <p className="text-white mb-8 text-lg md:text-base sm:text-sm">
            Connect with our experts! Get the best itineraries and offers!
          </p>

          {/* Main CTA */}
          <CTAButton onClick={() => setShowPopup(true)}>
            Connect Now
          </CTAButton>
        </ContentWrapper>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)} />
      )}
    </>
  );
};

export default ConnectNowSection;
