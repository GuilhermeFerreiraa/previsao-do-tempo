import styled from "styled-components";

export const BotaoSlideEsquerda = styled.button`
  background-color: transparent;
  position: absolute;
  max-width: 5%;
  border: none;
  z-index: 10;
  left: -6px;
  top: 40%;

  img {
    cursor: pointer;
    width: 85%;
  }
`;

export const BotaoSlideDireita = styled.button`
  background-color: transparent;
  justify-content: flex-end;
  position: absolute;
  max-width: 5%;
  display: flex;
  border: none;
  right: -6px;
  z-index: 2;
  top: 40%;

  img {
    transform: rotate(-180deg);
    cursor: pointer;
    width: 85%;
  }
`;
