import React from "react";
import styled from "styled-components";
import FollowCard from "../card/Followcard";

const NoFollow = () => {
  const profileData = {
    profileImageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w360-h240-n-k-no",
    nickname: "취미도서관",
    followerCount: 32,
    description: "블로그를 취미로 하는 명예 사서",
  };
  return (
    <NoFollowContainer>
      <Title>팔로잉 중인 분들이 없어요</Title>
      <Subtitle>다양한 분들을 팔로우 해보세요</Subtitle>
      <FollowCard {...profileData} />
    </NoFollowContainer>
  );
};

export default NoFollow;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-top: 48px; // Adjust as needed
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 48px; // Adjust as needed
`;

const NoFollowContainer = styled.div`
  max-width: 1200px; // Adjust to match your layout
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
