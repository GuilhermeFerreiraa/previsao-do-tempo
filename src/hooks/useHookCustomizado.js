import { useEffect, useState } from "react";

import DadosDaPrevisao from "../services/ObterDados";

export default function useHookCustomizado() {
  const [dados, setDados] = useState([]);
  const [nomeDaCidade, setNomeDaCidade] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const diasDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  const calcularMedia = (valores) => {
    const somaValores = valores.reduce((acc, valor) => acc + valor, 0);
    return (somaValores / valores.length).toFixed();
  };

  const temperaturaMaxArray = dados.map((dia) => dia.temperature.max);
  const temperaturaMinArray = dados.map((dia) => dia.temperature.min);

  const mediaMax = calcularMedia(temperaturaMaxArray);
  const mediaMin = calcularMedia(temperaturaMinArray);

  useEffect(() => {
    let timeoutId;

    const pegaDados = async () => {
      try {
        setIsLoading(true);
        const resposta = await DadosDaPrevisao.obterDados();

        timeoutId = setTimeout(() => {
          if (resposta && resposta.data) {
            setNomeDaCidade(resposta.name);
            setDados(resposta.data);
          }
          setIsLoading(false);
        }, 500);
      } catch (error) {
        setIsLoading(false);
        console.error("Não foi possível obter os dados: ", error);
      }
    };

    pegaDados();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const formataData = (horario) => {
    return horario?.replace(/:\d{2}$/, "");
  };

  return {
    dados,
    setDados,
    mediaMax,
    mediaMin,
    isLoading,
    nomeDaCidade,
    diasDaSemana,
    formataData,
  };
}
