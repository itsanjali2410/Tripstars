import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import Popup from "../../../components/common/Popup";
import Dubai from "../../../assets/PopularDestination/Dubai.webp";
import Thailand from "../../../assets/PopularDestination/Thailand.webp";
import Singapore from "../../../assets/PopularDestination/Singapore.webp";
import Malaysia from "../../../assets/PopularDestination/Malaysia.webp";
import Bali from "../../../assets/PopularDestination/Bali.webp";
import HongKong from "../../../assets/PopularDestination/Hong kong.webp";
import Europe from "../../../assets/PopularDestination/Europe.webp";
import Vietnam from "../../../assets/PopularDestination/Vietnam.webp";
import Australia from "../../../assets/PopularDestination/Australia.webp";

// Updated Container with reduced padding for a cleaner layout
const Container = styled.div`
  padding: 0 3rem;
  @media (max-width: 1080px) {
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// Removed the SectionTitle component (which included the title)
// Directly rendering the slider now without any header

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  height: 100%;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type Destination = {
  name: string;
  imgUrl: string;
};

type PopularDestinationsProps = {
  showPopup?: boolean;
};

const popularDestinationsData: Destination[] = [
  { name: "Dubai", imgUrl: Dubai },
  { name: "Thailand", imgUrl: Thailand },
  { name: "Singapore", imgUrl: Singapore },
  { name: "Malaysia", imgUrl: Malaysia },
  { name: "Bali", imgUrl: Bali },
  { name: "Hong Kong", imgUrl: HongKong },
  { name: "Europe", imgUrl: Europe },
  { name: "Vietnam", imgUrl: Vietnam },
  { name: "Australia", imgUrl: Australia },
];

export default function PopularDestinations({ showPopup = false }: PopularDestinationsProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const handleClick = (destination: string) => {
    if (showPopup) {
      setSelectedDestination(destination);
      setIsPopupOpen(true);
    } else {
      navigate(`/${destination.toLowerCase()}`);
    }
  };

  return (
    <Container>
      <CardsWrapper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.8}
          breakpoints={{
            1080: { slidesPerView: 4.8 },
            768: { slidesPerView: 4 },
            400: { slidesPerView: 2 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {popularDestinationsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card onClick={() => handleClick(item.name)}>
                <ImageWrapper>
                  <img src={item.imgUrl} alt={item.name} loading="lazy" />
                </ImageWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>

      {/* Popup (conditionally rendered if needed)
      {isPopupOpen && (
        <Popup onClose={() => setIsPopupOpen(false)}>
          <h2>Enquiry Form for {selectedDestination}</h2>
          {/* Add your form content here */}
        {/*</Popup>
      )} */}
    </Container>
  );
}
