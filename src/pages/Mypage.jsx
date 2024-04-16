import React from "react";
import styled from "styled-components";
import Bloginfo from "../components/mypageSection/Bloginfo";
import Postlist from "../components/mypageSection/Postlist";
import Category from "../components/mypageSection/Category";

const Mypage = () => {
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
