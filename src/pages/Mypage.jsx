import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Bloginfo from "../components/mypageSection/Bloginfo";
import Postlist from "../components/mypageSection/Postlist";
import Category from "../components/mypageSection/Category";

const Mypage = () => {
  const location = useLocation();
  const { userInfo } = location.state || {};
  console.log("user Info: " + userInfo);
  return (
    <MyPageWrapper>
      <Bloginfo userInfo={userInfo} />
      <Wrapper>
        <Category userInfo={userInfo} />
        <Postlist userInfo={userInfo} />
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
