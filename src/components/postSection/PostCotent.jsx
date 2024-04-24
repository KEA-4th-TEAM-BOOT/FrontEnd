import React, { useState } from "react";
import styled from "styled-components";
import Category from "../mypageSection/Category";
import Comment from "./Comment";

import likeOIcon from "../../../src/assets/img/icons/likeOicon.svg";
import likeXIcon from "../../../src/assets/img/icons/likeXicon.svg";
import SharedBtn from "../../../src/assets/img/icons/shareicon.svg";

const PostCotent = () => {
  const PostData = {
    likes: 72,
    isLiked: true,
    user: {
      nickname: "제주파",
      intro: "제주도에 사는 20대 아저씨가 끄적이는 블로그",
      isFollowing: false,
      profileImage: "https://grayround.com/common/img/default_profile.png",
    },
  };

  const [postData, setPostData] = useState(PostData);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleLike = () => {
    setPostData({
      ...postData,
      isLiked: !postData.isLiked,
      likes: postData.isLiked ? postData.likes - 1 : postData.likes + 1,
    });
  };

  const toggleFollow = () => {
    setPostData({
      ...postData,
      user: {
        ...postData.user,
        isFollowing: !postData.user.isFollowing,
      },
    });
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL이 복사되었습니다!");
  };

  return (
    <ContentWrapper>
      <CategorySection>
        <Category />
      </CategorySection>
      <ContentSection>
        <ContentDisplay>콘텐츠{postData.content}</ContentDisplay>
        <PostBtnWrapper>
          <LikeInfo onClick={toggleLike}>
            {postData.isLiked ? (
              <LikeIcon src={likeOIcon} alt="Liked" />
            ) : (
              <LikeIcon src={likeXIcon} alt="Not Liked" />
            )}
            <span>{postData.likes}</span>
          </LikeInfo>
          <ShareBtn onClick={copyUrlToClipboard}>
            <img src={SharedBtn} alt="Share" />
          </ShareBtn>
        </PostBtnWrapper>
        <ProfileWrapper>
          <InfoContainer>
            <Nickname>{postData.user.nickname}</Nickname>
            <Introduction>{postData.user.intro}</Introduction>
            <FollowButton onClick={toggleFollow}>
              {postData.user.isFollowing ? "팔로잉" : "팔로우"}
            </FollowButton>
          </InfoContainer>
          <ProfileImage
            src={postData.user.profileImage}
            alt={postData.user.nickname}
          />
        </ProfileWrapper>
        <Comment />
      </ContentSection>
    </ContentWrapper>
  );
};

export default PostCotent;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
  background: #fff;
  padding-right: 280px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategorySection = styled.div`
  border-right: 1px solid #ddd;
`;

const ContentSection = styled.section`
  width: 80%;
  padding: 0 30px;
  box-sizing: border-box;
`;

const ContentDisplay = styled.div`
  margin: 30px 0;
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

const PostBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

const LikeInfo = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LikeIcon = styled.img`
  margin-right: 10px;
`;

const ShareBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ProfileWrapper = styled.div`
  background-color: #eff8ff;
  padding: 30px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Nickname = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const Introduction = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

const FollowButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: #0056b3;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #ddd;
`;
