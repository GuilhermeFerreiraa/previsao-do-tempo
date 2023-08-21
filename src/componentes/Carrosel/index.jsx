import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Cartao from "../Cartao";
import useHookCustomizado from "../../hooks/useHookCustomizado";

import SwiperBotoes from "./SwiperBotoes";

export default function Carrosel() {
  const { dados, mediaMin, mediaMax, diasDaSemana, formataData } =
    useHookCustomizado();

  const estiloCarrosel = { maxWidth: "85%", padding: "0 10px" };
  const estiloItemCarrosel = { display: "flex", justifyContent: "center" };

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <Swiper
      effect="Fade"
      slidesPerView={3}
      style={estiloCarrosel}
      breakpoints={breakpoints}
      modules={[EffectFade, Navigation, Pagination]}
    >
      {dados.map((cartao) => (
        <SwiperSlide key={cartao.date_br} style={estiloItemCarrosel}>
          <Cartao
            dados={cartao}
            mediaMax={mediaMax}
            mediaMin={mediaMin}
            formataData={formataData}
            diasDaSemana={diasDaSemana}
          />
        </SwiperSlide>
      ))}
      <SwiperBotoes />
    </Swiper>
  );
}
