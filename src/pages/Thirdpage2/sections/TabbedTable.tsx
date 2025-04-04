import React from "react";
import styled from "styled-components";
import { Star } from "lucide-react";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  width: 100%;
  max-width: 1200px; 
`;


const OverviewWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;
`;

const Card = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border-left: 6px solid #f4c430;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const HotelList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HotelItem = styled.div`
  padding: 8px 12px;
  background-color: #f9f6ee;
  border-radius: 6px;
  color: #444;
  font-size: 14px;
  border: 1px solid #e0d6c2;
`;

interface TableRow {
  city?: string;
  star4?: string;
  star5?: string;
}

interface TableData {
  tab1: TableRow[];
}

interface TabbedContentProps {
  tableData: TableData;
}

const TabbedContent: React.FC<TabbedContentProps> = ({ tableData }) => {
  const filteredHotels = tableData.tab1.filter(
    (row) =>
      row.city &&
      (row.city.toLowerCase().includes("kuta") || row.city.toLowerCase().includes("bali"))
  );

  return (
    <ContentContainer>
      {filteredHotels.map((row, index) => (
        <Card key={index}>
          {row.star4 && (
            <Section>
              <Title>
                <Star size={18} /> 4-Star Hotels
              </Title>
              <HotelList>
                {row.star4.split("\\").map((hotel, i) => (
                  <HotelItem key={i}>{hotel}</HotelItem>
                ))}
              </HotelList>
            </Section>
          )}

          {row.star5 && (
            <Section>
              <Title>
                <Star size={18} fill="#c99603" /> 5-Star Hotels
              </Title>
              <HotelList>
                {row.star5.split("\\").map((hotel, i) => (
                  <HotelItem key={i}>{hotel}</HotelItem>
                ))}
              </HotelList>
            </Section>
          )}
        </Card>
      ))}
    </ContentContainer>
  );
};

export default TabbedContent;
