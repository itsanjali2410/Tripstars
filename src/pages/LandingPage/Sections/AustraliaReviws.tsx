import React from 'react';
import styled from 'styled-components';

interface RatingSummaryProps {
  totalReviews: number;
  averageRating: number;
  ratingCounts: { [stars: number]: number };
}

const RatingSummary: React.FC<RatingSummaryProps> = ({ totalReviews, averageRating, ratingCounts }) => {
  const getPercentage = (count: number) => (totalReviews > 0 ? (count / totalReviews) * 100 : 0);

  return (
    <Container>
      <Heading>Australia Reviews</Heading>
      <SubHeading>Reviews ({totalReviews.toLocaleString()})</SubHeading>

      <Content>
        <ScoreBox>
          <Stars>⭐⭐⭐⭐⭐</Stars>
          <Score>{averageRating.toFixed(1)}</Score>
          <FromText>From 65+ countries</FromText>
        </ScoreBox>

        <Bars>
          {[5, 4, 3, 2, 1].map((star) => (
            <Bar key={star}>
              <StarLabel>{star} ★</StarLabel>
              <BarTrack>
                <BarFill width={getPercentage(ratingCounts[star] || 0)} />
              </BarTrack>
              <Count>{ratingCounts[star]?.toLocaleString() || 0}</Count>
            </Bar>
          ))}
        </Bars>
      </Content>
    </Container>
  );
};

export default RatingSummary;

// ------------------ STYLES ------------------

const Container = styled.div`
  padding: 0 30px;

  margin: 15px 30px;
`;

const Heading = styled.h2`
  font-size: 24px;
`;

const SubHeading = styled.p`
  font-size: 18px;
`;

const Content = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
`;

const ScoreBox = styled.div`
  text-align: center;
  color: green;
  min-width: 120px;
`;

const Stars = styled.div`
  font-size: 24px;
`;

const Score = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const FromText = styled.p`
  font-size: 14px;
`;

const Bars = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 400px;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const StarLabel = styled.span`
  width: 40px;
`;

const BarTrack = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  height: 8px;
  flex-grow: 1;
  margin: 0 10px;
  overflow: hidden;
`;

const BarFill = styled.div<{ width: number }>`
  height: 100%;
  background-color: orange;
  border-radius: 5px;
  width: ${({ width }) => width}%;
`;

const Count = styled.span`
  width: 50px;
  text-align: right;
`;
