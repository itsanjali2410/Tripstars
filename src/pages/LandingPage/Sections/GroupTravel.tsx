import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  background: linear-gradient(135deg, #ffd700, #fbb040 100%);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const CTAButton = styled.button`
  background: white;
  color: #f57c00;
  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s ease;

  &:hover {
    background: #fff3e0;
    transform: scale(1.02);
  }
`;

const ImageSection = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 200px;
    }
  }
`;

const GroupOfferSection = () => {
  return (
    <Wrapper>
      <Container>
        <TextSection>
          <h2>Bigger Group? Get Special Offers Up to 50% Off!</h2>
          <p>
            Planning a trip for a large group? Let us tailor a travel experience
            that fits your needs and budget. Get expert assistance now!
          </p>
          <CTAButton>Get A Callback</CTAButton>
        </TextSection>
        {/* <ImageSection>
          <img
            src="https://images.unsplash.com/photo-1534430480872-5b9f26367ff6?auto=format&fit=crop&w=1200&q=80"
            alt="Group Celebration"
          />
        </ImageSection> */}
      </Container>
    </Wrapper>
  );
};

export default GroupOfferSection;
