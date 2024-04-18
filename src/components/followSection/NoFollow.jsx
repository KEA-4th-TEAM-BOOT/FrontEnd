import React from "react";
import styled from "styled-components";
import FollowCard from "../card/Followcard";

const NoFollow = () => {
  const followersData = [
    {
      profileImageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w360-h240-n-k-no",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w360-h240-n-k-no",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w360-h240-n-k-no",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w360-h240-n-k-no",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w360-h240-n-k-no",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w360-h240-n-k-no",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
  ];
  return (
    <PageContainer>
      <ContentSection>
        <Title>팔로잉 중인 블로그가 없어요</Title>
        <Subtitle>다양한 블로그를 팔로우 해보세요</Subtitle>
      </ContentSection>
      <RecommendationSection>
        <SectionTitle>팔로잉 추천</SectionTitle>
        <CardGrid>
          {followersData.length ? (
            followersData.map((data, index) => (
              <FollowCard key={index} {...data} />
            ))
          ) : (
            <NoFollowMessage>팔로우할 사용자가 없어요</NoFollowMessage>
          )}
        </CardGrid>
      </RecommendationSection>
    </PageContainer>
  );
};

export default NoFollow;

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.section`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #333;
  margin: 50px 0;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #666;
  text-align: left;
  margin-bottom: 50px;
`;

const RecommendationSection = styled.section`
  background-color: #f7f7f7;
  padding: 20px;
  width: 100%;
`;

const SectionTitle = styled.h3`
  font-size: 25px;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  width: 100%;
  padding-bottom: 50px;
`;

const NoFollowMessage = styled.p`
  color: #666;
  text-align: center;
`;
