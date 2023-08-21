import { Caixa, CaixaTopo } from "./estilos";

import Carrosel from "../../componentes/Carrosel";
import useHookCustomizado from "../../hooks/useHookCustomizado";

import Carregando from "../../componentes/Carregando/index";
import DadosNaoEncontrados from "../../errors";

export default function Home() {
  const { dados, nomeDaCidade, isLoading } = useHookCustomizado();

  return (
    <Caixa>
      {dados.length > 0 ? (
        <>
          <CaixaTopo>
            {nomeDaCidade ? (
              <h1>
                Temperatura para <strong>{nomeDaCidade}</strong> para os
                próximos <strong>{dados.length} dias</strong>
              </h1>
            ) : (
              <h1>Obtendo previsão de dados...</h1>
            )}
          </CaixaTopo>

          <Carrosel />
        </>
      ) : isLoading ? (
        <Carregando />
      ) : (
        <DadosNaoEncontrados />
      )}
    </Caixa>
  );
}
