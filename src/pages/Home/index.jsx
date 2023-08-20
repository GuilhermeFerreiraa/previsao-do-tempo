import { Caixa, CaixaTopo } from "./estilos";

import Carrosel from "../../componentes/Carrosel";
import useHookCustomizado from "../../hooks/useHookCustomizado";

export default function Home() {
  const { dados, nomeDaCidade } = useHookCustomizado();

  return (
    <Caixa>
      <CaixaTopo>
        {nomeDaCidade ? (
          <h1>
            Temperatura para <strong>{nomeDaCidade}</strong> para os próximos{" "}
            <strong>{dados.length} dias</strong>
          </h1>
        ) : (
          <h1>
            Não foi possível obter os dados da previsão.. <br /> Tente novamente
            mais tarde!
          </h1>
        )}
      </CaixaTopo>

      <Carrosel />
    </Caixa>
  );
}
