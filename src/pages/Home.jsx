import React from "react";
import Banner from "../components/homeSection/Banner";
import AutoPlayer from "../components/homeSection/AutoPlayer";
import Content from "../components/homeSection/Content";
import Recommend from "../components/homeSection/Recommend";
import Following from "../components/homeSection/Following";

const Home = () => {
  return (
    <>
      <Banner />
      <AutoPlayer />
      <Content />
      <Recommend />
      <Following />
    </>
  );
};

export default Home;
