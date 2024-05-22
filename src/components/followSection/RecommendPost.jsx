import React from "react";
import styled from "styled-components";

export const RecommendcardData = [
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "고소미",
    postImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    postTitle: "배가 고픈 이유",
    Tag: ["식욕", "식사", "영양소", "인체"],
    postContent:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다.",
    isLiked: False,
  },
];

const RecommendPost = () => {
  return (
    <RecommendPostWrapper>
      <RecommendPostTitle>{}님을 위한 추천 게시물</RecommendPostTitle>
    </RecommendPostWrapper>
  );
};

export default RecommendPost;
