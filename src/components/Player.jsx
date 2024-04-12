import React from "react";
import styled from "styled-components";

import LikeIcon from "../../src/assets/img/icons/likeicon.svg";
import RepeatIcon from "../../src/assets/img/icons/repeaticon.svg";
import ShuffleIcon from "../../src/assets/img/icons/shuffleicon.svg";
import PrevIcon from "../../src/assets/img/icons/previcon.svg";
import PlayIcon from "../../src/assets/img/icons/playicon.svg";
import NextIcon from "../../src/assets/img/icons/nexticon.svg";
import VolumeIcon from "../../src/assets/img/icons/volumeicon.svg";
import PlaylistIcon from "../../src/assets/img/icons/playlisticon.svg";
import MoreIcon from "../../src/assets/img/icons/moreicon.svg";

const Player = () => {
  return (
    <FootPlayer>
      <PlayerSectionLeft />
      <PlayerControls>
        <PlayerIcon src={ShuffleIcon} />
        <PlayerIcon src={PrevIcon} />
        <PlayerControlIcon src={PlayIcon} />
        <PlayerIcon src={NextIcon} />
        <PlayerIcon src={RepeatIcon} />
      </PlayerControls>
      <PlayerSectionRight>
        <PlayerIcon src={LikeIcon} />
        <PlayerIcon src={VolumeIcon} />
        <PlayerIcon src={PlaylistIcon} />
        <PlayerIcon src={MoreIcon} />
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
  background-color: #181818;
  display: flex;
  align-items: center;
  z-index: 10000;
`;

const PlayerSection = styled.div`
  display: flex;
  align-items: center;
`;

const PlayerSectionLeft = styled(PlayerSection)`
  flex: 1;
`;

const PlayerControls = styled(PlayerSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
`;

const PlayerSectionRight = styled(PlayerSection)`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-grow: 1;
`;

const PlayerIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 15px;
`;

const PlayerControlIcon = styled(PlayerIcon)`
  height: 30px;
  width: 30px;
  margin: 0 30px;
`;
