import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import bgImage from "../../../assets/images/backgrounds/Videotestimonials-bg.webp";
// import Video8 from "../../../assets/Videos/Testimonial gif/8.gif";
import Video1 from "../../../assets/Videos/Testimonial gif/1.gif";
import Video2 from "../../../assets/Videos/Testimonial gif/2.gif";
import Video3 from "../../../assets/Videos/Testimonial gif/3.gif";
import Video4 from "../../../assets/Videos/Testimonial gif/4.gif";
import Video5 from "../../../assets/Videos/Testimonial gif/5.gif";
import Video6 from "../../../assets/Videos/Testimonial gif/6.gif";
import Video7 from "../../../assets/Videos/Testimonial gif/7.gif";
import Video8 from "../../../assets/Videos/Testimonial gif/8.gif";

const Container = styled.div`
  padding: 3rem 5rem;
  margin-top:50px;
  background-image: url(${bgImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1340px) {
    padding: 3rem 5rem;
  }
  @media (max-width: 1080px) {
    padding: 3rem;
  }
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;


  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1080px) {
    width: 80%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  font-family: "Cursive", !important;
  @media (max-width: 768px) {
    width: 100%;
    font-size:1.1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: white !important; 
  @media (max-width: 768px) {
    width: 100%;
    font-size:0.8rem;
  }
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ReviewItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 500;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const CardsWrapper = styled.div`
  width: 65%;
  
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const Card = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const testimonials = [
  // { videoUrl: Video8, title: "Bonani Chatterjee"},
 
  { videoUrl: Video2, title: "Roma's Bali Vacation" },
  { videoUrl: Video3, title: "Sandip's Dubai Vacation" },
  { videoUrl: Video4, title: "Mayur's Australia Vacation" },
  { videoUrl: Video5, title: "Binieka's Dubai Vacation" },
  { videoUrl: Video6, title: "Nidhi Mundra Bali Trip" },
  { videoUrl: Video7, title: "Prathamesh Dubai Trip" },
  { videoUrl: Video8, title: "Mrs. Arjal Patel" },
  { videoUrl: Video1, title: "Bonani Chatterjee" },
  ];

export default function VideoTestimonials() {
  return (
    <Container>
      <ContentWrapper>
        {/* Left Section */}
        <LeftContent>
          <Title>Tripstars Diaries 📖✈️</Title>
          <Subtitle>– Real stories, real travelers, real adventures ❤️</Subtitle>
          <Reviews>
            {/* <ReviewItem>
              <Icon src={googleIcon} alt="Google Reviews" />
              4.5/5 ⭐ (6000+ reviews)
            </ReviewItem>
            <ReviewItem>
              <Icon src={facebookIcon} alt="Facebook Reviews" />
              4.8/5 ⭐ (1400+ reviews)
            </ReviewItem> */}
          </Reviews>
        </LeftContent>

        {/* Right Section */}
        <CardsWrapper>
          <Swiper
            spaceBetween={20}
            slidesPerView={2.3}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Card>
                <a href={`/video?index=${index}`}>
                    <ImageWrapper>
                      <img src={item.videoUrl} alt={item.title} />
                    </ImageWrapper>
                  </a>
                  <p style={{ color: "white", fontSize: "0.9rem", fontWeight: "normal"}}>{item.title}</p>

                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardsWrapper>
      </ContentWrapper>
    </Container>
  );
}
