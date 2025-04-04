import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  width: 100%;

`;

const StyledAccordion = styled(Accordion)`
  margin: 10px 0;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding: 12px 16px;
  & .{
    font-size: 1rem;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #c99603;
  padding: 16px;
  & ul {
    margin: 0;
    padding-left: 20px;
  }
  & li {
    color: #555;
    line-height: 1.6;
    list-style: none;
  }
`;
const SectionTitle = styled.h5`
  font-size: 20px;
  font-weight: 600;
  color: #c99603;
  margin: 20px 0;
  padding: 15px 15px;
  border-bottom: 2px solid #c99603;
  background-color: #fff8e1;
  border-radius: 8px;
`;

// Props Interface
interface ItineraryProps {
  itinerary: { [day: string]: string[] }[];
}

// Itinerary Component
const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  return (
    <Container>
      <SectionTitle>Day-wise Itinerary</SectionTitle>

      {itinerary.map((dayData, index) => {
        const dayKey = Object.keys(dayData)[0]; // Extract Day number
        const activities = dayData[dayKey]; // Extract activities

        return (
          <StyledAccordion key={index}>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h6>{dayKey}</h6>
            </StyledAccordionSummary>

            <StyledAccordionDetails>

                {activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}

            </StyledAccordionDetails>
          </StyledAccordion>
        );
      })}
    </Container>
  );
};

export default Itinerary;
