import React from "react";
import Banner from "../components/homeSection/Banner";
import Content from "../components/homeSection/Content";
import Recommend from "../components/homeSection/Recommend";
import Following from "../components/homeSection/Following";

const Home = () => {
  return (
    <>
      <Banner />
      <Content />
      <Recommend />
      <Following />
    </>
  );
};

export default Home;
