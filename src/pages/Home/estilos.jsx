import styled from "styled-components";

export const Caixa = styled.main`
  min-height: 90%;
  padding-top: 24px;
`;

export const CaixaTopo = styled.div`
  box-shadow: 0px 4px 4px #00000025;
  border-top: 16px solid #079e99;
  background-color: "#eee";
  border-radius: 10px;
  align-items: center;
  margin: 20px auto;
  padding: 18px;
  width: 85%;

  h1 {
    text-align: center;
    font-size: 1.2em;
    font-weight: 500;
    color: #079e99;
  }
`;

export const CaixaBotao = styled.div`
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
