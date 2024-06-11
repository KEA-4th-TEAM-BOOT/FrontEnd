import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PlayIcon from "../../assets/img/icons/audioplayicon.svg";

const AudioCard = ({ imageUrl, subject, title, writer, tag, userLink }) => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  const handleMovePost = () => {
    navigate(`/${userLink}`);
  };
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;
      let r, g, b, avg;
      let colorSum = 0;

      for (let x = 0, len = data.length; x < len; x += 4) {
        r = data[x];
        g = data[x + 1];
        b = data[x + 2];
        avg = Math.floor((r + g + b) / 3);
        colorSum += avg;
      }

      const brightness = Math.floor(colorSum / (img.width * img.height));
      setIsDark(brightness < 128);
    };
  }, [imageUrl]);

  return (
    <CardWrapper onClick={handleMovePost}>
      <ImageContainer>
        <ImageBackground image={imageUrl} />
      </ImageContainer>
      <BlurOverlay>
        <Category isDark={isDark}>{subject}</Category>
        <Title isDark={isDark}>{title}</Title>
        <Writer isDark={isDark}>{writer}</Writer>
        <Tag isDark={isDark}>{tag}</Tag>
      </BlurOverlay>
      <PlayButton aria-label="Play">
        <PlayIconImg src={PlayIcon} alt="Play Icon" />
      </PlayButton>
    </CardWrapper>
  );
};

export default AudioCard;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 205px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 59%;
  overflow: hidden;
`;

const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const BlurOverlay = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  word-break: keep-all;
`;

const PlayButton = styled.button`
  position: absolute;
  right: 3px;
  bottom: 104px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const PlayIconImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Category = styled.h2`
  font-size: 11px;
  color: black;
  margin: 0;
  padding-right: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.h1`
  font-size: 16px;
  color: ${(props) => (props.isDark ? "black" : "black")};
  margin: 0;
  margin-top: 7px;
  margin-bottom: 7px;
  padding-right: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Writer = styled.p`
  font-size: 10px;
  color: ${(props) => (props.isDark ? "black" : "black")};
  margin: 0;
`;

const Tag = styled.p`
  font-size: 11px;
  color: ${(props) => (props.isDark ? "black" : "black")};
  padding: 0;
`;
