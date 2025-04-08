// Popup.tsx
import React from 'react';
import styled from 'styled-components';

// Container for the overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); // Semi-transparent background
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Make sure it is on top
`;

// The actual popup box
const PopupBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <Overlay>
      <PopupBox>
        <h2>Submit Your Query</h2>
        <p>We have received your request. We will get back to you shortly!</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </PopupBox>
    </Overlay>
  );
};

export default Popup;
