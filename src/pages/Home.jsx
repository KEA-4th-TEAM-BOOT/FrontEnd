import React from "react";
import { useRecoilValue } from "recoil";
import Banner from "../components/homeSection/Banner";
import AutoPlayer from "../components/homeSection/AutoPlayer";
import Recommend from "../components/homeSection/Recommend";
import Following from "../components/homeSection/Following";
import Popular from "../components/homeSection/Popular";
import Latest from "../components/homeSection/Latest";
import { isUserLoggedIn } from "../recoil/user";

const Home = () => {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <>
      <Banner />
      <AutoPlayer />
      {isLoggedIn ? (
        <>
          <Following />
          <Popular />
          <Recommend />
        </>
      ) : (
        <>
          <Popular />
          <Latest />
        </>
      )}
    </>
  );
};

export default Home;
