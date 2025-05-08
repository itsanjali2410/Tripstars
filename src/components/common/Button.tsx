import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 12px 30px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid white;
  border-radius: 30px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.8); /* golden hover */
    color: black;
    border-color: transparent;
  }
`;


const Button: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div>
      <ButtonStyled onClick={handleClick}>Enquire Now</ButtonStyled>
    </div>
  );
};

export default Button;
