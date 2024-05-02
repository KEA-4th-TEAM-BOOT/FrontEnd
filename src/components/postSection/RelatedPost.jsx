import React from "react";
import styled from "styled-components";
import AudioCard from "../../components/card/Audiocard";

const audioCardData = [
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVeVo8k_cD8thdiuS9bVyjqTSYMTpQVFIe5x27EVJLw&s",
    category: "스포츠",
    title: "챔피언스 리그 하이라이트",
    writer: "스포츠 위클리",
    tag: "#스포츠 #축구 #챔피언스리그 #하이라이트",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGhlpTrcqwlrA5UCq9eTFALXzlxAQ3NLfiRkJ2xY5NQ&s",
    category: "시사",
    title: "세계 정치 리뷰",
    writer: "뉴스 투데이",
    tag: "#정치 #글로벌 #뉴스 #업데이트",
  },
  {
    imageUrl:
      "https://i.namu.wiki/i/mhTUAYL26ZuN8WdT6bjYuhwNd54nyPH84h1Cce79F5_1bPnKpV3YzpP93KD5NXtL2iQbts0RFcJkCqSTOr4Ung.webp",
    category: "문화",
    title: "도자기 예술",
    writer: "장인의 손길",
    tag: "#예술 #도자기 #공예 #문화",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3V9dNK-UgkpTHlp9imJIhwFCyp337EgFdrHLd6916Dw&s",
    category: "라이프스타일",
    title: "비건 다이어트 101",
    writer: "헬시 이츠",
    tag: "#비건 #다이어트 #건강 #생활",
  },
];

const RelatedPost = () => {
  return (
    <RelatedPostWrapper>
      <RelatedPostTitle>관련 게시글</RelatedPostTitle>
      <PostContainer>
        {audioCardData.map((data, index) => (
          <AudioCard key={index} {...data} />
        ))}
      </PostContainer>
    </RelatedPostWrapper>
  );
};

export default RelatedPost;

const RelatedPostWrapper = styled.div`
  padding: auto;
  max-width: 1500px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: auto;
  margin-bottom: 100px;
`;

const RelatedPostTitle = styled.h1`
  font-size: 50px;
  margin: 100px 0;
  text-align: left;
`;

const PostContainer = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  width: 100%;
  justify-content: center;
`;
