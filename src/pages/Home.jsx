import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Banner from "../components/homeSection/Banner";
import AutoPlayer from "../components/homeSection/AutoPlayer";
import Recommend from "../components/homeSection/Recommend";
import Following from "../components/homeSection/Following";
import Popular from "../components/homeSection/Popular";
import Latest from "../components/homeSection/Latest";
import { isUserLoggedIn } from "../recoil/user";
import { main_post_follow } from "../api/PostAPI";

const Home = () => {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const [mainPostList, setMainPostList] = useState();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const postList = await main_post_follow();
        setMainPostList(postList);
        console.log("postList : " + mainPostList);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

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
