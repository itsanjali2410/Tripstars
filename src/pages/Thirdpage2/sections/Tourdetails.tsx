import React, { useState } from "react";
import styled from "styled-components";
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import Itinerary from "./Itinerary"; // Adjust path if needed

// Styled Components
const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;

  svg {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    margin-right: 10px;
    color: #c99603;
  }

  span {
    font-weight: 500;
    word-break: break-word;
  }
`;

const DestinationText = styled.span<{ isLong: boolean }>`
  font-weight: 500;
  font-size: ${(props) => (props.isLong ? "14px" : "16px")};
`;

const ToggleItinerary = styled.button`
    border: none;
    color: #c99603;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-left: 22px;
    text-decoration: none;
  svg {
    margin-left: 5px;
  }

  &:hover {
    text-decoration: none;
  }
`;

// Props Interface
interface TourDetails {
  nights: number;
  days: number;
  theme: string;
  destinationCovered: string;
  totalPackagePrice: string;
  country: string;
}

// Functional Component
const TourCard: React.FC<TourDetails> = ({ nights, days, destinationCovered, country }) => {
  const [showItinerary, setShowItinerary] = useState(false);

  return (
    <CardWrapper>
      <InfoRow>
        <div className="left">
          <Calendar size={22} />
          <span>{nights} Nights, {days} Days</span>
        </div>

        <ToggleItinerary as="a" href="#itinerary">
        See Itinerary <ChevronDown size={18} />
        </ToggleItinerary>
      </InfoRow>

      <InfoRow>
        <MapPin size={22} />
        <DestinationText isLong={destinationCovered.length > 25}>
          {destinationCovered}
        </DestinationText>
      </InfoRow>

      <InfoRow>
        <span>{country}</span>
      </InfoRow>

      {/* <ToggleItinerary as="a" href="#itinerary">
        See Itinerary <ChevronDown size={18} />
      </ToggleItinerary> */}


      {showItinerary && <Itinerary itinerary={[]} />}
    </CardWrapper>
  );
};

export default TourCard;
