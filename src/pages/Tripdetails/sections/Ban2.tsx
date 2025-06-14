import React from "react";
import styled from "styled-components";
import Stars from "../../../components/common/Stars";
import Button from "../../../components/common/Button";
import RatingBar from "../../Home/sections/RatingBar";
const Container = styled.div`
  width: 100vw;
  position: relative;

  .image-slider {
    width: 100%;
    height: 350px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      filter: brightness(70%);
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
    }

    .text-overlay {
      position: absolute;
      text-align: center;
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      z-index: 2;

      h1 {
        font-size: 2rem;
        font-weight: 500;
        font-family: 'Dancing Script', cursive;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      h2 {
        font-size: 3rem;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

type BanProps = {
  image: string;
  destination: string;
  onEnquireClick: () => void; // ✅ Added
};


const Ban2: React.FC<BanProps> = ({ image, destination, onEnquireClick }) => {
  return (
    <>
      <Container>
        <div className="image-slider">
          <img src={image} alt={destination} />
          <div className="overlay"></div>
          <div className="text-overlay">
            <h1>Escape to</h1>
            <h2>{destination}</h2>
            <div style={{ textAlign: "center", margin: "30px 0" }}>
              <Button onEnquireClick={onEnquireClick} />
            </div>
          </div>
        </div>
      </Container>
      <RatingBar />
    </>
  );
};


export default Ban2;
