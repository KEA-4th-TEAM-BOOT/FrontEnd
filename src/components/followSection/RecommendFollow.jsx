import React, { useState } from "react";
import styled from "styled-components";
import FollowCard from "../card/Followcard";
import { useRecoilValue } from "recoil";
import { UserProfileState } from "../../recoil/user";
const RecommendFollow = () => {
  const userInfo = useRecoilValue(UserProfileState);

  const nonFollowList = userInfo.nonFollowList;

  console.log(nonFollowList);

  const [followersData, setFollowersData] = useState([
    {
      profileImageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9w38ygfN8g_N3j9HNxWvKfI09e1nBF0nJBnrOMjFdzuTdEgLb",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
      isFollowing: false,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAYHTg2J5bnKDwTG3eBF4UwmqFwrnfWy2ZUO7U12fUHlPjhrMd",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
      isFollowing: false,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMbUQsR62KO6NO65uLrid-12zDjzO8dgilJbpr7kVyj1c6WQTi",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
      isFollowing: false,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0K7M81E15mDZubxH6HlcCgZKN6lig6v26n6K8JLTEg9baeaKJ",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
      isFollowing: false,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIapPvmsEr5XbJPL8ZM7GDX2z2IN1gSH-Chi8kKcCxXDl8Wx74",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
      isFollowing: false,
    },
    {
      profileImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyR1OuTgfZhRlsZ328_F_9ymblHv0Qp35Jl3-5Z1tai6SOlKHc",
      nickname: "취미도서관",
      followerCount: 32,
      description: "블로그를 취미로 하는 명예 사서",
      isFollowing: false,
    },
  ]);

  const handleFollowToggle = (index) => {
    const updatedFollowers = followersData.map((follower, i) =>
      i === index
        ? { ...follower, isFollowing: !follower.isFollowing }
        : follower
    );
    setFollowersData(updatedFollowers);
  };

  return (
    <PageContainer>
      <SectionBackground>
        <RecommendationSection>
          <SectionTitle>팔로잉 추천</SectionTitle>
          <CardGrid>
            {nonFollowList.length ? (
              nonFollowList.map((data, index) => (
                <FollowCard
                  key={index}
                  {...data}
                  onFollowToggle={() => handleFollowToggle(index)}
                />
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

export default RecommendFollow;

const PageContainer = styled.div`
  padding: 0 120px 220px 120px;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SectionBackground = styled.section`
  width: 100%;
  margin-bottom: 150px;
  align-self: center;
`;

const RecommendationSection = styled.section`
  padding: 30px 0;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  word-break: break-all;
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
  width: 100%;
  box-sizing: border-box;
`;

const NoFollowMessage = styled.p`
  color: #666;
  text-align: center;
`;
