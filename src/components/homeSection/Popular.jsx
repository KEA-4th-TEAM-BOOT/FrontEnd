import React from "react";
import styled from "styled-components";
import AudioCard from "../card/Audiocard";
import gotofeedIcon from "../../assets/img/icons/moreicon.svg";
import { Link } from "react-router-dom";

const Popular = ({ postList }) => {
  const PopularData = postList.topLikedPosts || []; // postList가 없을 경우 빈 배열로 설정

  // 빈 오디오카드 10개 생성
  const emptyCards = Array.from({ length: 10 }, (_, index) => (
    <AudioCard key={index} />
  ));

  return (
    <PopularWrapper>
      <PopularHeader>
        <PopularTitle>인기</PopularTitle>
        <Link to="/feed">
          <GoToFeed src={gotofeedIcon} alt="Go to feed" />
        </Link>
      </PopularHeader>
      <AudioCardContainer>
        {PopularData.length > 0
          ? PopularData.map((card, index) => (
              <AudioCard
                key={index}
                imageUrl={card.thumbnailImageUrl}
                subject={card.subject}
                title={card.title}
                writer={card.writer}
                tag={card.tagList}
              />
            ))
          : emptyCards}
      </AudioCardContainer>
    </PopularWrapper>
  );
};

export default Popular;

const PopularWrapper = styled.div`
  width: 1115px;
  margin: 110px auto 110px auto;
  display: flex;
  flex-direction: column;
  align-itmes: center;
  padding: 0;
`;

const PopularHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const PopularTitle = styled.h1`
  font-size: 2rem;
  color: #222;
`;

const GoToFeed = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const AudioCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 20px;
  row-gap: 40px;
  //   display: grid;
  //   grid-template-columns: repeat(4, 1fr);
  //   align-self: center;
`;
