import { useEffect } from "react";
import styled from "styled-components";
import Bloginfo from "../components/mypageSection/Bloginfo";
import Postlist from "../components/mypageSection/Postlist";
import Category from "../components/mypageSection/Category";
import { fetchUser } from "../api/UserAPI";
import { UserProfileState } from "../recoil/user";
import { useSetRecoilState } from "recoil";

const Mypage = () => {
  const setUserProfileState = useSetRecoilState(UserProfileState);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await fetchUser();
        setUserProfileState({
          name: userInfo.name,
          email: userInfo.email,
          nickname: userInfo.nickname,
          profileUrl: userInfo.profileUrl,
          introduce: userInfo.introduce,
          userLink: userInfo.userLink,
          followingNum: userInfo.followingNum,
          followerNum: userInfo.followerNum,
          latestPostId: userInfo.latestPostId,
          postCnt: userInfo.postCnt,
          voiceModelUrl: userInfo.voiceModelUrl,
          categoryList: userInfo.categoryList,
          followingList: userInfo.followingList,
          followerList: userInfo.followerList,
        });
        console.log(userInfo);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);
  return (
    <>
      <Bloginfo />
      <Wrapper>
        <Category />
        <Postlist />
      </Wrapper>
    </>
  );
};

export default Mypage;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;
