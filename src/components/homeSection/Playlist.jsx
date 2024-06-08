import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactPlayer from "react-player";
import trackChangeIcon from "../../assets/img/icons/trackchangeicon.svg";

const Playlist = ({ trackList, setTrackList, setCurrentTrack, setPlaying }) => {
  const [durations, setDurations] = useState({});

  useEffect(() => {
    trackList.forEach((track) => {
      if (!durations[track.id]) {
        const player = new ReactPlayer({ url: track.audioSrc, playing: false });
        player.props.onDuration = (duration) => {
          setDurations((prevDurations) => ({
            ...prevDurations,
            [track.id]: formatTime(duration),
          }));
        };
      }
    });
  }, [trackList, durations]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(trackList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTrackList(items);
  };

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());
    return `${mm}:${ss}`;
  };

  const pad = (string) => {
    return ("0" + string).slice(-2);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tracks">
        {(provided) => (
          <PlaylistContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {trackList.map((track, index) => (
              <Draggable
                key={track.id}
                draggableId={track.id.toString()}
                index={index}
              >
                {(provided) => (
                  <TrackItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TrackContent
                      onClick={() => {
                        setCurrentTrack(track.id);
                        setPlaying(true);
                      }}
                    >
                      <Thumbnail src={track.thumbnailImage} alt={track.title} />
                      <TrackInfo>
                        <Title>{track.title}</Title>
                        <Details>
                          {track.username} •{" "}
                          {durations[track.id] || "Loading..."}
                        </Details>
                      </TrackInfo>
                      <DragHandle>
                        <img src={trackChangeIcon} alt="Drag handle" />
                      </DragHandle>
                      <ReactPlayer
                        url={track.audioSrc}
                        playing={false}
                        width="0"
                        height="0"
                        onDuration={(duration) => {
                          setDurations((prevDurations) => ({
                            ...prevDurations,
                            [track.id]: formatTime(duration),
                          }));
                        }}
                      />
                    </TrackContent>
                  </TrackItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </PlaylistContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Playlist;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
`;

const TrackItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const DragHandle = styled.div`
  padding-left: 10px;
  cursor: grab;
`;

const TrackContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  color: white;
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 14px;
`;

const Details = styled.div`
  font-size: 12px;
  color: #b3b3b3;
`;
