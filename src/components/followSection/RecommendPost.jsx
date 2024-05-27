import React from "react";
import styled from "styled-components";
import Recommendcard from "../card/Recommendcard";
import ResetIcon from "../../assets/img/icons/reseticon.svg";

export const RecommendcardData = [
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "고소미",
    postImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    postTitle: "배가 고픈 이유",
    Tag: ["식욕", "식사", "영양소", "인체"],
    postContent:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다.",
    isLiked: false,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "고소미",
    postImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    postTitle: "배가 고픈 이유",
    Tag: ["식욕", "식사", "영양소", "인체"],
    postContent:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다.",
    isLiked: true,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "고소미",
    postImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    postTitle: "배가 고픈 이유",
    Tag: ["식욕", "식사", "영양소", "인체"],
    postContent:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다.",
    isLiked: false,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "고소미",
    postImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    postTitle: "배가 고픈 이유",
    Tag: ["식욕", "식사", "영양소", "인체"],
    postContent:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다.",
    isLiked: true,
  },
];

export const myusername = "날아가는새가되고싶어";

const RecommendPost = () => {
  return (
    <RecommendPostWrapper>
      <RecommendPostTitle>{myusername}님을 위한 추천 게시물</RecommendPostTitle>
      <RecommendcardContainer>
        {RecommendcardData.map((data, index) => (
          <Recommendcard key={index} data={data} />
        ))}
      </RecommendcardContainer>
      <ResetButton onClick={() => window.location.reload()}>
        <img src={ResetIcon} alt="reset" />
      </ResetButton>
    </RecommendPostWrapper>
  );
};

export default RecommendPost;

const RecommendPostWrapper = styled.div`
  padding: 0 120px 220px 120px;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
`;

const RecommendPostTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  word-break: break-all;
`;

const RecommendcardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 20px;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  position: absolute;
  right: 120px;
  top: 0;
  img {
    width: 30px;
    height: 30px;
  }
`;
