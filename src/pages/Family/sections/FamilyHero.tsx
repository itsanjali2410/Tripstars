import React, { useState, useEffect, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useSwipeable } from "react-swipeable";

// Images
const desktopImageUrls = [
  "https://www.andbeyond.com/wp-content/uploads/sites/5/Family-travel.jpg",
];

const mobileImageUrls = [
  "https://4.imimg.com/data4/II/II/GLADMIN-/img-col-2-blog-2-col3-500x500.jpg",
];

// Animations
const zoom = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.1); }
`;

// Styled Components
const SliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

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
  transition: opacity 0.8s ease-in-out;
  position: absolute;
  inset: 0;
  animation: ${zoom} 20s ease-in-out infinite alternate;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 10%,
    rgba(0, 0, 0, 0.7) 90%
  );
  z-index: 1;
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 768px) {
    top: 55%;
  }
`;

const HeroText = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubText = styled.p`
  font-size: 1.2rem;
  color: #f0f0f0;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroSection: React.FC = () => {
  const desktopImages = useMemo(() => desktopImageUrls, []);
  const mobileImages = useMemo(() => mobileImageUrls, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [images, setImages] = useState(isMobile ? mobileImages : desktopImages);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setImages(mobile ? mobileImages : desktopImages);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopImages, mobileImages]);

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

      <Overlay />

      <SearchBarWrapper>
        <HeroText>Find Your Dream Destination</HeroText>
        <HeroSubText>Tailored experiences, unforgettable memories</HeroSubText>
        {/* You can also add a searchbar or button here */}
      </SearchBarWrapper>
    </SliderContainer>
  );
};

export default HeroSection;
