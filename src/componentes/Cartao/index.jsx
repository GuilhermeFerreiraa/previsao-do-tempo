import { Caixa, InfoData, Descricao, InfoExtra, ResumoDoDia } from "./estilos";

import sol from "../../../public/assets/icones/sol.svg";
import atencao from "../../../public/assets/icones/atencao.svg";
import informacao from "../../../public/assets/icones/informacao.svg";

export default function dados({
  dados,
  diasDaSemana,
  mediaMax,
  mediaMin,
  formataData,
}) {
  return (
    <Caixa key={dados?.date}>
      <InfoData>
        <img src={sol} alt="icone-temperatura" />
        <div>
          <strong>{dados?.date_br}</strong>
          <span>{diasDaSemana[new Date(dados?.date).getDay()]}</span>
        </div>
      </InfoData>

      <Descricao>
        <p>{dados?.text_icon?.text?.pt}</p>
      </Descricao>

      <ResumoDoDia>
        <strong>Temperatura:</strong>

        <div className="temp">
          <span>{dados?.temperature?.min}º</span>
          <span>{dados?.temperature?.max}º</span>
        </div>
      </ResumoDoDia>

      <ResumoDoDia>
        <strong>Umidade:</strong>

        <div className="umidade">
          <span>
            {`
          ${dados?.humidity?.min}% 
          - 
          ${dados?.humidity?.max}%
          `}
          </span>
        </div>
      </ResumoDoDia>

      <ResumoDoDia>
        <strong>Sol:</strong>
        <div className="sol">
          <span>
            {`${formataData(dados?.sun?.sunrise)} - ${formataData(
              dados?.sun?.sunset
            )}`}
          </span>
        </div>
      </ResumoDoDia>

      <ResumoDoDia>
        <strong>Chuva:</strong>

        <div className="chuva">
          <span>{dados?.rain?.probability}%</span>
        </div>
      </ResumoDoDia>

      {dados?.temperature.max > mediaMax && (
        <InfoExtra status={"maxima"}>
          <img src={atencao} alt="icone-atencao" />
          <p>
            Temperatura máxima deste dia será superior a máxima média do
            período.
          </p>
        </InfoExtra>
      )}

      {dados?.temperature.min < mediaMin && (
        <InfoExtra status={"minima"}>
          <img src={informacao} alt="icone-atencao" />
          <p>
            Temperatura mínima deste dia será inferior a mínima média do
            período.
          </p>
        </InfoExtra>
      )}
    </Caixa>
  );
}
