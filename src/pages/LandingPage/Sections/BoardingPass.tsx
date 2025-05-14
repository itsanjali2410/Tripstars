import React from "react";
import styled from "styled-components";
import { FaPlaneDeparture } from "react-icons/fa";
import Slider from "react-slick";
import image1 from "../../../assets/images/Landing/683136-3840x2160-desktop-4k-sydney-harbor-bridge-wallpaper.jpg";
import image2 from "../../../assets/images/Landing/778783-3840x2160-desktop-4k-sydney-opera-house-wallpaper-photo.jpg";

// Style for the entire Wrapper
const Wrapper = styled.div`
  justify-content: center;
  padding: 2rem;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Ticket = styled.div`
  background: #ffe8dc;
  display: flex;
  border-radius: 20px;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 600px;
  border-right: 2px dashed #000;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`;

const Side = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  justify-content: space-between;
  text-align: center;
  display: flex; // By default, the side section is visible

  @media (max-width: 768px) {
    display: none; // Hide the side section on small devices
  }
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.25rem;
`;

const Value = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-weight: bold;
`;

const PlaneIcon = styled(FaPlaneDeparture)`
  font-size: 3rem;
  margin: 1rem 0;
  color: #f39c12;
`;

const Barcode = styled.div`
  width: 100%;
  height: 40px;
  background: repeating-linear-gradient(
    90deg,
    #000,
    #000 2px,
    #fff 2px,
    #fff 4px
  );
  margin-top: 1.5rem;
  border-radius: 4px;
`;

const Tear = styled.div`
  position: absolute;
  top: 40%;
  width: 20px;
  height: 20px;
  background: #f7f2ee;
  border-radius: 50%;
  z-index: 2;
`;

const LeftTear = styled(Tear)`
  left: -10px;
`;

const RightTear = styled(Tear)`
  right: -10px;
`;

const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export default function BoardingPass() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      {/* Image Slider */}
      <SliderWrapper>
        <Slider {...settings}>
          {/* First Slide - Boarding Pass Image */}
          <div>
            <Ticket>
              <Main>
                <LeftTear />
                <RightTear />
                <Title>BOARDING PASS</Title>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 45%' }}>
                    <Label>PASSENGER :</Label>
                    <Value>SACHIN</Value>
                    <br />
                    <Label>FLIGHT :</Label>
                    <Value>ABC 12345</Value>
                  </div>

                  <div style={{ flex: '1 1 45%', textAlign: 'right' }}>
                    <Label>DESTINATION :</Label>
                    <Value>DELHI → MOSCOW</Value>
                    <br />
                    <Label>DATE & TIME :</Label>
                    <Value>15 APR 2025 06.15 AM</Value>
                    <br />
                    <Label>SEAT :</Label>
                    <Value>25</Value>
                  </div>
                </div>

                <PlaneIcon />
                <Barcode />
              </Main>

              <Side>
                <div>
                  <div
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      color: '#16a085',
                    }}
                  >
                    DISCOUNT TICKET
                  </div>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: '#e74c3c',
                    }}
                  >
                    30%
                  </div>
                </div>
                <Barcode style={{ height: '50px', width: '80%' }} />
              </Side>
            </Ticket>
          </div>

          {/* Second Slide - Travel Image 1 */}
          <div>
            <SlideImage src={image1} alt="Sydney Harbor Bridge" />
          </div>

          {/* Third Slide - Travel Image 2 */}
          <div>
            <SlideImage src={image2} alt="Sydney Opera House" />
          </div>
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
}
