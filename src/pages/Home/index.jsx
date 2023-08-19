import {
  Container,
  HeaderContainer,
  ContainerCarousel,
  ContainerButton,
  CarouselItems,
} from "./styles";

import setaEsquerda from "../../assets/icones/seta.svg";
import Card from "../../components/Card/Card";
import { useCallback, useEffect, useRef } from "react";

export default function Home() {
  const carrosel = useRef(null);
  // const [data, setData] = useState([]);

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

  useEffect(() => {
    (async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
            "Access-Control-Allow-Methods": "GET",
          },
        };

        fetch(
          "http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/hours/72?token=f8d367bbf613624394fd1ae1d27ce608",
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <h1>
          Temperatura para <strong>São Paulo</strong> para os próximos{" "}
          <strong>15 dias</strong>
        </h1>
      </HeaderContainer>

      <ContainerCarousel>
        <ContainerButton>
          <button onClick={RolarParaEsquerda}>
            <img src={setaEsquerda} alt="icone-esquerda" />
          </button>
        </ContainerButton>

        <CarouselItems ref={carrosel}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CarouselItems>

        <ContainerButton>
          <button>
            <img
              onClick={RolarParaDireita}
              className="direita"
              src={setaEsquerda}
              alt="icone-direita"
            />
          </button>
        </ContainerButton>
      </ContainerCarousel>
    </Container>
  );
}
