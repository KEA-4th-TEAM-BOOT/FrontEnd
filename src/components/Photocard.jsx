import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 680px;
  height: 589px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  height: 375px;
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
  width: 111px;
  height: 54px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardText = styled.p`
  font-size: 20px;
  height: 288px;
  margin: 0;
  overflow-y: auto;
`;

const BottomImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 135px);
  gap: 10px;
  padding: 16px;
  justify-content: center;
  flex-grow: 1;
`;

const SmallImage = styled.img`
  width: 135px;
  height: 125px;
  object-fit: cover;
`;

const Photocard = ({ title, content, images }) => {
  return (
    <Card>
      <TopSection>
        <MainImage src={images[0]} alt="Main" />
        <TitleContentWrapper>
          <CardTitle>{title}</CardTitle>
          <CardText>{content}</CardText>
        </TitleContentWrapper>
      </TopSection>
      <BottomImageGrid>
        {images.slice(1).map((imgUrl, index) => (
          <SmallImage key={index} src={imgUrl} alt={`Thumbnail ${index + 1}`} />
        ))}
      </BottomImageGrid>
    </Card>
  );
};

export default Photocard;
