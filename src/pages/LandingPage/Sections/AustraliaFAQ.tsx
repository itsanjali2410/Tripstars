// AustraliaFAQ.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const FAQContainer = styled.section`
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 0 30px;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
text-align: left;
  margin-bottom: 2rem;
`;

const FAQItem = styled.div`
  background: #fff;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 1.2rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
`;

const Answer = styled.div<{ show: boolean }>`
  max-height: ${({ show }) => (show ? "1000px" : "0")};
  overflow: hidden;
  font-size: 0.95rem;
  color: #555;
  margin-top: ${({ show }) => (show ? "1rem" : "0")};
  transition: all 0.3s ease-in-out;
`;

const Chevron = styled(FaChevronDown)<{ rotate: boolean }>`
  transition: transform 0.3s;
  transform: rotate(${({ rotate }) => (rotate ? "180deg" : "0deg")});
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
      <FAQTitle> Australia Travel FAQ</FAQTitle>
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
