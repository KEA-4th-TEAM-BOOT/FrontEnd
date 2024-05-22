import React from "react";
import styled from "styled-components";

import PlayIcon from "../../assets/img/icons/audioplayicon.svg";
import likeXIcon from "../../assets/img/icons/likeXicon.svg";

const Recommendcard = () => {
  return (
    <RecommendWrapper>
      <ProfileWrapper>
        <ProfileImage />
        <Username></Username>
      </ProfileWrapper>
      <PostImage />
      <PlayIcon />
      <PostTitle>배가 고픈 이유</PostTitle>
      <PostContent>
        스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면
        우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가
        시키고 지방을 축적하는 역할을 합니다.
      </PostContent>
      <RecommendBottom>
        <TagContainer></TagContainer>
        <LikeButton likeXIcon />
      </RecommendBottom>
    </RecommendWrapper>
  );
};

export default Recommendcard;

const RecommendWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const PostImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const IconPlay = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
`;

const PostTitle = styled.h3`
  padding: 10px;
  font-size: 18px;
`;

const PostContent = styled.p`
  padding: 0 10px 10px 10px;
  font-size: 14px;
`;

const RecommendBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TagContainer = styled.div``;

const LikeButton = styled.button`
  background: url(${likeXIcon}) no-repeat center;
  border: none;
  width: 30px;
  height: 30px;
`;
