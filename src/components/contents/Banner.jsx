import React from "react";
import styled from "styled-components";


const BannerWrapper = styled.div`
  width: 1374px;
  height: 615px; // Bottom 컴포넌트의 위치를 고려하지 않고 전체 배너 높이를 설정
  padding: 30px;
  position: relative;
  overflow: hidden; // 내용이 벗어나지 않도록 처리
`;

const ImageBackground = styled.div`
  width: 100%;
  height: 532px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 20px;
  background-position: center;
  position: relative; // 상대적 위치 설정
  align-items: flex-end;
`;

const Bottom = styled.div`
  position: absolute;
  left: 50%; // 정중앙을 맞추기 위함
  transform: translateX(
    -50%
  ); //Bottom이 50% 갔지만 Bottom의 중앙이 살짝 오른쪽에 가있기 때문에 왼쪽으로 살짝 옮겨줘야함.
  bottom: 30px; // Bottom의 높이 절반인 830px만큼 위로 올림으로써 하단 살짝 위에 위치하게 함
  border: 3px solid blue;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 487px;
  height: 176px; // Bottom의 높이 설정
  background-color: white; // Bottom 배경색 추가
`;

const ContentTitle = styled.p`
  font-size: 25px;
  color: black;
  margin: 0;
  margin-top: 3px;
  margin-bottom: 10px;
`;

const ContentWriter = styled.p`
  font-size: 15px;
  color: pink;
  margin: 0;
`;

const Banner = ({ imageUrl, contentTitle, contentWriter }) => {
  return (
    <BannerWrapper>
      <ImageBackground image={imageUrl} />
      <Bottom>
        <ContentTitle>{contentTitle}</ContentTitle>
        <ContentWriter>{contentWriter}</ContentWriter>
      </Bottom>
    </BannerWrapper>
  );
};

export default Banner;
