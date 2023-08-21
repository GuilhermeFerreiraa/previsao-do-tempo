import styled from "styled-components";

export const Caixa = styled.div`
  overflow: hidden;
  min-width: 80%;
  height: 340px;
  margin: 10px 50px;
  padding: 16px 12px;
  border-radius: 12px;
  background: #fefefe;
  flex-direction: column;
  box-shadow: 0px 4px 10px 2px #00000020;
`;

export const InfoData = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 12px;
  align-items: center;

  img {
    object-fit: contain;
    width: 10%;
  }

  div {
    color: #818181;
    display: grid;
  }
`;

export const Descricao = styled.div`
  background-color: #eee;
  margin-bottom: 12px;
  border-radius: 8px;
  padding: 2px 10px;
  height: 50px;

  p {
    font-size: 12px;
    color: #404040;
  }
`;

export const ResumoDoDia = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  align-items: center;
  border-bottom: 2px solid #f7f7f7;
  margin-top: 8px;
  padding-bottom: 6px;

  strong {
    color: #818181;
    font-size: 0.85em;
    font-weight: 600;
  }

  div {
    border-radius: 4px;
    display: flex;
    margin-bottom: 4px;

    justify-content: space-between;
    gap: 4px;

    span {
      flex: 1;
      border-radius: 4px;
      padding: 4px;
      font-size: 14px;
      text-align: center;
      font-weight: 500;
      justify-content: center;
    }
  }

  .temp {
    gap: 10px;

    :first-child {
      color: #41b4d9;
      background-color: #ecf8ff;
      border-left: 4px solid #41b4d9;
    }

    :last-child {
      color: #ff8a8a;
      background-color: #ffecec;
      border-left: 4px solid #ff8a8a;
    }
  }

  .umidade {
    color: #3ec7d0;
    background-color: #ecfbff;
    border-left: 4px solid #41b4d9;
  }

  .sol {
    color: #fe9a38;
    background-color: #fff4ec;
    border-left: 4px solid #fe9a38;
  }

  .chuva {
    color: #818181;
    background-color: #f8f8f8;
    border-left: 4px solid #818181;
  }
`;

export const InfoExtra = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  border-radius: 6px;
  border-left: 4px solid;
  padding-left: 4px;

  background: ${({ status }) => (status == "maxima" ? "#ffecec" : "#ECFBFF")};
  border-color: ${({ status }) => (status == "maxima" ? "#ff8a8a" : "#41b4d9")};

  p {
    color: ${({ status }) => (status == "maxima" ? "#ff8a8a" : "#41b4d9")};
    text-align: left;
    font-size: 10px;
    width: 80%;
  }

  img {
    object-fit: contain;
    display: block;
    width: 10%;
  }

  & + & {
    margin-top: 6px;
  }
`;
