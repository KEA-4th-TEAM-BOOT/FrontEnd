import React from "react";
import Main from "./Main";
import Banner from "../components/contents/Banner";
import Content from "../components/contents/Content";
import Recommend from "../components/contents/Recommend";
import Footer from "./Footer";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <Main
      title="Auda : 글이 내게로 오다"
      description="내 목소리로 들려주는 글 : Auda"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        loop={true}
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
      <Footer />
    </Main>
  );
};

export default Home;
