import React from "react";
import styled, { keyframes } from "styled-components";
// SVG Icons
import { ReactComponent as MobileDivider } from "../assets/pattern-divider-mobile.svg";
import { ReactComponent as DesktopDivider } from "../assets/pattern-divider-desktop.svg";
import { ReactComponent as DiceIcon } from "../assets/icon-dice.svg";
// Font

const Card = styled.main`
  align-items: center;
  align-self: center;
  background-color: #323a49;
  border-radius: 15px;
  display: flex;
  font-family: "Manrope", sans-serif;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  width: 75vw;
  @media (min-width: 768px) {
    max-height: 280px;
    width: 560px;
  }
`;

const AdviceNumber = styled.p`
  color: #52ffa8;
  font-family: "Manrope", sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

const Advice = styled.p`
  color: #cee3e9;
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  @media (min-width: 768px) {
    min-height: 120px;
  }
`;

const Divider = styled.div`
  margin-top: 2.3rem;
`;

const pulse = keyframes`
  0% {transform: scale(0.95); box-shadow: 0 0 0 0 rgba(82, 255, 168, 0.7);}
  70% {transform: scale(1); box-shadow: 0 0 0 10px rgba(82, 255, 168, 0);}
  100% {transform: scale(1); box-shadow: 0 0 0 0 rgba(82, 255, 168, 0);}
`;

const DiceButton = styled.button`
  background-color: #52ffa8;
  border: none;
  border-radius: 50%;
  padding: 1rem 1.2rem;
  position: relative;
  top: 55px;
  &:hover {
    animation-name: ${pulse};
    animation-duration: 1.5s;
  }
  @media (min-width: 768px) {
    top: 35px;
  }
`;

export const AdviceCard = ({ ...props }) => {
  return (
    <Card>
      <AdviceNumber>Advice #{props.slipID}</AdviceNumber>
      <Advice>{props.slipAdvice}</Advice>
      <Divider>
        {window.innerWidth < 768 ? <MobileDivider /> : <DesktopDivider />}
      </Divider>
      <DiceButton onClick={props.handleClick}>
        <DiceIcon />
      </DiceButton>
    </Card>
  );
};
