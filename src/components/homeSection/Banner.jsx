import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <BannerWrapper>
      <Swiper
        navigation={false}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        slidesPerView={1} // 한 번에 보여줄 슬라이드 수
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1100}
      >
        <StyledSwiperSlide>
          <BannerContent
            bgcolor="#C5D9FF"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/88f2c77a2875834435755ac67f56c25eaa8da2c2ed756b2a4b69437c04c9d006?apiKey=a9a9d68966df47cab33790d709ea20f1&"
          >
            <BannerScene>
              <BannerHeding>
                <b>오디오 블로그</b>
                <br />
                블로그를 들어보세요
              </BannerHeding>
              <BannerDescription>
                VODA의 오디오 블로그 지금 바로 체험해보세요.
              </BannerDescription>
            </BannerScene>
          </BannerContent>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <BannerContent
            bgcolor="#C5D9FF"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/522049669d5314d0166a72a972c440a9a97064791f89d8af2ca55af33b44766f?apiKey=a9a9d68966df47cab33790d709ea20f1&"
          >
            <BannerScene>
              <BannerHeding>
                <b>실시간 트렌드</b>
                <br />
                오디오로 읽어보세요
              </BannerHeding>
              <BannerDescription>
                VODA의 오디오 블로그 지금 바로 체험해보세요.
              </BannerDescription>
            </BannerScene>
          </BannerContent>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <BannerContent
            bgcolor="#C5D9FF"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/3def259ef8a152984b8ceb2b0a0a006df851f579e8c3430dbc0148b665466b5d?apiKey=a9a9d68966df47cab33790d709ea20f1&"
          >
            <BannerScene>
              <BannerHeding>
                <b>AI 추천 블로그</b>
                <br />
                VODA에서 바로 재생
              </BannerHeding>
              <BannerDescription>
                VODA의 오디오 블로그 지금 바로 체험해보세요.
              </BannerDescription>
            </BannerScene>
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
  display: flex;
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
  height: 100%;
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  display: table-cell;
  padding: 40px 0 0;
  background-position: 50% 50%;
  vertical-align: middle;
`;

const BannerScene = styled.div`
  position: relative;
  width: 1080px;
  margin-left: 255px;
  text-align: left;
`;

const BannerHeding = styled.strong`
  font-weight: 400;
  font-size: 54px;
  line-height: 65px;
  color: #000;
  letter-spacing: -1.8px;
`;

const BannerDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: -0.2px;
`;

// 추가적으로 .mySwiper 클래스를 사용하여 CSS를 정의할 수 있음
// 예: .mySwiper .swiper-slide { 스타일 규칙 }
