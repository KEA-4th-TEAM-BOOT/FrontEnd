import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import likeIcon from "../../src/assets/img/icons/likeicon.svg";
import repeatIcon from "../../src/assets/img/icons/repeaticon.svg";
import shuffleIcon from "../../src/assets/img/icons/shuffleicon.svg";
import prevIcon from "../../src/assets/img/icons/previcon.svg";
import playIcon from "../../src/assets/img/icons/playicon.svg";
import pauseIcon from "../../src/assets/img/icons/pauseicon.svg";
import nextIcon from "../../src/assets/img/icons/nexticon.svg";
import volumeIcon from "../../src/assets/img/icons/volumeicon.svg";
import playlistIcon from "../../src/assets/img/icons/playlisticon.svg";

const Player = () => {
  const trackInfo = {
    imageSrc:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJwo31zBZKoy-pGdeMYGqXK6J5MJMwrftIVn9RvNBuKatxx5Qa",
    title: "수영장에서 디너파티",
    username: "James Cailo",
    category: "라이프",
    date: "24.04.12",
  };

  return (
    <FootPlayer>
      <PlayerInfo>
        <PlayImage src={trackInfo.imageSrc} alt="Play Image" />
        <TextContainer>
          <Title>{trackInfo.title}</Title>
          <Username>{trackInfo.username}</Username>
          <CategoryDate>{`${trackInfo.category} • ${trackInfo.date}`}</CategoryDate>
        </TextContainer>
      </PlayerInfo>
      <PlayerControl>
        <PlayerIcon src={shuffleIcon} />
        <PlayerIcon src={prevIcon} />
        <PlayIcon src={playIcon} />
        <PlayerIcon src={nextIcon} />
        <PlayerIcon src={repeatIcon} />
      </PlayerControl>
      <PlayerSectionRight>
        <PlayerIcon src={likeIcon} />
        <PlayerIcon src={volumeIcon} />
        <PlayerIcon src={playlistIcon} />
      </PlayerSectionRight>
    </FootPlayer>
  );
};

export default Player;

const FootPlayer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(24, 24, 24, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const PlayerInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 20px;
  flex: 0 0 auto;
`;

const PlayImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  color: white;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const Username = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  color: #b3b3b3;
`;

const CategoryDate = styled.span`
  font-size: 12px;
  color: #b3b3b3;
`;

const PlayerControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const PlayerSectionRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: right;
  flex: 0 0 auto;
  padding-right: 20px;
`;

const PlayerIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 15px;
`;

const PlayIcon = styled(PlayerIcon)`
  height: 30px;
  width: 30px;
  margin: 0 30px;
`;
