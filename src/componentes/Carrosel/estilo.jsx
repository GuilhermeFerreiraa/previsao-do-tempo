import styled from "styled-components";

export const BotaoSlideEsquerda = styled.button`
  background-color: transparent;
  position: absolute;
  border: none;
  z-index: 10;
  max-width: 5%;
  top: 40%;
  left: -6px;

  img {
    cursor: pointer;
    display: block;
    width: 75%;
  }
`;

export const BotaoSlideDireita = styled.button`
  background-color: transparent;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  border: none;
  max-width: 5%;
  z-index: 2;
  top: 40%;
  right: -6px;

  img {
    cursor: pointer;
    display: block;
    width: 75%;
    transform: rotate(-180deg);
  }
`;
