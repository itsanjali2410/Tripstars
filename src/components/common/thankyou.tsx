import React from "react";
import styled from "styled-components";
import TrustindexWidget from "../../pages/Home/sections/TrustindexWidget";
import VideoTestimonials from "../../pages/Home/sections/VideoTestimonials";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
`;

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background-image: url(""); /* Add a travel image URL here if needed */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 36px;
  color: gold;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 20px;
`;

const HomeButton = styled.a`
  padding: 10px 20px;
  background: rgb(9, 9, 17);
  color: white;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: gold;
  }
`;

const SectionWrapper = styled.div`
  padding: 40px 20px;
  background-color: #111;
  color: white;
`;

const ThankYou: React.FC = () => {
  return (
    <PageWrapper>
      <ThankYouContainer>
        <Title>🎉 Thank You!</Title>
        <Message>Email sent successfully to Admin!</Message>
        <HomeButton href="/">Go Back to Home</HomeButton>
      </ThankYouContainer>

      <SectionWrapper>
        <TrustindexWidget />
      </SectionWrapper>

      <SectionWrapper>
        <VideoTestimonials />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default ThankYou;
