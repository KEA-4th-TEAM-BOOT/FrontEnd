import React from "react";
import Main from "./Main";
import Banner from "../components/contents/Banner";
import Content from "../components/contents/Content";
import Recommend from "../components/contents/Recommend";
import Following from "../components/contents/Following";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Home = () => {
  return (
    <Main
      title="Auda : 글이 내게로 오다"
      description="내 목소리로 들려주는 글 : Auda"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <SwiperSlide>
          <Banner
            imageUrl="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa"
            contentTitle="카카오"
            contentWriter="Suzuki"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Banner
            imageUrl="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa"
            contentTitle="카카오1"
            contentWriter="Suzuki1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Banner
            imageUrl="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa"
            contentTitle="카카오2"
            contentWriter="Suzuki2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Banner
            imageUrl="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa"
            contentTitle="카카오3"
            contentWriter="Suzuki3"
          />
        </SwiperSlide>
      </Swiper>

      <Content />
      <Recommend />
      <Following />
    </Main>
  );
};

export default Home;
