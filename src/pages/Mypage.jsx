import { useState, useEffect } from "react";
import styled from "styled-components";
import Bloginfo from "../components/mypageSection/Bloginfo";
import Postlist from "../components/mypageSection/Postlist";
import Category from "../components/mypageSection/Category";
import { fetchUser, fetchUserData } from "../api/UserAPI";
import { useSetRecoilState } from "recoil";
import { UserProfileState } from "../recoil/user";
import { useLocation, useParams } from "react-router-dom";

const Mypage = () => {
  const location = useLocation();
  const { userLink } = useParams();
  const setUserProfileState = useSetRecoilState(UserProfileState);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let userInfo;
        if (location.pathname === "/mypage") {
          userInfo = await fetchUser(); // /mypage로 접근한 경우
          setUserProfileState(userInfo);
        } else {
          userInfo = await fetchUserData(userLink); // /:userLink로 접근한 경우
        }
        setUserInfo(userInfo);
        console.log(userInfo);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, [location.pathname, userLink, setUserProfileState]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <MyPageWrapper>
      <Bloginfo userInfo={userInfo} />
      <Wrapper>
        <Category categoryList={userInfo.categoryList} />
        <Postlist posts={userInfo.posts} />
      </Wrapper>
    </MyPageWrapper>
  );
};

export default Mypage;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;
