import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import playBtn from "../../assets/img/icons/postplayicon.svg";
import pauseBtn from "../../assets/img/icons/postpauseicon.svg";

const PostHeader = ({ postInfo, userInfo }) => {
  const createdTime = postInfo.createdTime;
  const isYours = postInfo.userLink === userInfo.userLink;
  // 문자열을 'T'를 기준으로 분리
  const [datePart] = createdTime.split("T");

  const postInfoData = [
    {
      tags: ["# 제주", "# 일상", "# 오름", "# 자연"],
    },
  ];

  const { tags } = postInfoData[0];

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL이 복사되었습니다!");
  };

  return (
    <PostHeaderContainer>
      <HeaderWrapper>
        <BlogTitle>{userInfo.nickname} 님의 블로그</BlogTitle>
        <Category>{postInfo.subject}</Category>
        <TitleWrapper>
          {postInfo.postVoiceFileUrl && (
            <PostPlayIcon
              src={isPlaying ? pauseBtn : playBtn}
              alt="Play or pause"
              onClick={togglePlay}
              isPlaying={isPlaying}
            />
          )}
          <ReactPlayer
            url={postInfo.postVoiceFileUrl}
            playing={isPlaying}
            controls
            width="0"
            height="0"
            style={{ display: "none" }}
          />
          <PostTitle>{postInfo.title}</PostTitle>
        </TitleWrapper>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
        <BottomSection>
          <ProfileContainer>
            <ProfileImage
              src={userInfo.profileUrl}
              alt={`${userInfo.nickname}'s profile`}
            />
            <Nickname>{userInfo.nickname} •</Nickname>
            <PostDate>{datePart}</PostDate>
          </ProfileContainer>
          <ButtonContainer>
            {isYours && (
              <>
                <EditButton>수정</EditButton>
                <DeleteButton>삭제</DeleteButton>
              </>
            )}
            <CopyUrlBtn onClick={copyUrlToClipboard}>URL 복사</CopyUrlBtn>
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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 50px;
  width: 100%;
`;

const PostPlayIcon = styled.img`
width: 50px;
height; 50px;
cursor: pointer;
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
  padding: 30px 20px;
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
