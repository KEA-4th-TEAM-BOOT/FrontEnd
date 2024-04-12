import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import writeIcon from "../assets/img/icons/writeicon.svg";
import notifyIcon from "../assets/img/icons/notifyicon.svg";
import logoImage from "../assets/img/logo.png";
import profileImage from "../assets/img/profile.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <HeaderContainer id="header" role="banner">
      <LogoLink to="/">
        <LogoImage src={logoImage} alt="Logo Image" />
      </LogoLink>
      <MenuList>
        <MenuItem>
          <MenuLink to="/">메인</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/search">검색</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/feed">피드</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/follow">팔로잉</MenuLink>
        </MenuItem>
      </MenuList>
      <HeaderMenu>
        <HeaderMenuItem>
          <IconAndTextContainer>
            <HeaderMenuIcon src={writeIcon} alt="Write Icon" />
            <MenuText>글쓰기</MenuText>
          </IconAndTextContainer>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <IconAndTextContainer>
            <HeaderMenuIcon src={notifyIcon} alt="Notify Icon" />
            <MenuText>알림</MenuText>
          </IconAndTextContainer>
        </HeaderMenuItem>
        {/* 로그인 O -> 프로필 이미지 / 로그인 X -> "로그인" 텍스트 */}
        {isLoggedIn ? (
          <ProfileLink to="/mypage">
            <ProfileImage src={profileImage} alt="Profile Image" />
          </ProfileLink>
        ) : (
          <HeaderMenuItem>
            <MenuText to="/login">로그인</MenuText>
          </HeaderMenuItem>
        )}
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 104px;
  padding: 10px 50px 0 50px;
  transition: opacity 0.5s;
  letter-spacing: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: nowrap;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 55px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100px;
  height: 55px;
`;

const MenuList = styled.ul`
  width: auto;
  height: 55px;
  list-style-type: none;
  display: flex;
  justify-content: space-between; // 아이템들 사이 간격 동일하게 만들어줌
  align-items: center;
  padding-left: 0;
  margin-left: 50px;
  flex-wrap: nowrap;
`;

const MenuItem = styled.li`
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  font-weight: bold;
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

const HeaderMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start; // 왼쪽 정렬
  margin-right: 20px;
  min-width: 100px;
`;

const IconAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderMenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 24px;
`;

const MenuText = styled.span`
  font-weight: bold;
  height: 24px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; // 프로필 이미지 동그랗게
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 50px;
  height: auto;
`;
