import {
  Container,
  InfoData,
  Descricao,
  InfoExtra,
  InfoDataList,
} from "./styles";
import sol from "../../assets/icones/sol.svg";
import atencao from "../../assets/icones/atencao.svg";
// import chuva from '../../assets/icones/chuva.svg';

const DadosDoCartao = [
  {
    id: 0,
    titulo: "Temperatura",
    class: "temp",
    info: {
      default: null,
      min: "14º",
      max: "30º",
    },
  },
  {
    id: 1,
    titulo: "Umidade",
    class: "umidade",
    info: {
      default: null,
      min: "28%",
      max: "81%",
    },
  },
  {
    id: 2,
    titulo: "Sol",
    class: "sol",
    info: {
      default: null,
      min: "06:30",
      max: "18:30",
    },
  },
  {
    id: 3,
    titulo: "chuva",
    class: "chuva",
    info: {
      default: Math.random().toFixed(2),
    },
  },
];

const data = new Date();

export default function Card() {
  return (
    <Container>
      <InfoData>
        <img src={sol} alt="icone-temperatura" />
        <div>
          <strong>{data.toLocaleDateString()}</strong>
          <span>Terça-feira</span>
        </div>
      </InfoData>

      <Descricao>
        <p>
          Sol e aumento de nuvens. Pancadas de chuva à tarde. À noite, muitas
          nuvens, mas sem chuva.
        </p>
      </Descricao>

      {DadosDoCartao.map((item) => (
        <InfoDataList key={item.id}>
          <strong>{item.titulo}:</strong>

          <div className={item.class}>
            {!item.info.default ? (
              <>
                <span>{item.info.max}</span>
                <span>{item.info.min}</span>
              </>
            ) : (
              <span>14º</span>
            )}
          </div>
        </InfoDataList>
      ))}

      <InfoExtra status={"dangerr"}>
        <img src={atencao} alt="icone-atencao" />
        <p>
          Temperatura mínima deste dia será inferior a mínima média do período.
        </p>
      </InfoExtra>
    </Container>
  );
}
