import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import SearchBar from "./SearchBar";
import RatingBar from "./RatingBar";

// Import desktop and mobile images
import image1 from "../../../assets/banner/bali.webp";
import image2 from "../../../assets/banner/vietnam.webp";
import image3 from "../../../assets/banner/dubai.webp";
import image4 from "../../../assets/banner/maldives.webp";
import image5 from "../../../assets/banner/singapore.webp";
import image6 from "../../../assets/banner/europe.webp";
import image7 from "../../../assets/banner/thailand.webp";

import image1Mobile from "../../../assets/banner/Mobile banner/bali.webp";
import image2Mobile from "../../../assets/banner/Mobile banner/vietnam.webp";
import image3Mobile from "../../../assets/banner/Mobile banner/vietnam.webp";
import image4Mobile from "../../../assets/banner/Mobile banner/dubai.webp";
import image5Mobile from "../../../assets/banner/Mobile banner/maldives.webp";
import image6Mobile from "../../../assets/banner/Mobile banner/singapore.webp";
import image7Mobile from "../../../assets/banner/Mobile banner/thailand.webp";

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
  const desktopImages = useMemo(() => [image1, image2, image3, image4, image5, image6, image7], []);
  const mobileImages = useMemo(() => [image1Mobile, image2Mobile, image3Mobile, image4Mobile, image5Mobile, image6Mobile, image7Mobile], []);

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
        {/* <HeroText>Find Your Dream Destination</HeroText>
        <SearchBar />
        <RatingBar /> */}
      </SearchBarWrapper>
    </SliderContainer>
  );
};

export default HeroSection;
