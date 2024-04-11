import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <BannerWrapper>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
        slidesPerView={1} // 한 번에 보여줄 슬라이드 수
        loop={true}
        speed={600}
      >
        <StyledSwiperSlide>
          <BannerContent bgcolor="#C5D9FF" image="https://github.com/KEA-4th-TEAM-BOOT/FrontEnd/assets/118448112/4b71f001-1421-493d-a4ae-4222aa5f41f8">
            <BannerHeding>오디오 블로그</BannerHeding>
          </BannerContent>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
        <BannerContent bgcolor="#DAFFF4">
          2
          </BannerContent>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
        <BannerContent bgcolor="#FAC5FF">
        3
          </BannerContent>
        </StyledSwiperSlide>

      </Swiper>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  min-width: 1280px;
  height: 640px;
  background-position: 50% 50%;
  position: relative;
  margin: 0 auto;
  display:flex;
  overflow: hidden;
  box-sizing: content-box;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: table;
  height: 640px;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 20px; // 글자 크기 조정
`;

const BannerContent = styled.div`
  height:100%;
  position:relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  display: table-cell;
  vertical-align: middle;
`;

const BannerHeding = styled.strong`
  position: relative;
  width: 1080px;
  margin: 0 auto;
  text-align: left;
`

const BannerDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, .8);
  letter-spacing: -.2px;
`

// 추가적으로 .mySwiper 클래스를 사용하여 CSS를 정의할 수 있음
// 예: .mySwiper .swiper-slide { 스타일 규칙 }
