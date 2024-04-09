import React from "react";
import styled from "styled-components";

import likeO from "../../images/icons/likeOicon.svg";
import likeX from "../../images/icons/likeXicon.svg";
import comment from "../../images/icons/commenticon.svg";

const categoryColors = {
  LifeStyle: "#FF983A",
  Travel: "#3A7DFF",
  Culture: "#00A023",
  IT: "#F4D259",
};

const Postcard = ({
  imageUrl,
  category,
  likes,
  likesCount,
  commentsCount,
  title,
  content,
  author,
}) => {
  const categoryColor = categoryColors[category] || "#FFFFFF";

  const CardWrapper = styled.div`
    width: 300px;
    height: 450px;
    overflow: hidden;
  `;

  const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  `;

  const CardDetails = styled.div`
    padding: 15px;
  `;

  const CategoryAndIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const CategoryLabel = styled.span`
    background-color: ${(props) => props.backgroundColor};
    color: white;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 14px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // 수정하기
  `;

  const IconsAndCounts = styled.div`
    display: flex;
    align-items: center;
  `;

  const IconAndCount = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px; // Give some space between the like/comment icons
  `;

  const LikeIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `;

  const CommentIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `;

  const Count = styled.span`
    font-size: 14px;
    margin-left: 5px;
  `;

  const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  `;

  const Content = styled.p`
    font-size: 14px;
    margin-top: 5px;
  `;

  const Author = styled.span`
    display: block;
    text-align: right;
    font-size: 12px;
    margin-top: 5px;
  `;

  return (
    <CardWrapper>
      <CardImage src={imageUrl} alt="Postcard Image" />
      <CardDetails>
        <CategoryAndIcons>
          <CategoryLabel style={{ backgroundColor: categoryColor }}>
            {category}
          </CategoryLabel>
          <IconsAndCounts>
            <IconAndCount>
              <LikeIcon src={likes ? likeO : likeX} alt="like" />
              <Count>{likesCount}</Count>
            </IconAndCount>
            <IconAndCount>
              <CommentIcon src={comment} alt="comment" />
              <Count>{commentsCount}</Count>
            </IconAndCount>
          </IconsAndCounts>
        </CategoryAndIcons>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Author>{author}</Author>
      </CardDetails>
    </CardWrapper>
  );
};

export default Postcard;
