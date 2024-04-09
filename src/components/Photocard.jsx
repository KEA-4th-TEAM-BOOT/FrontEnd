import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: auto;
  height: auto;
  background-color: black;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

const TopSection = styled.div`
  display: flex;
  height: 375px;
  width: 100%;
  margin-bottom: 30px;
`;

const BottomSection = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: repeat(4, 155px);
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const MainImage = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const TitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 5px;
  width: calc(100% - 300px);
`;

const CardTitle = styled.h2`
  font-size: 45px;
  color: #ffffff;
  width: 100%;
  height: 55px;
  margin: 0;
  white-space: nowrap; // 한 줄 정렬
  overflow: hidden;
  text-overflow: ellipsis; // 생략 부호
`;

const CardText = styled.p`
  font-size: 20px;
  color: #ffffff;
  height: auto;
  margin-right: 10px;
  overflow-y: auto; // 이거 스크롤 내리면 내용이 더 뜨게 할 건지 결정 안 할 거라면 hidden으로 바꾸기
  &::-webkit-scrollbar {
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
