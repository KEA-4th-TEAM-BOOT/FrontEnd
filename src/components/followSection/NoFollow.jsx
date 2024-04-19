import React from "react";
import styled from "styled-components";
import FollowCard from "../card/Followcard";

const NoFollow = () => {
  const followersData = [
    {
      profileImageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9w38ygfN8g_N3j9HNxWvKfI09e1nBF0nJBnrOMjFdzuTdEgLb",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAYHTg2J5bnKDwTG3eBF4UwmqFwrnfWy2ZUO7U12fUHlPjhrMd",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMbUQsR62KO6NO65uLrid-12zDjzO8dgilJbpr7kVyj1c6WQTi",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0K7M81E15mDZubxH6HlcCgZKN6lig6v26n6K8JLTEg9baeaKJ",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIapPvmsEr5XbJPL8ZM7GDX2z2IN1gSH-Chi8kKcCxXDl8Wx74",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyR1OuTgfZhRlsZ328_F_9ymblHv0Qp35Jl3-5Z1tai6SOlKHc",
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
      <SectionBackground>
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
      </SectionBackground>
    </PageContainer>
  );
};

export default NoFollow;

const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ContentSection = styled.section`
  padding: 20px;
`;

const Title = styled.h2`
  margin-top: 104px;
  color: #000;
  margin-bottom: 50px;
  margin-left: 200px;
  font-size: 60px;
  font-weight: 800;
  text-align: left;
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #333;
  text-align: left;
  margin-bottom: 50px;
  margin-left: 250px;
  font-weight: bold;
`;

const SectionBackground = styled.section`
  background-color: rgba(0, 150, 255, 0.2);
  padding: 20px;
  width: 100%;
  align-self: center;
`;

const RecommendationSection = styled.section`
  padding: 30px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h3`
  font-size: 40px;
  color: #111;
  margin-bottom: 50px;
  text-align: left;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  max-width: 1200px;
  margin: 30px auto;
`;

const NoFollowMessage = styled.p`
  color: #666;
  text-align: center;
`;
