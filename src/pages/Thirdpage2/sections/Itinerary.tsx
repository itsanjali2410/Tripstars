import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  width: 100%;
`;

const StyledAccordion = styled(Accordion)`
  margin: 8px 0;
  box-shadow: none;
  border: 1px solid #ddd;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  font-weight: bold;
  padding: 12px 16px;
  background-color: #f5f5f5;
  & .MuiTypography-root {
    font-size: 0.9rem;
    color: #000;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #fff;
  padding: 12px;
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
  itinerary: { day: string; activities: string[] }[];
}

// Itinerary Component
const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  const [expanded, setExpanded] = useState<string | false>(false); // No section open initially

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false); // Toggle accordion open/close
  };

  return (
    <Container>
      <SectionTitle>Day-wise Itinerary</SectionTitle>

      {itinerary.map((item, index) => (
        <StyledAccordion
          key={index}
          expanded={expanded === item.day}
          onChange={handleChange(item.day)}
        >
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.day}</Typography>
          </StyledAccordionSummary>

          <StyledAccordionDetails>
            <ul>
              {item.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </Container>
  );
};

export default Itinerary;
