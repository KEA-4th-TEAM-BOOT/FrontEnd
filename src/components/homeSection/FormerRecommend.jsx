import React from "react";
import styled from "styled-components";
import Postcard from "../card/Postcard";
import gotofeedIcon from "../../assets/img/icons/moreicon.svg";
import { Link } from "react-router-dom";

const Recommend = () => {
  const cardData = [
    {
      imageUrl:
        "https://cdn.kormedi.com/wp-content/uploads/2023/06/unnamed-file-152.jpg",
      category: "라이프스타일",
      likes: true,
      likesCount: 120,
      commentsCount: 5,
      title: "건강한 삶을 위한 아침 루틴 5가지",
      content:
        "아침에 일어나서 물 한 컵 마시기, 30분 동안 요가하기, 영양가 있는 아침 식사 준비, 단기 목표 설정, 간단한 명상으로 하루를 시작하세요.",
      author: "김민준",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyf5EaOpriDROZ5FUflHj_Mf8B_5T6ZADs9e_ZTf8bg&s",
      category: "여행",
      likes: false,
      likesCount: 120,
      commentsCount: 5,
      title: "비밀의 섬, 제주도 숨은 명소 탐방",
      content:
        "제주도의 숨겨진 명소들을 찾아서 특별한 여행을 경험하세요. 해안 절경, 숨겨진 카페, 조용한 산책로 등 제주도만의 매력을 발견할 수 있습니다.",
      author: "이서윤 ",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66zfCdw8vh7yEUBpHwx6Df6xdQhrEKZWGD4adrPSyTg&s",
      category: "문화",
      likes: false,
      likesCount: 120,
      commentsCount: 5,
      title: "서울에서 즐기는 전통 문화 체험",
      content:
        "서울의 전통 문화 체험은 한국의 뿌리를 느낄 수 있는 최고의 방법입니다. 국립중앙박물관 방문, 한복 입기 체험, 전통 차 시음 등 다양한 활동을 즐겨보세요.",
      author: "박지호",
    },
    {
      imageUrl:
        "https://news.samsungdisplay.com/wp-content/uploads/2021/12/1223_%EC%9D%B4%EB%AF%B8%EC%A7%801.jpg",
      category: "IT",
      likes: true,
      likesCount: 120,
      commentsCount: 5,
      title: "미래를 바꿀 5가지 기술 트렌드",
      content:
        "인공 지능의 발전, 사물 인터넷(IoT) 확산, 가상 현실(VR)과 증강 현실(AR)의 결합, 자율 주행 차의 상용화, 그리고 지속 가능한 에너지 기술이 미래의 IT 트렌드를 주도할 것입니다.",
      author: "최현우",
    },
  ];

  return (
    <RecommendWrapper>
      <Header>
        <Title>추천</Title>
        <Link to="/feed">
          <GoToFeed src={gotofeedIcon} alt="Go to feed" />
        </Link>
      </Header>
      <PostcardWrapper>
        {cardData.map((data, index) => (
          <Postcard
            key={index}
            imageUrl={data.imageUrl}
            category={data.category}
            likes={data.likes}
            likesCount={data.likesCount}
            commentsCount={data.commentsCount}
            title={data.title}
            content={data.content}
            author={data.author}
          />
        ))}
      </PostcardWrapper>
    </RecommendWrapper>
  );
};

export default Recommend;

const RecommendWrapper = styled.section`
  width: 1374px;
  height: auto;
  padding-top: 107px;
  padding-left: 197px;
  padding-right: 197px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const GoToFeed = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const PostcardWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
`;
