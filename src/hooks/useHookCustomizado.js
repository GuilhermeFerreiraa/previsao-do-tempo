import { useEffect, useState } from "react";

import DadosDaPrevisao from "../services/ObterDados";

export default function useHookCustomizado() {
  const [dados, setDados] = useState([]);
  const [nomeDaCidade, setNomeDaCidade] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const resposta = await DadosDaPrevisao.obterDados();
        setNomeDaCidade(resposta.name);
        setDados(resposta.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("Não foi possível obter os dados: ", error);
      }
    })();
  }, []);

  const formataData = (horario) => {
    return horario?.replace(/:\d{2}$/, "");
  };

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
    formataData,
    nomeDaCidade,
    diasDaSemana,
  };
}
