import { createGlobalStyle, styled } from "styled-components";

export const EstilosGlobais = createGlobalStyle`
  html {
   scroll-behavior: smooth;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    box-sizing: border-box;
  }

 body {
  height: 100%;
  width: 100%;
   font-family: "Inter", "sans-serif", "arial";
  }
  `;

export const Rodape = styled.footer`
  background-color: #079e99;
  width: 100%;
  height: 2%;
`;

export const Grade = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  height: 100vh;
`;
