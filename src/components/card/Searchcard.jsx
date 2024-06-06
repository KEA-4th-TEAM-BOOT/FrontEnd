import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import likeOIcon from "../../assets/img/icons/likeOicon.svg";
import likeXIcon from "../../assets/img/icons/likeXicon.svg";
import commentIcon from "../../assets/img/icons/commenticon.svg";

const SearchCard = ({
  thumbnail,
  title,
  content,
  date,
  profileImg,
  username,
  likes,
  likesCount,
  commentsCount,
  userLink,
  id,
}) => {
  const [datePart] = date.split("T");
  const navigate = useNavigate();

  const handleMovePost = () => {
    navigate(`/${userLink}/post/${id}`);
  };
  return (
    <CardContainer onClick={handleMovePost}>
      <Thumbnail src={thumbnail} alt="Thumbnail" />
      <ContentContainer>
        <Title>
          <TitleText>{title}</TitleText>
          <UserContainer>
            <ProfileImg src={profileImg} alt={username} />
            <Username>{username}</Username>
          </UserContainer>
        </Title>
        <Content>{content}</Content>
        <PostInfo>
          <Date>{datePart}</Date>
          <LikesCommentsContainer>
            <Icon src={likes ? likeOIcon : likeXIcon} alt="Likes" />
            <Count>{likesCount}</Count>
            <Icon src={commentIcon} alt="Comments" />
            <Count>{commentsCount}</Count>
          </LikesCommentsContainer>
        </PostInfo>
      </ContentContainer>
    </CardContainer>
  );
};

export default SearchCard;

const CardContainer = styled.div`
  display: flex;
  align-items: column;
  padding: 15px 0;
  margin: 15px 0;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Thumbnail = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const TitleText = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const Content = styled.p`
  font-size: 13px;
  color: #444;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Date = styled.span`
  font-size: 15px;
  color: #555;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

const Username = styled.span`
  font-size: 15px;
`;

const LikesCommentsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const Count = styled.span`
  font-size: 14px;
  margin-right: 16px;
`;
