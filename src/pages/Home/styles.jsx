import styled from "styled-components";

export const Container = styled.main`
  box-sizing: border-box;
  max-width: 100vw;
  scroll-behavior: smooth;
  font-family: "Inter", "sans-serif", "arial";
`;

export const HeaderContainer = styled.div`
  width: 80%;
  padding: 8px;
  margin: 16px auto;
  background-color: "#eee";
  border-radius: 12px;
  border-top: 10px solid #079e99;
  align-items: center;
  box-shadow: 0px 4px 4px #00000025;

  h1 {
    font-size: 1.2em;
    text-align: center;
    font-weight: 500;
    color: #079e99;
  }
`;

export const ContainerCarousel = styled.section`
  max-width: 100vw;
  align-items: center;
  display: grid;
  height: 85vh;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  justify-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerButton = styled.div`
  display: flex;

  button {
    cursor: default;
    background: transparent;
    border: none;

    img {
      width: 45%;
      height: 45%;
      object-fit: fill;

      cursor: pointer;
    }

    .direita {
      transform: rotate(180deg);
    }
  }
`;

export const CarouselItems = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  overflow-x: scroll;
  padding: 2px;

  grid-template-columns: repeat(3, 1fr);
`;
