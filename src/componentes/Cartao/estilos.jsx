import styled from "styled-components";

export const Caixa = styled.div`
  overflow: hidden;
  min-width: 70%;
  height: fit-content;
  min-height: 340px;
  margin: 10px 50px;
  padding: 16px 16px;
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
    width: 15%;
  }

  div {
    color: #818181;
    display: grid;

    span {
      font-size: 14px;
    }
  }
`;

export const Descricao = styled.div`
  background-color: #eee;
  margin-bottom: 12px;
  border-radius: 8px;
  padding: 0 12px;
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 11px;
    color: #404040;
  }
`;

export const ResumoDoDia = styled.div`
  border-bottom: 2px solid #f7f7f7;
  grid-template-columns: 1fr 0.8fr;
  align-items: center;
  margin-top: 4px;
  display: grid;
  padding: 4px;

  strong {
    color: #818181;
    font-size: 14px;
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
  margin-top: 12px;
  display: flex;
  gap: 6px;
  border-radius: 6px;
  border-left: 4px solid;
  padding: 6px;

  background: ${({ status }) => (status == "maxima" ? "#ffecec" : "#ECFBFF")};
  border-color: ${({ status }) => (status == "maxima" ? "#ff8a8a" : "#41b4d9")};

  p {
    color: ${({ status }) => (status == "maxima" ? "#ff8a8a" : "#41b4d9")};
    text-align: left;
    font-size: 11px;
  }

  img {
    object-fit: contain;
    width: 26px;
  }

  & + & {
    margin-top: 6px;
  }
`;
