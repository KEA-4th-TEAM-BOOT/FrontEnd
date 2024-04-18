import React from "react";
import styled from "styled-components";
import AudioCard from "../card/Audiocard";

const audioCardData = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
    category: "NEW FOR YOU",
    title: "My New Arrivals",
    writer: "Deine Freunde, Moderat",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
    category: "NEW TRACK FOR YOU",
    title: "Coexist",
    writer: "Album by the XX",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
    category: "NEW ALBUM",
    title: "After Hours",
    writer: "The Weekend",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
    category: "BASED ON YOUR LIKES",
    title: "If You Wait",
    writer: "London Grammar",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
    category: "NEW FOR YOU",
    title: "My New Arrivals",
    writer: "Deine Freunde, Moderat",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
    category: "NEW TRACK FOR YOU",
    title: "Coexist",
    writer: "Album by the XX",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
    category: "NEW ALBUM",
    title: "After Hours",
    writer: "The Weekend",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
    category: "BASED ON YOUR LIKES",
    title: "If You Wait",
    writer: "London Grammar",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
    category: "NEW FOR YOU",
    title: "My New Arrivals",
    writer: "Deine Freunde, Moderat",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
    category: "NEW TRACK FOR YOU",
    title: "Coexist",
    writer: "Album by the XX",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
    category: "NEW ALBUM",
    title: "After Hours",
    writer: "The Weekend",
    tag: "# Tag1",
  },
  {
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
    category: "BASED ON YOUR LIKES",
    title: "If You Wait",
    writer: "London Grammar",
    tag: "# Tag1",
  },
];

const FollowBottom = () => {
  return (
    <BottomSection>
      <Title>팔로잉</Title>
      <AudioCardContainer>
        {audioCardData.map((data, index) => (
          <AudioCard key={index} {...data} />
        ))}
      </AudioCardContainer>
    </BottomSection>
  );
};

export default FollowBottom;

const BottomSection = styled.div`
  margin: 250px auto;
  max-width: 1400px;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: bold;
  text-align: left;
  color: #000000;
  width: 100%;
`;

const AudioCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
