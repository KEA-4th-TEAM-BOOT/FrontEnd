import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';

const Banner = () => {
  return (
    <BannerWrapper>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
      slidesPerView={1} // 한 번에 보여줄 슬라이드 수
      >
        <StyledSwiperSlide>Slide 1</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 2</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 3</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 4</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 5</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 6</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 7</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 8</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 9</StyledSwiperSlide>
      </Swiper>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  min-width: 1280px;
  height: 640px;
  position: relative;
  margin: 0 auto;
  display:flex;
  overflow: hidden;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  font-size: 20px; // 글자 크기 조정
`;

// 추가적으로 .mySwiper 클래스를 사용하여 CSS를 정의할 수 있음
// 예: .mySwiper .swiper-slide { 스타일 규칙 }
