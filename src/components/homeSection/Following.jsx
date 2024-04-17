import React from "react";
import styled from "styled-components";
import Photocard from "../card/Photocard";
import gotofollowIcon from "../../assets/img/icons/moreicon.svg";
import { Link } from "react-router-dom";

const FollowingWrapper = styled.section`
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

const GoToFollow = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const PhotocardWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
`;

const Following = () => {
  const cardData = [
    {
      images: [
        "https://lh5.googleusercontent.com/p/AF1QipN-CN6qlIZYm3sgIfj7QNumuWcbjLb_FMwY4n8u=w360-h240-n-k-no",
        "https://www.eligasht.com/Blog/wp-content/uploads/2018/02/1-123.jpg",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDDqq96F2rhK-wxi09sRZ2E_l_TQG6nEZsRh-6zL-A8MOegMtK",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWEURGMeQYchg9jredju0SycpOe2-aymvTiJiCbLU6uT7KePIi",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9HmobSvf_Cjw-9bgL_LqQE4AcpCZX2JUCrNBJDnSWHK-HK7nK",
      ],
      title: "Title",
      content:
        "Today, the weather was nice, so I went for a walk in the park. There were many people there. People walking with their dogs, riding bikes, and sitting on benches talking. Everyone looked relaxed. I walked slowly through the park. The wind blew my hair and the trees stood tall with green leaves, and the flowers bloomed in beautiful colors. ",
    },
    {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89Rjs4udfjJHfTJaIN3_Fs2QeXi2DCdNnuL8Zdoy-MEBvAi23",
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-xAjXbvgIZaOt3SYU453_FwR50D0KcZAtDoYiFmJr9LjAJfHx",
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAM71espsJLdKRNAUyTU9n0AZQIYU4YA3K1aQeDk-3TaeaZSRp",
        "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6P0U/image/XMF6KM28fi669jjED2GIXTux7pc.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZmHViiPFQfVYsDCBvAAA3H8pzqv7zroMpEEz0Ysxcw&s",
      ],
      title: "Title",
      content:
        "Today, the weather was nice, so I went for a walk in the park. There were many people there. People walking with their dogs, riding bikes, and sitting on benches talking. Everyone looked relaxed. I walked slowly through the park. The wind blew my hair and the trees stood tall with green leaves, and the flowers bloomed in beautiful colors. ",
    },
  ];

  return (
    <FollowingWrapper>
      <Header>
        <Title>팔로잉</Title>
        <Link to="/follow">
          <GoToFollow src={gotofollowIcon} alt="Go to follow" />
        </Link>
      </Header>
      <PhotocardWrapper>
        {cardData.map((data, index) => (
          <Photocard
            key={index}
            images={data.images}
            title={data.title}
            content={data.content}
          />
        ))}
      </PhotocardWrapper>
    </FollowingWrapper>
  );
};

export default Following;
