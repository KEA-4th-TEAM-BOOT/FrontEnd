import React, { useState } from "react";
import styled from "styled-components";
import PlayIcon from "../../assets/img/icons/audioplayicon.svg";
import likeOIcon from "../../assets/img/icons/likeOblueicon.svg";
import likeXIcon from "../../assets/img/icons/likeXblueicon.svg";

const Recommendcard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(data.isLiked);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <RecommendWrapper>
      <ProfileWrapper>
        <ProfileImage src={data.profileImage} />
        <Username>{data.username}</Username>
      </ProfileWrapper>
      <PostImageWrapper>
        <PostImage src={data.postImage}>
          <IconPlay src={PlayIcon} />
        </PostImage>
      </PostImageWrapper>
      <PostTitle>{data.postTitle}</PostTitle>
      <PostContent>{data.postContent}</PostContent>
      <RecommendBottom>
        <TagContainer>
          {data.Tag.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </TagContainer>
        <LikeButton liked={isLiked} onClick={handleLikeClick} />
      </RecommendBottom>
    </RecommendWrapper>
  );
};

export default Recommendcard;

const RecommendWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  overflow: hidden;
  width: calc((100% - 60px) / 4);
  height: 450px;
  padding: 0 23px;
  box-sizing: border-box;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 14px;
  font-weight: 400;
  word-break: break-all;
`;

const PostImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PostImage = styled.div`
  width: 170px;
  height: 170px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 7px;
  position: relative;
`;

const IconPlay = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
`;

const PostTitle = styled.span`
  display: block;
  padding: 0 25px;
  font-size: 15px;
  font-weight: 800;
  margin-top: 21px;
  word-break: break-all;
`;

const PostContent = styled.span`
  display: -webkit-box;
  padding: 0 25px;
  font-size: 11px;
  font-weight: 400;
  margin-top: 20px;
  word-break: break-all;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RecommendBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: 11px;
  margin-right: 5px;
  color: #000;
`;

const LikeButton = styled.button`
  background: url(${(props) => (props.liked ? likeOIcon : likeXIcon)}) no-repeat
    center;
  border: none;
  width: 27px;
  height: 25px;
  cursor: pointer;
`;
