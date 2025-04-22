import { FC } from "react";
import styled from "styled-components";

interface PackageIncludesProps {
  includes?: { name: string; icon: React.ElementType }[];
  highlights?: string[];
}

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; /* Left-align for mobile */
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 320px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: flex-start; /* Left-align items */
    gap: 10px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f9f6ee;
  border: 2px solid #c99603;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #c99603; /* Gold background on hover */
    
    svg {
      color: #fff; /* Change icon color on hover */
    }
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  color: #c99603;
  transition: color 0.2s ease-in-out;

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

const Text = styled.span`
  margin-top: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #374151;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const SectionTitle = styled.h5`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #1a1a1a;
`;

const HighlightList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #1a1a1a;
  font-size: 15px;

  li {
    margin-bottom: 6px;
  }
`;

// Component
const PackageIncludes: FC<PackageIncludesProps> = ({ includes, highlights }) => {
  return (
    <Wrapper>
      {/* Tour Includes Section */}
      <Section>
        <SectionTitle>Tour Includes</SectionTitle>
        <Container>
          {includes?.map((item, index) => (
            <Item key={index}>
              <IconWrapper>
                <Icon as={item.icon} />
              </IconWrapper>
              <Text>{item.name}</Text>
            </Item>
          ))}
        </Container>
      </Section>

      {/* Tour Highlights Section */}
      <Section>
        <SectionTitle>Why Travel with Us</SectionTitle>
        <HighlightList>
          {highlights?.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </HighlightList>
      </Section>
    </Wrapper>
  );
};

export default PackageIncludes;
