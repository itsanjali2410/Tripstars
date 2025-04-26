import React from 'react';
import styled from 'styled-components';
import { FaStar, FaUserFriends, FaMapMarkedAlt } from 'react-icons/fa';

// Container for the whole section
const TrustSection = styled.section`
  background: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
`;

// Wrapper for cards
const CardsWrapper = styled.div`
display: flex;
    justify-content: center;
    align-items: stretch;
    /* gap: 20px; */
    /* margin-top: 40px; */
    /* flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

// Single Card
const TrustCard = styled.div`
    background: white;
    /* border-radius: 20px; */
    /* padding: 30px 20px; */
    width: 100%;
    max-width: 320px;
    /* box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

// Title styling
const SectionTitle = styled.h2`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.0rem;
  }
`;

// Icon styling
const IconWrapper = styled.div`
  font-size: 50px;
  color: #FFD700;
  margin-bottom: 20px;
`;

// Card Title
const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Card Description
const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

const TrustFactor = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <TrustCard>
    <IconWrapper>{icon}</IconWrapper>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </TrustCard>
);

const TrustSectionComponent = () => {
  return (
    <TrustSection>
      <SectionTitle>Why Travelers Trust Us</SectionTitle>
      <CardsWrapper>
        <TrustFactor 
          icon={<FaStar />} 
          title="4.9★ Google Rating" 
          description="Rated excellent by hundreds of happy travelers worldwide!" 
        />
        <TrustFactor 
          icon={<FaUserFriends />} 
          title="1000+ Happy Customers" 
          description="Our customers love our personalized services and attention to detail." 
        />
        <TrustFactor 
          icon={<FaMapMarkedAlt />} 
          title="Customized Itineraries" 
          description="We create tailor-made journeys that fit your unique needs." 
        />
      </CardsWrapper>
    </TrustSection>
  );
};

export default TrustSectionComponent;
