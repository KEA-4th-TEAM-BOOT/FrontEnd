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
    <>
      <Bloginfo userInfo={userInfo} />
      <Wrapper>
        <Category userInfo={userInfo} />
        <Postlist userInfo={userInfo} />
      </Wrapper>
    </>
  );
};

export default Mypage;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;
