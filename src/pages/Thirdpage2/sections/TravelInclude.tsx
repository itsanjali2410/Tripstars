import { FC } from "react";
import styled from "styled-components";

interface PackageIncludesProps {
  includes?: { name: string; icon: React.ElementType }[];
  highlights?: string[]; // Text-based highlights
}

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
  gap: 10px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f9f6ee; /* Light gold background */
  border: 1px solid #c99603; /* Gold border */

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  color: #c99603;

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

const Text = styled.span`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SectionTitle = styled.h5`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #1a1a1a;
`;

const HighlightList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color:rgb(0, 0, 0); /* Teal for bullet points */
`;

const PackageIncludes: FC<PackageIncludesProps> = ({ includes, highlights }) => {
  return (
    <Wrapper>
      {/* Tour Includes Section */}
      <Section>
        <h5>Tour Includes</h5>
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
      <h5>Why Travel with us</h5>
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
