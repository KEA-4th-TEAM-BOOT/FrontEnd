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
        speed={600}
      >
        <StyledSwiperSlide>
          <BannerContent bgcolor="#C5D9FF">
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
  position: relative;
  margin: 0 auto;
  display:flex;
  overflow: hidden;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: table;
  width: auto;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 20px; // 글자 크기 조정
`;

const BannerContent = styled.div`
  width:100%;
  height:100%;
  position:relative;
  background-color: ${(props) => props.bgcolor};
  display: table-cell;
  padding: 40px 0 0;
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
