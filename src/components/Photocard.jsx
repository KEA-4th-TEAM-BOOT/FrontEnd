import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 680px;
  height: 589px;
  background-color: black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  height: 375px;
  width: 100%;
  padding: 30px;
`;

const BottomSection = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 155px);
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const MainImage = styled.img`
  width: 301px;
  height: 100%;
  object-fit: cover;
`;

const TitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: calc(100% - 301px);
`;

const CardTitle = styled.h2`
  font-size: 45px;
  color: #ffffff;
  width: 111px;
  height: 54px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardText = styled.p`
  font-size: 20px;
  color: #ffffff;
  height: 288px;
  margin-right: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    // 이거 스크롤이 되게 할 건지 아님 넘치는 글은 안 뜨게 할 건지
    display: none;
  }
`;

const SmallImage = styled.img`
  width: 135px;
  height: 125px;
  object-fit: cover;
  border-radius: 10px;
  justify-self: center;
  align-self: center;
`;

const Photocard = ({ title, content, images }) => {
  return (
    <CardWrapper>
      <TopSection>
        <MainImage src={images[0]} alt="Main" />
        <TitleContentWrapper>
          <CardTitle>{title}</CardTitle>
          <CardText>{content}</CardText>
        </TitleContentWrapper>
      </TopSection>
      <BottomSection>
        {images.slice(1).map((imgUrl, index) => (
          <SmallImage key={index} src={imgUrl} alt={`Thumbnail ${index + 1}`} />
        ))}
      </BottomSection>
    </CardWrapper>
  );
};

export default Photocard;
