import { useCallback, useEffect, useRef, useState } from "react";

import DadosDaPrevisao from "../services/ObterDados";

export default function useHookCustomizado() {
  const [dados, setDados] = useState([]);
  const [nomeDoEstado, setNomeDoEstado] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const carrosel = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const resposta = await DadosDaPrevisao.obterDados();
        setNomeDoEstado(resposta.name);
        setDados(resposta.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Não foi possível obter os dados: ", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const RolarParaDireita = useCallback((e) => {
    const tamanhoDaTela = carrosel.current.offsetWidth / 3;
    e.preventDefault();
    carrosel.current.scrollLeft += tamanhoDaTela;
  }, []);

  const RolarParaEsquerda = useCallback((e) => {
    const tamanhoDaTela = carrosel.current.offsetWidth / 3;
    e.preventDefault();
    carrosel.current.scrollLeft -= tamanhoDaTela;
  }, []);

  const diasDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  return {
    dados,
    setDados,
    isLoading,
    nomeDoEstado,
    carrosel,
    diasDaSemana,
    RolarParaDireita,
    RolarParaEsquerda,
  };
}
