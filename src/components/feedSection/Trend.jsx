import React, { useState } from "react";
import styled from "styled-components";
import TrendCard from "../card/Trendcard";
import ReactPlayer from "react-player";

const Trend = () => {
  const [trends, setTrends] = useState([
    {
      title: "빛을 보는 이유",
      tag1: "빛",
      tag2: "문학",
      tag3: "그림자",
      content:
        "눈이란 창으로 세상을 향해 활짝 열리는 것이라. 그리고 빛이란 생명의 숨결 같은 존재로,저 창문 밖을 부유하며 우리를 찾아오는 것이라.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZ49kWgk05usesa8yVsdpJDHJ34QDBnszKL6uzx4FpbkB1IBS",
      likes: 92,
      time: "4분 25초",
      playCount: 728,
      currentTime: "2:27",
      totalTime: "4:24",
      isPlaying: false,
      audioUrl: "https://youtu.be/emnB9kam3vg?si=bABEitRoB7lILkvl",
    },
    {
      title: "빛을 보는 이유",
      tag1: "빛",
      tag2: "문학",
      tag3: "그림자",
      content:
        "눈이란 창으로 세상을 향해 활짝 열리는 것이라. 그리고 빛이란 생명의 숨결 같은 존재로,저 창문 밖을 부유하며 우리를 찾아오는 것이라.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBAKvyqZDzky-sOCDPMdDDEC46V5IJ8YdIoV4OtCqKSJtYAxp",
      likes: 92,
      time: "4분 25초",
      playCount: 728,
      currentTime: "2:27",
      totalTime: "4:24",
      isPlaying: false,
      audioUrl: "https://youtu.be/Ao9YOZs-nAY?si=HY5Usb012F2WL44H",
    },
    {
      title: "빛을 보는 이유",
      tag1: "빛",
      tag2: "문학",
      tag3: "그림자",
      content:
        "눈이란 창으로 세상을 향해 활짝 열리는 것이라. 그리고 빛이란 생명의 숨결 같은 존재로,저 창문 밖을 부유하며 우리를 찾아오는 것이라.",
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqo4150yEOtGPQnNL0IAxl9Yjna6eCVb2iH9dVWVLnWb09paFj",
      likes: 92,
      time: "4분 25초",
      playCount: 728,
      currentTime: "2:27",
      totalTime: "4:24",
      isPlaying: false,
      audioUrl: "https://youtu.be/S1i7Ws3rhEo?si=cLdEtvfslAOV-jU4",
    },
  ]);

  const handlePlayPause = (index) => {
    const newTrends = trends.map((item, i) => {
      if (i === index) {
        return { ...item, isPlaying: !item.isPlaying };
      }
      return item;
    });
    setTrends(newTrends);
  };

  return (
    <TrendSection>
      <Title>VoDa 실시간 오디오 트렌드</Title>
      <TrendContainer>
        {trends.map((trend, index) => (
          <TrendCardContainer key={index}>
            <TrendCard
              title={trend.title}
              tags={[trend.tag1, trend.tag2, trend.tag3]}
              content={trend.content}
              imageUrl={trend.imageUrl}
              likes={trend.likes}
              time={trend.time}
              playCount={trend.playCount}
              currentTime={trend.currentTime}
              totalTime={trend.totalTime}
              isPlaying={trend.isPlaying}
              onPlayPauseClick={() => handlePlayPause(index)}
              audioUrl={trend.audioUrl}
            />
          </TrendCardContainer>
        ))}
      </TrendContainer>
    </TrendSection>
  );
};

export default Trend;

const TrendSection = styled.section`
  background-color: rgba(153, 213, 255, 0.29);
  height: 640px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 104px;
  color: #000;
  margin-bottom: 20px;
  margin-left: 250px;
  font-size: 60px;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const TrendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TrendCardContainer = styled.div`
  width: 328px;
  margin: 0 16px;
`;
