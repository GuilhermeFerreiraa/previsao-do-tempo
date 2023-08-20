import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Cartao from "../Cartao";
import useHookCustomizado from "../../hooks/useHookCustomizado";

import SwiperBotoes from "./SwiperBotoes";

export default function Carrosel() {
  const { formataData, diasDaSemana, dados } = useHookCustomizado();

  return (
    <Swiper
      slidesPerView={3}
      style={{ maxWidth: "80%", margin: "0 auto" }}
      effect="Fade"
      modules={[EffectFade, Navigation, Pagination]}
    >
      {dados.map((cartao) => (
        <SwiperSlide key={cartao.date_br}>
          <Cartao
            dados={cartao}
            formataData={formataData}
            diasDaSemana={diasDaSemana}
          />
        </SwiperSlide>
      ))}
      <SwiperBotoes />
    </Swiper>
  );
}
