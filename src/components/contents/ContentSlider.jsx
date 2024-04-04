import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import AudioCard from '../Audiocard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ContentSlider = () => {
  return (
    <Swiper
    slidesPerView={4.5}
    spaceBetween={30}
    className="audioCardSlider"
  >
    <SwiperSlide><AudioCard 
    imageUrl="https://nerd-lee.github.io/assets/img/etc/styledcomponents.png"
    category="라이프스타일"
    title="한국의 벚꽃이 일본의 국화가 된 이유"
    writer="관계자외 출입 금지"
    tag="#벚꽃"
  /></SwiperSlide>
    <SwiperSlide><AudioCard /></SwiperSlide>
    <SwiperSlide><AudioCard /></SwiperSlide>
    <SwiperSlide><AudioCard /></SwiperSlide>
    <SwiperSlide><AudioCard /></SwiperSlide>
    <SwiperSlide><AudioCard /></SwiperSlide>
    <SwiperSlide><AudioCard /></SwiperSlide>
    <SwiperSlide><AudioCard /></SwiperSlide>
    <SwiperSlide><AudioCard /></SwiperSlide>
  </Swiper>
  )
}

export default ContentSlider