import {
  Container,
  HeaderContainer,
  ContainerCarousel,
  ContainerButton,
  CarouselItems,
} from "./styles";

import setaEsquerda from "../../assets/icones/seta.svg";
import Card from "../../components/Card/Card";
import { useCallback, useRef } from "react";

export default function Home() {
  const carrosel = useRef(null);

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
