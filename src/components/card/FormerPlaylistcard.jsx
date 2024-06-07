import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
import trackChangeIcon from "../../assets/img/icons/trackchangeicon.svg";

const ItemType = "CARD";

const PlaylistCard = ({ track, index, moveCard, onClick, selected }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <CardContainer
      ref={ref}
      isDragging={isDragging}
      onClick={onClick}
      selected={selected}
    >
      <Thumbnail src={track.thumbnailImage} />
      <TrackDetails>
        <TrackTitle>{track.title}</TrackTitle>
        <TrackUsername>{track.username}</TrackUsername>
        <TrackPlaytime>{track.playtime}</TrackPlaytime>
      </TrackDetails>
      <TrackMenuIcon src={trackChangeIcon} />
    </CardContainer>
  );
};

export default PlaylistCard;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.selected ? "#2b2b2b" : "#1a1a1a")};
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 10px;
`;

const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const TrackTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const TrackUsername = styled.div`
  font-size: 12px;
  color: #b3b3b3;
`;

const TrackPlaytime = styled.div`
  font-size: 12px;
  color: #b3b3b3;
`;

const TrackMenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  align-self: flex-start;
  cursor: grab;
`;
