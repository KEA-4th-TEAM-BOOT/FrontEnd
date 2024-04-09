import React from "react";
import Banner from "../components/homeSection/Banner";
import Content from "../components/homeSection/Content";
import Recommend from "../components/homeSection/Recommend";
import Following from "../components/homeSection/Following";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
