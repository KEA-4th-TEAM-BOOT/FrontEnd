import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Banner from "../components/homeSection/Banner";
import AutoPlayer from "../components/homeSection/AutoPlayer";
import Recommend from "../components/homeSection/Recommend";
import Following from "../components/homeSection/Following";
import Popular from "../components/homeSection/Popular";
import Latest from "../components/homeSection/Latest";
import { isUserLoggedIn } from "../recoil/user";
import { main_post, main_post_login } from "../api/PostAPI";

const Home = () => {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const [mainPostList, setMainPostList] = useState();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let postList;
        if (isLoggedIn) {
          postList = await main_post_login();
        } else {
          postList = await main_post(); // 로그아웃 상태에서 호출할 API 함수
        }
        setMainPostList(postList);
        console.log("postList : ", postList);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, [isLoggedIn]);

  return (
    <>
      <Banner />
      {/* <AutoPlayer /> */}
      {isLoggedIn ? (
        <>
          <Following postList={mainPostList} />
          <Popular postList={mainPostList} />
          <Recommend />
        </>
      ) : (
        <>
          <Popular postList={mainPostList} />
          <Latest postList={mainPostList} />
        </>
      )}
    </>
  );
};

export default Home;
