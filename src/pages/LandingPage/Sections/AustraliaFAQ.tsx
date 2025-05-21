// AustraliaFAQ.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const FAQContainer = styled.section`
  padding: 0 30px;
  margin: 15px 30px;

  @media (max-width: 768px) {
    padding: 0 15px;
    margin: 10px 20px;
  }
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #222;
  text-align: left;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const FAQItem = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  padding: 1.2rem 1.2rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: background-color 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 1.05rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


const Answer = styled.div<{ show: boolean }>`
  max-height: ${({ show }) => (show ? "1000px" : "0")};
  overflow: hidden;
  opacity: ${({ show }) => (show ? 1 : 0)};
  font-size: 0.96rem;
  color: #555;
  margin-top: ${({ show }) => (show ? "0.8rem" : "0")};
  line-height: 1.6;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: ${({ show }) => (show ? "0.5rem" : "0")};
  }
`;

const Chevron = styled(FaChevronDown)<{ rotate: boolean }>`
  transition: transform 0.3s ease;
  transform: rotate(${({ rotate }) => (rotate ? "180deg" : "0deg")});
  color: #888;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const faqs = [
  {
    question: "What is the best time to visit Australia?",
    answer:
      "The best time to visit depends on the region. Generally, spring (Sept–Nov) and autumn (March–May) offer pleasant weather nationwide.",
  },
  {
    question: "Do I need a visa to travel to Australia?",
    answer:
      "Yes, most travelers need a visa or an ETA (Electronic Travel Authority) to enter Australia. You can apply online via the Australian Government website.",
  },
  {
    question: "What are the must-visit places in Australia?",
    answer:
      "Top attractions include Sydney Opera House, Great Barrier Reef, Uluru, the Gold Coast, Melbourne, and Tasmania’s natural beauty.",
  },
  {
    question: "Is Australia safe for travelers?",
    answer:
      "Yes, Australia is considered one of the safest destinations for travelers, with low crime rates and excellent healthcare services.",
  },
  {
    question: "What currency is used in Australia?",
    answer: "The official currency is the Australian Dollar (AUD).",
  },
];

const AustraliaFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Australia Travel FAQ</FAQTitle>
      {faqs.map((faq, i) => (
        <FAQItem key={i} onClick={() => toggleFAQ(i)}>
          <Question>
            {faq.question}
            <Chevron rotate={activeIndex === i} />
          </Question>
          <Answer show={activeIndex === i}>{faq.answer}</Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default AustraliaFAQ;
