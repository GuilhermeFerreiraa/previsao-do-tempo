import { Caixa, InfoData, Descricao, InfoExtra, InfoDataList } from "./estilos";

import sol from "../../assets/icones/sol.svg";
import atencao from "../../assets/icones/atencao.svg";

import useHookCustomizado from "../../hooks/useHookCustomizado";
// import chuva from "../../assets/icones/chuva.svg";

export default function Cartao() {
  const { dados, diasDaSemana } = useHookCustomizado();

  console.log();

  return (
    <>
      {dados.map((cartao) => {
        return (
          <Caixa key={cartao.date}>
            <InfoData>
              <img src={sol} alt="icone-temperatura" />
              <div>
                <strong>{cartao.date_br}</strong>
                <span>{diasDaSemana[new Date(cartao.date).getDay()]}</span>
              </div>
            </InfoData>

            <Descricao>
              <p>{cartao.text_icon.text.pt}</p>
            </Descricao>

            <InfoDataList>
              <strong>Temperatura:</strong>

              <div className="temp">
                <span>{cartao.temperature.min}º</span>
                <span>{cartao.temperature.max}º</span>
              </div>
            </InfoDataList>

            <InfoDataList>
              <strong>Umidade:</strong>

              <div className="umidade">
                <span>{cartao.humidity.min}%</span>
                <span>-</span>
                <span>{cartao.humidity.max}%</span>
              </div>
            </InfoDataList>

            <InfoDataList>
              <strong>Sol:</strong>

              <div className="sol">
                <span>{cartao.sun.sunrise}</span>
                <span>-</span>
                <span>{cartao.sun.sunset}</span>
              </div>
            </InfoDataList>

            <InfoDataList>
              <strong>Chuva:</strong>

              <div className="chuva">
                <span>{cartao.rain.probability}%</span>
              </div>
            </InfoDataList>

            <InfoExtra status={"dangerr"}>
              <img src={atencao} alt="icone-atencao" />
              <p>
                Temperatura mínima deste dia será inferior a mínima média do
                período. Temperatura máxima deste dia será superior a máxima
                média do período.
              </p>
            </InfoExtra>
          </Caixa>
        );
      })}
    </>
  );
}
