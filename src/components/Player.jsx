import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useRecoilValue } from "recoil";
import { currentTrackState } from "../recoil/playerState";
import Playlist from "./homeSection/Playlist";
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
  const initialTrackList = [
    {
      id: 1,
      thumbnailImage:
        "https://www.songpa.go.kr/upload/DATA/resrce/22561fd4-92d3-4533-b465-bb71993fcd91DABB9CE632C323A1.jpg",
      username: "Hello",
      title: "Title1",
      audioSrc: "https://youtu.be/lI5pmLQg8sU?feature=shared",
    },
    {
      id: 2,
      thumbnailImage:
        "https://www.songpa.go.kr/upload/DATA/resrce/22561fd4-92d3-4533-b465-bb71993fcd91DABB9CE632C323A1.jpg",
      username: "Hi",
      title: "Title2",
      audioSrc: "https://youtu.be/GWp8KMYZzY0?feature=shared",
    },
    {
      id: 3,
      thumbnailImage:
        "https://www.songpa.go.kr/upload/DATA/resrce/22561fd4-92d3-4533-b465-bb71993fcd91DABB9CE632C323A1.jpg",
      username: "Apple",
      title: "Title3",
      audioSrc: "https://youtu.be/xqTwKxId6D8?feature=shared",
    },
  ];

  const currentTrack = useRecoilValue(currentTrackState);
  const [trackList, setTrackList] = useState(initialTrackList);
  const [currentTrackId, setCurrentTrackId] = useState(initialTrackList[0].id);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [likedTracks, setLikedTracks] = useState(
    initialTrackList.map((track) => ({ id: track.id, liked: track.liked }))
  );
  const [repeatMode, setRepeatMode] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const [volume, setVolume] = useState(0.8);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
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

  const toggleLike = () => {
    const updatedLikedTracks = likedTracks.map((track) =>
      track.id === currentTrackId ? { ...track, liked: !track.liked } : track
    );
    setLikedTracks(updatedLikedTracks);
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };

  const toggleRepeat = () => {
    setRepeatMode((prevMode) => (prevMode + 1) % 3);
  };

  const handleEnded = () => {
    const currentIndex = trackList.findIndex(
      (track) => track.id === currentTrackId
    );
    const nextTrack =
      repeatMode === 1 ? trackList[currentIndex] : trackList[currentIndex + 1];
    if (nextTrack) {
      setCurrentTrackId(nextTrack.id);
      setPlaying(true);
    } else if (repeatMode === 2) {
      setCurrentTrackId(trackList[0].id);
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "playlist-overlay") {
      setShowPlaylist(false);
    }
  };

  useEffect(() => {
    const isFirstLoad = sessionStorage.getItem("firstLoadDone") !== "true";
    if (isFirstLoad) {
      setPlaying(false); // Ensure the player is paused on the first load
      sessionStorage.setItem("firstLoadDone", "true");
    }
    setPlayed(0);
  }, [currentTrackId]);

  useEffect(() => {
    if (currentTrack.id) {
      setCurrentTrackId(currentTrack.id);
      setPlaying(true);
    }
  }, [currentTrack]);

  return (
    <FootPlayer>
      <PlayerInfo>
        <PlayImage src={currentTrack.thumbnailImage} alt="Play Image" />
        <TextContainer>
          <Title>{currentTrack.title}</Title>
          <Username>{currentTrack.username}</Username>
        </TextContainer>
      </PlayerInfo>
      <PlayerControlContainer>
        <PlayerControl>
          <PlayerIcon
            src={shuffleIcon}
            alt="Shuffle Icon"
            onClick={() => {
              const shuffledTracks = [...trackList].sort(
                () => Math.random() - 0.5
              );
              setTrackList(shuffledTracks);
            }}
          />
          <PlayerIcon
            src={prevIcon}
            alt="Previous Icon"
            onClick={() => {
              const currentIndex = trackList.findIndex(
                (track) => track.id === currentTrackId
              );
              const prevTrack =
                trackList[currentIndex - 1] || trackList[trackList.length - 1];
              setCurrentTrackId(prevTrack.id);
              setPlaying(true);
            }}
          />
          <PlayIcon
            src={playing ? pauseIcon : playIcon}
            onClick={togglePlay}
            alt="Play & Pause Icon"
          />
          <PlayerIcon
            src={nextIcon}
            alt="Next Icon"
            onClick={() => {
              const currentIndex = trackList.findIndex(
                (track) => track.id === currentTrackId
              );
              const nextTrack = trackList[currentIndex + 1] || trackList[0];
              setCurrentTrackId(nextTrack.id);
              setPlaying(true);
            }}
          />
          <PlayerIcon
            src={repeatIcon}
            onClick={toggleRepeat}
            alt="Repeat Icon"
          />
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
        <PlayerIcon
          src={
            likedTracks.find((track) => track.id === currentTrackId)?.liked
              ? likeOIcon
              : likeXIcon
          }
          onClick={toggleLike}
        />
        <PlayerIcon
          src={volumeIcon}
          onClick={toggleVolumeSlider}
          alt="Volume Icon"
        />
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
        <PlayerIcon
          src={playlistIcon}
          onClick={togglePlaylist}
          alt="Playlist Icon"
        />
      </PlayerSectionRight>
      {showPlaylist && (
        <Overlay id="playlist-overlay" onClick={handleOverlayClick}>
          <PlaylistModal onClick={(e) => e.stopPropagation()}>
            <Playlist
              trackList={trackList}
              setTrackList={setTrackList}
              setCurrentTrack={setCurrentTrackId}
              setPlaying={setPlaying}
            />
          </PlaylistModal>
        </Overlay>
      )}
      <ReactPlayer
        ref={playerRef}
        url={currentTrack.audioSrc}
        playing={playing}
        onProgress={onProgress}
        onDuration={onDuration}
        volume={1 - volume}
        width="0"
        height="0"
        onEnded={handleEnded}
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
  width: 100%;
`;

const SeekBar = styled.input`
  -webkit-appearance: none;
  height: 4px;
  width: calc(100% - 100px);
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
  align-items: center;
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const PlaylistModal = styled.div`
  width: 350px;
  max-height: 400px;
  background-color: #202020;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 101;
  margin-bottom: 80px;
  margin-right: 5px;
`;
