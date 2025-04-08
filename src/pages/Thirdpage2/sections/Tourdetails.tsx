import React from "react";
import styled from "styled-components";
import { MapPin, Calendar } from "lucide-react";

// Styled Components
const CardWrapper = styled.div`
  border: 1px solid #ddd; /* Thicker, visible border */
  border-radius: 12px; /* Smooth rounded edges */
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* More prominent shadow */
  width: 100%;
  max-width: 400px; /* Compact size */
  font-family: Arial, sans-serif;
  margin-bottom: 40px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;

  svg {
    margin-right: 10px;
    color: #c99603; /* Icon color */
  }

  span {
    font-weight: 500;
  }
`;

// Props Interface
interface TourDetails {
  nights: number;
  days: number;
  theme: string;
  destinationCovered: string;
  totalPackagePrice: string;
  country : string;
}

// Functional Component
const TourCard: React.FC<TourDetails> = ({ nights, days, destinationCovered, country}) => {
  return (
    <CardWrapper>
      <InfoRow>
        <Calendar size={22} />
        <span>{nights} Nights, {days} Days</span>
      </InfoRow>
      <InfoRow>
        <MapPin size={22} />
        <span>{destinationCovered}</span>
      </InfoRow>
      <InfoRow>
        <span>{country}</span>
      </InfoRow>
    </CardWrapper>
  );
};

export default TourCard;
