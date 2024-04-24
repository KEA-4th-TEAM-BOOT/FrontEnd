import React from "react";
import styled from "styled-components";

const PostHeader = () => {
  const postInfoData = [
    {
      nickname: "제주파",
      category: "일상",
      title: "거친 자연을 품은 제주도 오름",
      tags: ["# 제주", "# 일상", "# 제주도", "# 오름", "# 자연"],
      profileImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaWksGAUsmDHd-Zmfu6-6TgiH0qtw23poll21guIBMfSvCXsDf",
      date: "2024.03.01",
      time: "01: 50",
    },
  ];

  const { nickname, category, title, tags, profileImage, date, time } =
    postInfoData[0];

  return (
    <PostHeaderContainer>
      <HeaderWrapper>
        <BlogTitle>{nickname} 님의 블로그</BlogTitle>
        <Category>{category}</Category>
        <PostTitle>{title}</PostTitle>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
        <BottomSection>
          <ProfileContainer>
            <ProfileImage src={profileImage} alt={`${nickname}'s profile`} />
            <Nickname>{nickname} •</Nickname>
            <PostDate>{date}</PostDate>
            <PostTime>{time}</PostTime>
          </ProfileContainer>
          <ButtonContainer>
            <EditButton>수정</EditButton>
            <DeleteButton>삭제</DeleteButton>
            <CopyUrlBtn>URL 복사</CopyUrlBtn>
          </ButtonContainer>
        </BottomSection>
      </HeaderWrapper>
    </PostHeaderContainer>
  );
};

export default PostHeader;

const PostHeaderContainer = styled.section`
  height: 545px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderWrapper = styled.section`
  margin: 104px 200px;
  background-color: white;
  width: 70%;
`;

const BlogTitle = styled.h2`
  margin-top: 0;
  color: #000;
  font-size: 60px;
  font-weight: bold;
  text-align: left;
  padding: 0 50px;
  width: 100%;
`;

const Category = styled.div`
  color: #aaa;
  padding: 0 50px;
  font-size: 25px;
  box-shadow: none;
`;

const PostTitle = styled.div`
  color: #212529;
  font-size: 40px;
  font-weight: bold;
  padding: 30px 50px;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0 50px;
`;

const Tag = styled.span`
  color: #17a2b8;
  padding: 10px 0 0 0;
  font-size: 15px;
`;

const BottomSection = styled.div`
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Nickname = styled.span`
  color: black;
  font-size: 20px;
  margin-right: 15px;
`;

const PostDate = styled(Nickname)``;

const PostTime = styled(Nickname)``;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const buttonStyle = `
  background-color: transparent;
  color: rgb(0,0,0,0.5);
  padding: 0 10px;
  border: 0;
  cursor: pointer;
  font-size: 14px;
`;

const EditButton = styled.button`
  ${buttonStyle}
`;

const DeleteButton = styled.button`
  ${buttonStyle}
`;

const CopyUrlBtn = styled.button`
  ${buttonStyle}
`;
