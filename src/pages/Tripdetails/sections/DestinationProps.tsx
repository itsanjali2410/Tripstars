import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Popup from "../../../components/common/Popup";

const Container = styled.div`
  padding: 0 15rem;
  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
    padding-top: 0;
    margin-top: 0;
  }
`;

const TitleHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const HighlightedWord = styled.span`
  color: gold;
  font-weight: 700;
`;

const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding-bottom: 1rem;
  scroll-behavior: smooth;

  /* Hide scrollbar for all browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;


const Card = styled.div`
  min-width: 200px;
  cursor: pointer;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameWrapper = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  text-transform: capitalize;
  text-align: center;
`;

type DestinationProps = {
  title: string;
  highlightWord: string;
  thingsToDo: { name: string; image: string }[];
};

export default function PopularDestinations({
  title,
  highlightWord,
  thingsToDo,
}: DestinationProps) {
  const [selectedThing, setSelectedThing] = useState<{ name: string; image: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per tick
    const interval = 30; // milliseconds
    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollWidth - scrollContainer.scrollLeft <= scrollContainer.clientWidth + 1) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollAmount += speed;
        scrollContainer.scrollLeft = scrollAmount;
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleThingClick = (thing: { name: string; image: string }) => {
    setSelectedThing(null);
    setTimeout(() => setSelectedThing(thing), 0);
  };

  const handleClosePopup = () => setSelectedThing(null);

  return (
    <Container>
      <SectionTitle>
        <TitleHeading>
          {title} <HighlightedWord>{highlightWord}</HighlightedWord>
        </TitleHeading>
      </SectionTitle>
      <ScrollWrapper ref={scrollRef}>
        {thingsToDo.map((item, index) => (
          <Card key={index} onClick={() => handleThingClick(item)}>
            <ImageWrapper>
              <img src={item.image} alt={item.name} />
            </ImageWrapper>
            <NameWrapper>{item.name}</NameWrapper>
          </Card>
        ))}
      </ScrollWrapper>
      {selectedThing && (
        <Popup
          title={selectedThing.name}
          image={selectedThing.image}
          onClose={handleClosePopup}
          pricing=""
          info={[]}
        />
      )}
    </Container>
  );
}
