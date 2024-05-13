import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/img/profile.png";
import styled from "styled-components";
const WriteHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoSection to="/">
          <Logo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/543de14573fe9c7c84b4a61f46eb3455b4166ec4754a4652786099ef87fed3a8?apiKey=a9a9d68966df47cab33790d709ea20f1&"
            alt="Logo"
          />
        </LogoSection>
        <Title>새 게시물 작성</Title>
      </HeaderContent>
      <HeaderMenu>
        <ProfileSection to="/mypage">
          <ProfileImage src={profileImage} alt="Profile" />
        </ProfileSection>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 104px;
  padding: 0 0 0 50px;
  transition: opacity 0.5s;
  letter-spacing: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: nowrap;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const LogoSection = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 144px;
  height: 55px;
`;

const Logo = styled.img`
  width: 144px;
  height: 55px;
`;

const Title = styled.h1`
  font-family: Syncopate, sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const HeaderMenu = styled.ul`
  margin-left: auto;
  height: 55px;
  list-style-type: none;
  display: flex;
  justify-content: flex-end; // 오른쪽 정렬
  align-items: center;
  flex-wrap: nowrap;
`;

const ProfileSection = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: auto;
`;

const ProfileImage = styled.img`
  width: 51px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
`;

export default WriteHeader;
