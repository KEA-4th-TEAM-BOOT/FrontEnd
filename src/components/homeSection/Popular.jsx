import React from "react";
import styled from "styled-components";
import AudioCard from "../card/Audiocard";
import gotofeedIcon from "../../assets/img/icons/moreicon.svg";
import { Link } from "react-router-dom";

const Popular = () => {
  const PopularData = [
    {
      imageUrl:
        "https://i.namu.wiki/i/DxT8JMtpNj45oL_AHXWWowhJqzigx87KCDZrLeV4ePpO3oZCCylQj-W_qtrM2Zo2B0_82-Hv4PGN5C2ElOtR0w.webp",
      category: "문화",
      title: "도시 탐험",
      writer: "도시 탐험가",
      tag: "#도시 #문화 #탐험 #여행",
    },
    {
      imageUrl:
        "https://cdn.kormedi.com/wp-content/uploads/2023/06/unnamed-file-152.jpg",
      category: "라이프스타일",
      title: "아침 루틴",
      writer: "일상의 발견",
      tag: "#아침 #일상 #건강 #라이프스타일",
    },
    {
      imageUrl:
        "https://news.samsungdisplay.com/wp-content/uploads/2021/12/1223_%EC%9D%B4%EB%AF%B8%EC%A7%801.jpg",
      category: "IT",
      title: "2024 기술 트렌드",
      writer: "실리콘 밸리 리포트",
      tag: "#기술 #트렌드 #2024 #혁신",
    },
    {
      imageUrl:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2jJV/image/Mf_XOc0EP5PP_Ki7DrKrvPSm_cI.jpg",
      category: "여행",
      title: "유럽의 숨은 보석",
      writer: "글로벌 여행",
      tag: "#여행 #유럽 #숨은명소 #발견",
    },
    {
      imageUrl:
        "https://i.namu.wiki/i/DxT8JMtpNj45oL_AHXWWowhJqzigx87KCDZrLeV4ePpO3oZCCylQj-W_qtrM2Zo2B0_82-Hv4PGN5C2ElOtR0w.webp",
      category: "문화",
      title: "도시 탐험",
      writer: "도시 탐험가",
      tag: "#도시 #문화 #탐험 #여행",
    },
    {
      imageUrl:
        "https://cdn.kormedi.com/wp-content/uploads/2023/06/unnamed-file-152.jpg",
      category: "라이프스타일",
      title: "아침 루틴",
      writer: "일상의 발견",
      tag: "#아침 #일상 #건강 #라이프스타일",
    },
    {
      imageUrl:
        "https://news.samsungdisplay.com/wp-content/uploads/2021/12/1223_%EC%9D%B4%EB%AF%B8%EC%A7%801.jpg",
      category: "IT",
      title: "2024 기술 트렌드",
      writer: "실리콘 밸리 리포트",
      tag: "#기술 #트렌드 #2024 #혁신",
    },
    {
      imageUrl:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2jJV/image/Mf_XOc0EP5PP_Ki7DrKrvPSm_cI.jpg",
      category: "여행",
      title: "유럽의 숨은 보석",
      writer: "글로벌 여행",
      tag: "#여행 #유럽 #숨은명소 #발견",
    },
    {
      imageUrl:
        "https://i.namu.wiki/i/DxT8JMtpNj45oL_AHXWWowhJqzigx87KCDZrLeV4ePpO3oZCCylQj-W_qtrM2Zo2B0_82-Hv4PGN5C2ElOtR0w.webp",
      category: "문화",
      title: "도시 탐험",
      writer: "도시 탐험가",
      tag: "#도시 #문화 #탐험 #여행",
    },
    {
      imageUrl:
        "https://cdn.kormedi.com/wp-content/uploads/2023/06/unnamed-file-152.jpg",
      category: "라이프스타일",
      title: "아침 루틴",
      writer: "일상의 발견",
      tag: "#아침 #일상 #건강 #라이프스타일",
    },
  ];
  return (
    <PopularWrapper>
      <PopularHeader>
        <PopularTitle>인기</PopularTitle>
       <Link to="/feed">
          <GoToFeed src={gotofeedIcon} alt="Go to feed" />
        </Link>
      </PopularHeader>
      <AudioCardContainer>
        {PopularData.map((card, index) => (
          <AudioCard
            key={index}
            imageUrl={card.imageUrl}
            category={card.category}
            title={card.title}
            writer={card.writer}
            tag={card.tag}
          />
        ))}
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

const PopularTitle =styled.h1`
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
