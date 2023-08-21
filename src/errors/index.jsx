import nuvemTriste from "../assets/images/nuvem_triste.gif";
import { Caixa, CaixaItem } from "./estilos";

export default function DadosNaoEncontrados() {
  return (
    <Caixa>
      <CaixaItem>
        <img src={nuvemTriste} alt="gif-dados-nao-encontrados" />
        <h1>
          Desculpe! Não foi possível obter os dados da previsão.. <br />
          Tente novamente mais tarde!
        </h1>
      </CaixaItem>
    </Caixa>
  );
}
