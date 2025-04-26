import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

// Desktop image URLs
const desktopImageUrls = [
  "https://www.andbeyond.com/wp-content/uploads/sites/5/Family-travel.jpg",
 
];

// Mobile image URLs (you can use same or different)
const mobileImageUrls = [
  "https://4.imimg.com/data4/II/II/GLADMIN-/img-col-2-blog-2-col3-500x500.jpg",
 
];

// Styled Components
const SliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 30vh;
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
  transition: opacity 0.6s ease-in-out;
  position: absolute;
  inset: 0;
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;

  @media (max-width: 768px) {
    top: 60%;
    width: 90%;
  }
`;

const HeroText = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
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

      <SearchBarWrapper>
        {/* <HeroText>Find Your Dream Destination</HeroText>
        <SearchBar />
        <RatingBar /> */}
      </SearchBarWrapper>
    </SliderContainer>
  );
};

export default HeroSection;
