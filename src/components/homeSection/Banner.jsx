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
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1100}
      >
        <StyledSwiperSlide>
          <BannerContent
            bgcolor="#C5D9FF"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/6066deb538ac84795d77caf084a6a64edfc28ba050a44e62cd884f137d642e45?apiKey=a9a9d68966df47cab33790d709ea20f1&"
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
  display: flex;
  height: 640px;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
`;

const BannerScene = styled.div`
  position: relative;
  width: 1080px;
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
