import React from "react";
import styled from "styled-components";

const FollowCard = ({
  profileImageUrl,
  nickname,
  followerCount,
  description,
}) => {
  return (
    <CardContainer>
      <ProfileImageWrapper>
        <ProfileImage src={profileImageUrl} alt="profile" />
      </ProfileImageWrapper>
      <InfoContainer>
        <Nickname>{nickname}</Nickname>
        <FollowerCount>팔로워 {followerCount}</FollowerCount>
        <Description>{description}</Description>
      </InfoContainer>
      <FollowButton>팔로우 +</FollowButton>
    </CardContainer>
  );
};

export default FollowCard;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 400px;
  margin: auto;
  position: relative;
`;

const ProfileImageWrapper = styled.div`
  padding: 30px 30px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  object-fit: fill;
`;

const InfoContainer = styled.div`
  padding: 15px;
  text-align: center;
`;

const Nickname = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const FollowerCount = styled.div`
  font-size: 13px;
  color: #65676b;
  margin-bottom: 15px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #65676b;
  margin-bottom: 20px;
`;

const FollowButton = styled.button`
  color: #036ee2;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  width: 70%;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
  background: white;
`;
