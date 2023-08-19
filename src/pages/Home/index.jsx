import {
  Caixa,
  CaixaTopo,
  CaixaCarrosel,
  CaixaBotao,
  ItemCarrosel,
} from "./estilos";

import setaEsquerda from "../../assets/icones/seta.svg";
import useHookCustomizado from "../../hooks/useHookCustomizado";
import Cartao from "../../componentes/Cartao";
import Carregando from "../../componentes/Carregando";

export default function Home() {
  const {
    dados,
    nomeDoEstado,
    RolarParaDireita,
    RolarParaEsquerda,
    carrosel,
    isLoading,
  } = useHookCustomizado();

  return (
    <Caixa>
      <CaixaTopo>
        {nomeDoEstado ? (
          <h1>
            Temperatura para <strong>{nomeDoEstado}</strong> para os próximos{" "}
            <strong>{dados.length} dias</strong>
          </h1>
        ) : (
          <h1>
            Não foi obter os dados de previsão :( <br />
            tente novamente mais tarde!
          </h1>
        )}
      </CaixaTopo>

      <CaixaCarrosel>
        <CaixaBotao>
          <button onClick={RolarParaEsquerda}>
            <img src={setaEsquerda} alt="icone-esquerda" />
          </button>
        </CaixaBotao>

        <ItemCarrosel ref={carrosel}>
          {isLoading ? <Carregando /> : <Cartao />}
        </ItemCarrosel>

        <CaixaBotao>
          <button>
            <img
              onClick={RolarParaDireita}
              className="direita"
              src={setaEsquerda}
              alt="icone-direita"
            />
          </button>
        </CaixaBotao>
      </CaixaCarrosel>
    </Caixa>
  );
}
