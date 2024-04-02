import React from 'react';
import styled from 'styled-components';

const AudioCard = ({ imageUrl, category, title, writer, tag }) => {
  return (
    <CardWrapper>
      <ImageBackground image={imageUrl}>
      </ImageBackground>
      <BlurOverlay>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Writer>{writer}</Writer>
        <Tag>{tag}</Tag>
      </BlurOverlay>
      <PlayButton aria-label="Play" >▶️</PlayButton>
    </CardWrapper>
  );
};

export default AudioCard;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 250px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
`;

const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
`;

const BlurOverlay = styled.div`
  width: 100%;
  height: 33%; // 이제 높이의 3분의 1가 블러 처리됩니다.
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  word-break: keep-all;
`;

const PlayButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 116px; // BlurOverlay의 높이의 절반만큼 설정하여 경계에 배치합니다.
  width: 45px;
  height: 45px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  &:focus {
    outline: none;
  }
`;

const Category = styled.h2`
  font-size: 11px;
  color: pink;
  margin: 0;
  
`;

const Title = styled.h1`
  font-size: 16px;
  color: white;
  margin: 0;
  margin-top: 3px;
  margin-bottom: 10px;
`;


const Writer = styled.p`
  font-size: 10px;
  color: black;
  margin: 0;
`;

const Tag = styled.p`
  font-size: 11px;
  color: white;
  padding: 0;
`;