import { keyframes, styled } from "styled-components";

const animacao = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
`;

export const Caixa = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  animation: ${animacao} 2s ease-in-out infinite;
`;

export const CaixaItem = styled.div`
  box-shadow: 0px 4px 4px #00000025;
  border-bottom: 6px solid #fff;
  background-color: #079e99;
  justify-content: center;
  border-radius: 12px;
  align-items: center;
  height: fit-content;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  width: 60%;
  gap: 40px;

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: left;
    color: #fff;
    line-height: 2;
  }

  img {
    box-shadow: 0px 4px 4px #00000025;
    background-color: white;
    object-fit: contain;
    border-radius: 100%;
    height: 10%;
    width: 120px;
  }
`;
