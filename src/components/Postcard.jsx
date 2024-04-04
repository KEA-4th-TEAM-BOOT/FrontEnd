import React from "react";
import styled from "styled-components";

import likeO from "../images/icons/likeOicon.svg";
import likeX from "../images/icons/likeXicon.svg";
import comment from "../images/icons/commenticon.svg";

const Postcard = ({ imageUrl, category, likes, comments }) => {
  return (
    <CardWrapper>
      <CardImage src={imageUrl} alt="Postcard Image" />
      <CategoryLabel>{category}</CategoryLabel>
      <IconBar>
        <LikeIcon src={likes ? likeO : likeX} alt="like" />
        <CommentIcon src={comment} alt="comment"></CommentIcon>
      </IconBar>
    </CardWrapper>
  );
};

export default Postcard;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 300px; // 이미지의 너비에 맞춤
  height: 330px; // 이미지의 높이에 맞춤
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CategoryLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
`;

const IconBar = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
`;

const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

const CommentIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
