import { useState } from "react";
import styled from "styled-components";
import Followlist from "../mypageSection/Followlist";

const Bloginfo = ({ userInfo }) => {
  const [showFollowList, setShowFollowList] = useState();
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
        <ProfileImage src={userInfo.profileUrl} alt="profile image" />
        <InfoWrapper>
          <Nickname>
            <StyledNickname>{userInfo.nickname}</StyledNickname>
            <BlogTitle>님의 블로그</BlogTitle>
          </Nickname>
          <Introduction>{userInfo.introduce}</Introduction>
          <StatsWrapper>
            <Stat>{`게시물 ${userInfo.postCnt}`}</Stat>
            <Stat
              onClick={handleFollowersClick}
            >{`팔로워 ${userInfo.followerNum}`}</Stat>
            <Stat
              onClick={handleFollowingClick}
            >{`팔로잉 ${userInfo.followingNum}`}</Stat>
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
  padding: 150px 0 100px 0;
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
