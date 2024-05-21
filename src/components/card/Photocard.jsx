import React from "react";
import styled from "styled-components";

const Photocard = ({
  profileImage,
  username,
  postTime,
  postTitle,
  postImages,
  postContent,
  commentsCount,
  likesCount,
}) => {
  return (
    <PhotocardWrapper>
      <PhotocardTop>
        <ProfileImage src={profileImage} />
        <UserInfo>
          <Username>{username}</Username>
          <PostTime>{postTime}</PostTime>
        </UserInfo>
      </PhotocardTop>
      <PostTitle>{postTitle}</PostTitle>
      <ImageContainer>
        {postImages.map((image, index) => (
          <PostImage key={index} src={image} />
        ))}
      </ImageContainer>
      <PostContent>{postContent}</PostContent>
      <PostInfo>
        <Comments>댓글 {commentsCount}</Comments>
        <Likes>좋아요 {likesCount}</Likes>
      </PostInfo>
    </PhotocardWrapper>
  );
};

export default Photocard;

const PhotocardWrapper = styled.div`
  min-width: 410px;
  height: 430px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 25px;
  background-color: #fff;
`;

const PhotocardTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 30px;
`;

const Username = styled.div`
  font-weight: bold;
`;

const PostTime = styled.div`
  font-size: 12px;
  color: #888;
`;

const PostTitle = styled.h3`
  font-size: 20px;
  margin: 30px 0 20px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%
  gap: 5px;
  margin: 10px 0;
`;

const PostImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
`;

const PostContent = styled.p`
  font-size: 15px;
  color: #555;
`;

const PostInfo = styled.div`
  display: flex;
  font-size: 14px;
  color: #888;
`;

const Comments = styled.div`
  margin-right: 10px;
`;

const Likes = styled.div``;
