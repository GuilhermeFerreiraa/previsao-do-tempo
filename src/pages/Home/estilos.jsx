import styled from "styled-components";

export const Caixa = styled.main`
  box-sizing: border-box;
  max-width: 100vw;
  scroll-behavior: smooth;
  font-family: "Inter", "sans-serif", "arial";
`;

export const CaixaTopo = styled.div`
  width: 80%;
  padding: 8px;
  margin: 16px auto;
  background-color: "#eee";
  border-radius: 12px;
  border-top: 16px solid #079e99;
  align-items: center;
  box-shadow: 0px 4px 4px #00000025;

  h1 {
    font-size: 1.2em;
    text-align: center;
    font-weight: 500;
    color: #079e99;
  }
`;

export const CaixaBotao = styled.div`
  background-color: red;
  /* display: flex; */
  width: 15%;

  button {
    cursor: default;
    background: transparent;
    border: none;

    img {
      height: 15%;
      object-fit: fill;

      cursor: pointer;
    }

    .direita {
      transform: rotate(180deg);
    }
  }
`;

export const ItemCarrosel = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  overflow-x: scroll;
  padding: 2px;

  grid-template-columns: repeat(3, 1fr);
`;
