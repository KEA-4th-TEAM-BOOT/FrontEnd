import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import playIcon from "../../assets/img/icons/playblueicon.svg";
import pauseIcon from "../../assets/img/icons/pauseblueicon.svg";

const TrendCard = ({
  title,
  tags,
  content,
  imageUrl,
  likes,
  playCount,
  audioUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const radius = 24;
  const strokeWidth = 2;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) {
      setCurrentTime(0);
    }
  }, [isPlaying]);

  const formatTime = (seconds) => {
    const roundTime = Math.round(seconds);
    const minutes = Math.floor(roundTime / 60);
    const secondsRemaining = roundTime - minutes * 60;
    return `${minutes}:${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`;
  };

  const formatTimeShort = (seconds) => {
    const roundTime = Math.round(seconds);
    const minutes = Math.floor(roundTime / 60);
    const secondsRemaining = roundTime - minutes * 60;
    return `${minutes}분 ${secondsRemaining}초`;
  };

  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={imageUrl} alt="content" />
      </ImageWrapper>
      <ContentArea>
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Divider />
        <StatsArea>
          <Likes>
            좋아요
            <br />
            <NumInfo>{likes}</NumInfo>
          </Likes>
          <Time>
            재생시간
            <br />
            <NumInfo>{formatTimeShort(totalTime)}</NumInfo>
          </Time>
          <UserCount>
            조회수
            <br />
            <NumInfo>{playCount}</NumInfo>
          </UserCount>
        </StatsArea>
        <PlayButton onClick={togglePlay}>
          <CircularProgressWrapper>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="#EBEBEB"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke="#FFDE33"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + " " + circumference}
                style={{
                  strokeDashoffset:
                    circumference - (currentTime / totalTime) * circumference,
                }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <PlayIcon src={isPlaying ? pauseIcon : playIcon} alt="play/pause" />
            <TimeDisplay>
              {formatTime(currentTime)} / {formatTime(totalTime)}
            </TimeDisplay>
          </CircularProgressWrapper>
        </PlayButton>
      </ContentArea>
      <ReactPlayer
        url={audioUrl}
        playing={isPlaying}
        controls={false}
        height="0"
        width="0"
        onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)}
        onDuration={setTotalTime}
      />
    </CardContainer>
  );
};

export default TrendCard;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  width: 270px;
  height: 445px;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 55%;
  // width: 220px;
  // height: 100px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  background: #eee;
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 12px;
`;
const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: #000;
`;

const ContentArea = styled.div`
  padding: 10px;
`;

const Content = styled.p`
  font-size: 13px;
  color: #575757;
`;

const Divider = styled.hr`
  margin-top: 10px;
  border: none;
  height: 1px;
  background-color: #e1e1e1;
`;

const StatsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const Likes = styled.span`
  font-size: 13px;
  color: #666;
  text-align: center;
`;

const Time = styled.span`
  font-size: 13px;
  color: #666;
  text-align: center;
`;

const UserCount = styled.span`
  font-size: 13px;
  color: #666;
  text-align: center;
`;

const NumInfo = styled.span`
  font-weight: bold;
`;

const PlayButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 20px;
  margin-left: 0px;
`;

const CircularProgressWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 12px;
`;

const TimeDisplay = styled.div`
  position: relative;
  top: 50%;
  margin-left: 10px;
  color: #000;
  font-size: 12px;
`;
