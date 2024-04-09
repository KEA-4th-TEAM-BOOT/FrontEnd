import React from "react";
import styled from "styled-components";
import Postcard from "../card/Postcard";
import gotofeedIcon from "../../assets/img/icons/moreicon.svg";
import { Link } from "react-router-dom";

const RecommendWrapper = styled.section`
  width: 1374px;
  height: auto;
  padding: 30px;
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

const Recommend = () => {
  const cardData = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84XJ11EH8OT_vAIMGZzHhEJfqrytT-0HdOtn0_THIkNuDDHlm",
      category: "LifeStyle",
      likes: true,
      likesCount: 120,
      commentsCount: 5,
      title: "Interesting title for this content",
      content:
        "Walking, I was able to organize my thoughts. For a while, I forgot about the complicated things and had a healing time in nature. I thought I should come out for a walk from time to time to calm my mind.",
      author: "Ellie grace",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKV62NLux3dmZ_W5J0ND9hjOIorF1XOujoVrLkDfPDRyyu8ttD",
      category: "Travel",
      likes: false,
      likesCount: 120,
      commentsCount: 5,
      title: "Interesting title for this content",
      content:
        "Walking, I was able to organize my thoughts. For a while, I forgot about the complicated things and had a healing time in nature. I thought I should come out for a walk from time to time to calm my mind.",
      author: "Ellie grace",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJkPj5SQf1g4oP99v1BjYvzZPGoV-5zmkBZEsHX0MqZnOD0oX1",
      category: "Culture",
      likes: false,
      likesCount: 120,
      commentsCount: 5,
      title: "Interesting title for this content",
      content:
        "Walking, I was able to organize my thoughts. For a while, I forgot about the complicated things and had a healing time in nature. I thought I should come out for a walk from time to time to calm my mind.",
      author: "Ellie grace",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1322517295/ko/%EC%82%AC%EC%A7%84/%EC%82%AC%EC%9D%B4%EB%B2%84-%EB%B3%B4%EC%95%88-it-%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%8A%94-%EC%9D%B8%ED%84%B0%EB%84%B7%EC%97%90%EC%84%9C-%ED%95%B4%EC%BB%A4%EB%A1%9C%EB%B6%80%ED%84%B0-%EC%82%AC%EC%9D%B4%EB%B2%84-%EA%B3%B5%EA%B2%A9%EC%9C%BC%EB%A1%9C%EB%B6%80%ED%84%B0-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%EB%A5%BC-%EB%B3%B4%ED%98%B8%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4-%EB%85%B8%EB%A0%A5%ED%95%98%EA%B3%A0-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%98%A8%EB%9D%BC%EC%9D%B8-%EA%B0%9C%EC%9D%B8-%EC%A0%95%EB%B3%B4-%EB%B3%B4%ED%98%B8-%EB%B0%8F-%EA%B0%9C%EC%9D%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%ED%98%B8%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%95%88%EC%A0%84%ED%95%9C.jpg?s=612x612&w=0&k=20&c=qylfFLcgLa3_sDMd5rrAYUTVu1pv4OowYZ_S0XLrPGo=",
      category: "IT",
      likes: true,
      likesCount: 120,
      commentsCount: 5,
      title: "Interesting title for this content",
      content:
        "Walking, I was able to organize my thoughts. For a while, I forgot about the complicated things and had a healing time in nature. I thought I should come out for a walk from time to time to calm my mind.",
      author: "Ellie grace",
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
