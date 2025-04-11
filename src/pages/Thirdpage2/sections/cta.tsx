import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../../../components/common/Popup"; // adjust path as needed

const MobileCTA = styled.button`
  display: none;
  background: linear-gradient(
    to right,
    #c99603 0%,
    #cd9c01 65%,
    #b38201 100%
  );
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:focus {
  outline: none;
  box-shadow: none;
}

&:active {
  transform: none;
}

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
    width: 57%;
  }

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
    to right,
    #c99603 0%,
    #cd9c01 65%,
    #b38201 100%
  );
  color: #333333;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
    border: none;
    z-index: 9999;
    cursor: pointer;
  }
`;

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Your main content here */}

      <MobileCTA onClick={() => setShowPopup(true)}>
        Submit your query
      </MobileCTA>

      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Home;
