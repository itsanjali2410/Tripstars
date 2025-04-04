import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 24px;
  text-align: center;
  border-bottom: 3px solid #f4c430;
  padding-bottom: 8px;
`;

const SectionWrapper = styled.div`
  margin-bottom: 18px;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const SectionHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: ${(props) =>
    props.isOpen
      ? "linear-gradient(90deg, #fdf6e3, #fff9ec)"
      : "linear-gradient(90deg, #f8f8f8, #f0f0f0)"};
  cursor: pointer;
  border: 1px solid #ddd;
  font-weight: 600;
  color: #333;
  transition: background 0.3s;

  h3 {
    font-size: 16px;
    margin: 0;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.3s ease;
    color: #c99603;
  }

  &:hover {
    background: #fff3dc;
  }
`;

const SectionContent = styled.div`
  padding: 16px 20px;
  font-size: 14.5px;
  color: #555;
  line-height: 1.6;
  background-color: #fcfcfc;
  border: 1px solid #eee;
  border-top: none;
  animation: slideDown 0.3s ease forwards;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
// Main Component
const TermsAndConditions: React.FC = () => {
  const sections = [
    {
      title: "Travel Validity",
      content: "Fixed Travel Dates: (07, 13, 21 Feb) - (07, 14, 20, 27 March 2025)",
    },
    {
      title: "Easy Cancellation",
      content: "100% Non-refundable.",
    },
    {
      title: "Guaranteed Dates",
      content: "Travel dates are fixed and non-changeable.",
    },
    {
      title: "Visa Easy",
      content: "Visa assistance will be provided by our visa specialist.",
    },
  ];

  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter((i) => i !== index) // Close section
        : [...prevOpenSections, index] // Open section
    );
  };

  return (
    <Container>
      <h2>Terms & Conditions</h2>
      {sections.map((section, index) => (
        <SectionWrapper key={index}>
          <SectionHeader
            onClick={() => toggleSection(index)}
            isOpen={openSections.includes(index)}
          >
            <h3>{section.title}</h3>
            <span>{openSections.includes(index) ? "▲" : "▼"}</span>
          </SectionHeader>
          {openSections.includes(index) && (
            <SectionContent>{section.content}</SectionContent>
          )}
        </SectionWrapper>
      ))}
    </Container>
  );
};

export default TermsAndConditions;
