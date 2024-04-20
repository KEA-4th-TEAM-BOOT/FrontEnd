import React from "react";
import styled from "styled-components";
import SearchCard from "../card/Searchcard";

const searchCardData = [
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
];

const Searchlist = () => {
  return (
    <ListContainer>
      <TopDivider />
      {searchCardData.map((card, index) => (
        <React.Fragment key={index}>
          <SearchCard
            thumbnail={card.imageUrl}
            title={card.title}
            content={card.content}
            date={card.date}
            profileImg={card.profileImg}
            username={card.username}
            likes={card.likes}
            likesCount={card.likesCount}
            commentsCount={card.commentsCount}
          />
          {index < searchCardData.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </ListContainer>
  );
};

export default Searchlist;

const ListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const TopDivider = styled.hr`
  border: none;
  height: 2px;
  background-color: #000;
  width: calc(100% + 200px);
  margin: 0 0 20px 0;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #d8d8d8;
  width: calc(100% + 50px);
  margin: 20px 0;
`;
