import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import playBtn from "../../assets/img/icons/playbluebtn.svg";
import pauseBtn from "../../assets/img/icons/pausebluebtn.svg";
import likeIcon from "../../assets/img/icons/likeXicon.svg";
import commentIcon from "../../assets/img/icons/commenticon.svg";

const ListCard = ({
  title,
  content,
  tags,
  date,
  likes,
  comments,
  thumbnail,
  audioSrc,
  userLink,
  id,
}) => {
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();
  const togglePlay = () => {
    setPlaying(!playing);
  };

  // 문자열을 'T'를 기준으로 분리
  const [datePart] = date.split("T");

  const handleMovePost = () => {
    navigate(`/${userLink}/post/${id}`);
  };

  return (
    <CardContainer>
      <ContentContainer onClick={handleMovePost}>
        <TitleBar>
          <Title>{title}</Title>
          {audioSrc && (
            <PlayButton onClick={togglePlay}>
              <PlayIcon
                src={playing ? pauseBtn : playBtn}
                alt="Play or pause"
              />
            </PlayButton>
          )}
        </TitleBar>
        <Content>{content}</Content>
        <TagLine>
          <TagsContainer>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
          <Divider />
        </TagLine>
        <Footer>
          <Date>{datePart}</Date>
          <LikesCommentsContainer>
            <Likes>
              <Icon src={likeIcon} alt="Likes" />
              {likes}
            </Likes>
            <Comments>
              <Icon src={commentIcon} alt="Comments" />
              {comments}
            </Comments>
          </LikesCommentsContainer>
        </Footer>
      </ContentContainer>
      <ThumbnailContainer>
        <Thumbnail src={thumbnail} alt="썸네일이 존재하지않습니다." />
      </ThumbnailContainer>
      <ReactPlayer
        url={audioSrc}
        playing={playing}
        controls
        width="0"
        height="0"
        style={{ display: "none" }}
      />
    </CardContainer>
  );
};

export default ListCard;

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #eee;
  border-radius: 10px;
  margin: 30px;
  overflow: hidden;
  align-items: center;
  width: 800px;
  padding: 30px;
`;

const ThumbnailContainer = styled.div`
  flex: none;
  padding: 15px;
`;

const Thumbnail = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 10px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  flex: 1;
  font-size: 30px;
  margin: 0;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const PlayIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Content = styled.p`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
`;

const TagLine = styled.div`
  margin-bottom: 15px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  padding: 5px 5px 10px 5px;
  font-size: 15px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.span`
  font-size: 14px;
  color: #666;
`;

const LikesCommentsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 20px;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
