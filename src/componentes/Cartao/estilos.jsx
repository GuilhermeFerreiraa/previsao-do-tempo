import styled from "styled-components";

export const Caixa = styled.div`
  max-width: 320px;
  max-height: 380px;
  min-height: 380px;
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
  border-radius: 8px;
  padding: 2px 14px;

  margin: 0 auto 12px;

  p {
    font-size: 12px;
    color: #404040;
  }
`;

export const ResumoDoDia = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  display: flex;
  justify-content: center;
  margin-top: 12px;
  border-radius: 6px;
  border-left: 4px solid;
  background: ${({ status }) => (status !== "danger" ? "#ecfaff" : "#FFECEC")};
  border-color: ${({ status }) =>
    status !== "danger" ? "#41B4D9" : "#ff8a8a"};

  img {
    /* margin-left: 12px; */
    object-fit: contain;
    width: 15%;
  }

  p {
    text-align: left;
    width: 80%;
    color: #41b4d9;
    font-size: 10px;
  }
`;
