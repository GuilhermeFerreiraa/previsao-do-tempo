import { useSwiper } from "swiper/react";
import { BotaoSlideEsquerda, BotaoSlideDireita } from "./estilo";
import seta from "../../../public/assets/icones/seta.svg";

export default function SwiperBotoes() {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <BotaoSlideEsquerda
        onClick={() => swiper.slidePrev()}
        className="swiper-button-prev"
      >
        <img src={seta} alt="icone-esquerda" />
      </BotaoSlideEsquerda>
      <BotaoSlideDireita
        onClick={() => swiper.slideNext()}
        className="swiper-button-next"
      >
        <img src={seta} alt="icone-direita" className="direito" />
      </BotaoSlideDireita>
    </div>
  );
}
