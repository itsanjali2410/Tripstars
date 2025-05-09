import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import thumbnil1 from "../../assets/thumbnil/1.webp";
import thumbnil2 from "../../assets/thumbnil/2.webp";
import thumbnil3 from "../../assets/thumbnil/3.webp";
import thumbnil4 from "../../assets/thumbnil/4.webp";

const SliderContainer = styled.div`
  margin: 0 2rem;
  padding: 3rem 0;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Segoe UI', sans-serif;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
  color: #bb3e03;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const VideoCard = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const VideoContainer = styled.a`
  position: relative;
  display: block;
  text-decoration: none;

  &:hover .play-button {
    opacity: 1;
    transform: scale(1);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  opacity: 0;
  transition: all 0.3s ease;
  background: #ffffffdd;
  border-radius: 50%;
  padding: 14px;
  border: 2px solid #bb3e03;

  &.play-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PlayIcon = styled.svg`
  width: 26px;
  height: 26px;
  fill: #bb3e03;
`;

const VideoText = styled.div`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-align: center;
`;

const VideoThumbnail = () => {
  const videos = [
    {
      thumbnail: "https://i.ytimg.com/vi/lrb93i4EUi4/hq720.jpg",
      link: "https://youtu.be/lrb93i4EUi4",
      text: "Bali Bliss : Aditya Gadhvi's Unforgettable Journey | Tripstars Holiday",
    },
    {
      thumbnail: thumbnil1,
      link: "https://www.youtube.com/watch?v=LyfnbIjW5Q0",
      text: "Happy Travellers Family Group | Vietnam Tours | Tripstars Holidays",
    },
    {
      thumbnail: thumbnil2,
      link: "https://www.youtube.com/watch?v=ybYvJyN5cv4",
      text: "Piyush Patel’s Family Trip | Vietnam | Tripstars Holidays",
    },
    {
      thumbnail: thumbnil3,
      link: "https://www.youtube.com/watch?v=myIKYrcJ7WY",
      text: "Akash Jain’s Memorable Vietnam Trip | Tripstars",
    },
    {
      thumbnail: thumbnil4,
      link: "https://www.youtube.com/shorts/8QpandkwtYg",
      text: "Mr. Omkar Tambe’s Romantic Bali Honeymoon | Tripstars Holidays",
    }
  ];

  return (
    <SliderContainer>
      <Title>Explore More Memories ❤️</Title>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <VideoCard>
              <VideoContainer href={video.link} target="_blank" rel="noopener noreferrer">
                <Thumbnail src={video.thumbnail} alt={`Video ${index + 1}`} />
                <PlayButton className="play-button">
                  <PlayIcon viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </PlayIcon>
                </PlayButton>
              </VideoContainer>
              <VideoText>{video.text}</VideoText>
            </VideoCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default VideoThumbnail;
