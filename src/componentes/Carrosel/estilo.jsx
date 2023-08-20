import styled from "styled-components";

export const Carrosel = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BotaoSlideEsquerda = styled.button`
  background-color: transparent;
  position: absolute;
  border: none;
  z-index: 10;
  max-width: 5%;
  top: 40%;
  left: -4px;

  img {
    cursor: pointer;
    display: block;
    width: 60%;
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
  right: 0%;

  img {
    cursor: pointer;
    display: block;
    width: 60%;
    transform: rotate(-180deg);
  }
`;
