import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import RatingBar from "../../../services/Home/sections/RatingBar";
import TripInquiryForm from "../../../components/common/Inquiry";
import TrendingDestinations from "../../Home/sections/TrandingDestinations";
import image1 from "../../../assets/images/Landing/166879-2048x1365-desktop-hd-australia-background.jpg";
import image2 from "../../../assets/images/Landing/35418-1920x1200-desktop-hd-australia-background (1).jpg";
import image3 from "../../../assets/images/Landing/683136-3840x2160-desktop-4k-sydney-harbor-bridge-wallpaper.jpg";
// Styled Components
const SlideWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
`;

const SlideImage = styled.img<{ active: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.6s ease-in-out;
  position: absolute;
  inset: 0;
`;

const SliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 85vh;

  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const PromoText = styled.p`
  font-size: 1.2rem;
  color: white;
  margin: 0.2rem 0;
  font-weight: 400;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);

  span {
    color: #fcb900;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BoldHighlight = styled.h2`
  font-weight: 800;
  color: gold;
  font-size: 1.8rem;
  margin: 0.2rem 0;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const PriceTag = styled.p`
  font-size: 1rem;
  color: white;
  margin: 0.3rem 0;
  font-weight: 600;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);

  strong {
    font-weight: 700;
    font-size: 1.1rem;
  }

  del {
    margin-left: 0.5rem;
    color: #bbb;
    font-weight: 400;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;

    strong {
      font-size: 1rem;
    }
  }
`;

const CTAButton = styled.button`
  background-color: #FFD700;
  color: white;
  border: none;
  padding: 0.9rem 1.8rem;
  font-size: 0.95rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.8rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: background 0.3s ease;

  &:hover {
    background-color: #fcb900;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
  }
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    top: 75%;
    width: 90%;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    padding: 1rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 90%;
  width: 500px;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 95%;
  }
`;


const HeroSection = () => {
  const desktopImages = useMemo(() => [image1, image2, image3], []);
  const mobileImages = useMemo(() => [image3, image1, image2], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [images, setImages] = useState(isMobile ? mobileImages : desktopImages);
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setImages(mobile ? mobileImages : desktopImages);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopImages, mobileImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 10,
  });

  return (
    <SliderContainer {...swipeHandlers}>
      <SlideWrapper>
        {images.map((src, i) => (
          <SlideImage
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            active={i === currentIndex}
            decoding="async"
          />
        ))}
      </SlideWrapper>

      <SearchBarWrapper>
        <PromoText>
          Get up to <span>40% OFF</span> on
        </PromoText>
        <BoldHighlight>AUSTRALIA </BoldHighlight>
        <h6 style={{ color: "white" }}>Tour Packages!</h6>

        <PriceTag>
          Starting at <strong>INR 74,999</strong> <del>INR 149,998</del>
        </PriceTag>
        <CTAButton onClick={() => setShowInquiry(true)}>
          Connect With An Expert
        </CTAButton>
      </SearchBarWrapper>

      <RatingBar />

      {showInquiry && (
        <ModalOverlay onClick={() => setShowInquiry(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <TripInquiryForm onClose={() => setShowInquiry(false)} />
          </ModalContent>
        </ModalOverlay>
      )}
    </SliderContainer>
  );
};

export default HeroSection;