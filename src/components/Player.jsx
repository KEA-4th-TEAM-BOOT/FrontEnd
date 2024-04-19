import React, { useState, useRef } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import likeOIcon from "../../src/assets/img/icons/likeOwhiteicon.svg";
import likeXIcon from "../../src/assets/img/icons/likeXwhiteicon.svg";
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

  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [liked, setLiked] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const [volume, setVolume] = useState(0.8);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const playerRef = useRef(null);

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.volume = 1 - newVolume;
    }
  };

  const pad = (string) => {
    return ("0" + string).slice(-2);
  };

  const onProgress = (progress) => {
    setPlayed(progress.played);
    setCurrentTime(formatTime(progress.playedSeconds));
  };

  const onDuration = (duration) => {
    setDuration(duration);
    setTotalTime(formatTime(duration));
  };

  const onSeekMouseDown = () => {
    setPlaying(false);
  };

  const onSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const onSeekMouseUp = (e) => {
    setPlaying(true);
    playerRef.current.seekTo(parseFloat(e.target.value));
  };

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const toggleLike = () => setLiked(!liked);

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  const videoUrl = "https://youtu.be/C9RI-OXMyu4?si=2LkNYwVFqBv40Gkp";

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
      <PlayerControlContainer>
        <PlayerControl>
          <PlayerIcon src={shuffleIcon} />
          <PlayerIcon src={prevIcon} />
          <PlayIcon src={playing ? pauseIcon : playIcon} onClick={togglePlay} />
          <PlayerIcon src={nextIcon} />
          <PlayerIcon src={repeatIcon} />
        </PlayerControl>
        <SeekBarContainer>
          <CurrentTime>{currentTime}</CurrentTime>
          <SeekBar
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={onSeekMouseDown}
            onChange={onSeekChange}
            onMouseUp={onSeekMouseUp}
          />
          <TotalTime>{totalTime}</TotalTime>
        </SeekBarContainer>
      </PlayerControlContainer>
      <PlayerSectionRight>
        <PlayerIcon src={liked ? likeOIcon : likeXIcon} onClick={toggleLike} />
        <PlayerIcon src={volumeIcon} onClick={toggleVolumeSlider} />
        {showVolumeSlider && (
          <VolumeSlider
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
          />
        )}
        <PlayerIcon src={playlistIcon} />
      </PlayerSectionRight>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playing}
        onProgress={onProgress}
        onDuration={onDuration}
        volume={1 - volume}
        width="0"
        height="0"
      />
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

const PlayerControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`;

const PlayerControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const TimeText = styled.span`
  width: 50px;
  text-align: center;
  color: #fff;
  font-family: "Roboto", sans-serif;
  display: inline-block;
  margin: 0 5px;
`;

const CurrentTime = styled(TimeText)``;

const TotalTime = styled(TimeText)``;

const SeekBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
`;

const SeekBar = styled.input`
  -webkit-appearance: none;
  height: 4px;
  width: calc(100% - 120px);
  margin: 0 10px;
  border-radius: 2px;
  background: ${(props) =>
    `linear-gradient(to right, #b3b3b3 ${props.value * 100}%, #4b4b4b ${
      props.value * 100
    }%)`};
  cursor: pointer;
  transition: background-color 0.2s;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    margin-top: -6px;
  }
  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
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

const VolumeSlider = styled.input`
  position: absolute;
  right: 20px;
  bottom: 100%;
  width: 30px;
  height: 150px;
  transform: rotate(-90deg);
  transform-origin: bottom right;
  -webkit-appearance: slider-vertical;
`;
