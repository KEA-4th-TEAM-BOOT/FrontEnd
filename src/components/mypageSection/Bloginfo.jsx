import React, { useState } from "react";
import styled from "styled-components";
import Followlist from "../mypageSection/Followlist";

const Bloginfo = () => {
  const profileData = {
    profileImage:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaWksGAUsmDHd-Zmfu6-6TgiH0qtw23poll21guIBMfSvCXsDf",
    nickname: "닉네임",
    intro: "한 줄 소개",
    postCount: 10,
    followersCount: 20,
    followingCount: 15,
  };

  const [showFollowList, setShowFollowList] = useState(false);
  const [followListType, setFollowListType] = useState("");

  const handleFollowersClick = () => {
    setFollowListType("followers");
    setShowFollowList(true);
  };

  const handleFollowingClick = () => {
    setFollowListType("following");
    setShowFollowList(true);
  };

  return (
    <ListcardWrapper>
      <BlogInfo>
        <ProfileImage src={profileData.profileImage} alt="profile image" />
        <InfoWrapper>
          <Nickname>
            <StyledNickname>{profileData.nickname}</StyledNickname>
            <BlogTitle>님의 블로그</BlogTitle>
          </Nickname>
          <Introduction>{profileData.intro}</Introduction>
          <StatsWrapper>
            <Stat>{`게시물 ${profileData.postCount}`}</Stat>
            <Stat
              onClick={handleFollowersClick}
            >{`팔로워 ${profileData.followersCount}`}</Stat>
            <Stat
              onClick={handleFollowingClick}
            >{`팔로잉 ${profileData.followingCount}`}</Stat>
          </StatsWrapper>
        </InfoWrapper>
      </BlogInfo>
      {showFollowList && (
        <Followlist
          type={followListType}
          onClose={() => setShowFollowList(false)}
        />
      )}
    </ListcardWrapper>
  );
};

export default Bloginfo;

const ListcardWrapper = styled.div``;

const BlogInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 150px 0 100px 450px;
  width: 800px;
  background: #fff;
  border-radius: 10px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 50px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.div`
  color: #111;
  font-weight: bold;
  margin-bottom: 25px;
  display: flex;
  align-items: baseline;
`;

const StyledNickname = styled.span`
  font-size: 40px;
  margin-right: 7px;
`;

const BlogTitle = styled.span`
  font-size: 30px;
`;

const Introduction = styled.div`
  color: #333;
  font-size: 25px;
  font-weight: bold;
`;

const StatsWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  & > div:not(:last-child) {
    margin-right: 15px;
  }
`;

const Stat = styled.div`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
