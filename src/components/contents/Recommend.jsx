import React, { useState } from "react";
import styled from "styled-components";
import Postcard from "../Postcard";

const RecommendWrapper = styled.section`
  padding: 20px;
  position: relative;
  max-width: 100%;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const PostcardWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PostcardContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 20px;" : "right: 20px;")}
  background-color: #fff;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
`;

const Recommend = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardToShow = 4;
  const cardWidth = 300;
  const gapSize = 20;
  const cardData = new Array(12).fill(null).map((_, index) => ({
    imageUrl: `/path/to/image${index + 1}.jpg`,
    category: `Category ${index + 1}`,
  }));

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + cardToShow);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - cardToShow);
  };

  return (
    <RecommendWrapper>
      <Title>추천</Title>
      <ArrowButton
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
        direction="left"
      >
        ◀
      </ArrowButton>
      <PostcardWrapper>
        <PostcardContainer
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + gapSize)}px)`,
          }}
        >
          {cardData.map((data, index) => (
            <Postcard
              key={index}
              imageUrl={data.imageUrl}
              category={data.category}
            />
          ))}
        </PostcardContainer>
      </PostcardWrapper>
      <ArrowButton
        onClick={handleNextClick}
        disabled={currentIndex >= cardData.length - cardToShow}
        direction="right"
      >
        ▶
      </ArrowButton>
    </RecommendWrapper>
  );
};

export default Recommend;
