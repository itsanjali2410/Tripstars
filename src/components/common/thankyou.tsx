import React from "react";
import styled from "styled-components";
import TrustindexWidget from "../../pages/Home/sections/TrustindexWidget";
import VideoTestimonials from "../../pages/Home/sections/VideoTestimonials";
import YTlinks from "../common/YTlinks";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
`;

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px; 
  background: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e") center/cover no-repeat;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #f0f0f0;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HomeButton = styled.a`
  padding: 12px 28px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid gold;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: gold;
  }
`;

const SectionWrapper = styled.div`
  color: white;
  margin: 20px 20px;
`;

const SectionHeading = styled.h2`
  color: white;
  font-size: 1.5rem;
  
`;

const ThankYou: React.FC = () => {
  return (
    <PageWrapper>
      <ThankYouContainer>
        <Title>🎉 Thank You!</Title>
        <Message>Your message has been successfully sent to our team. We’ll get back to you shortly!</Message>
        <HomeButton href="/">← Back to Home</HomeButton>
      </ThankYouContainer>

      <SectionWrapper>
        <SectionHeading>What Our Customers Say</SectionHeading>
        <TrustindexWidget />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading>Watch Our YouTube Videos</SectionHeading>
        <YTlinks />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading>Video Testimonials</SectionHeading>
        <VideoTestimonials />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default ThankYou;
