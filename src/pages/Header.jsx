import React from "react";
import styled from "styled-components";

import logoImage from "../images/logo.png";
import profileImage from "../images/profile.png";
import homeIcon from "../images/icons/homeicon.svg";
import searchIcon from "../images/icons/searchicon.svg";
import feedIcon from "../images/icons/feedicon.svg";
import followIcon from "../images/icons/followicon.svg";
import writeIcon from "../images/icons/writeicon.svg";

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  overflow-y: auto;
  z-index: 10000;
  border-right: 1px solid var(--black100);
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-left: 80px; // 수정 필요
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: black;
  }
  margin-top: 50px;
  text-align: center;
  align-items: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 80px; // 수정 필요
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const MenuItemLink = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: auto;
  margin: 10px;
  margin-top: 100px;
  margin-left: 45px; // 수정 필요
`;

const ProfileLink = styled.a`
  width: 50px;
  height: auto;
  margin: 10px;
  margin-top: 100px;
  margin-left: 45px; // 수정 필요
`;

const Header = () => {
  return (
    <HeaderContainer id="header" role="banner">
      <h1 className="header_logo">
        <LogoImage src={logoImage} alt="LogoImage" />
      </h1>
      <nav className="header_menu">
        <MenuList>
          <MenuItem>
            <MenuItemLink href="/">
              <MenuIcon src={homeIcon} alt="Home Icon" />
              메인
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/search">
              <MenuIcon src={searchIcon} alt="Search Icon" />
              검색
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/feed">
              <MenuIcon src={feedIcon} alt="Feed Icon" />
              피드
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/follow">
              <MenuIcon src={followIcon} alt="Follow Icon" />
              팔로잉
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/write">
              <MenuIcon src={writeIcon} alt="Write Icon" />
              글쓰기
            </MenuItemLink>
          </MenuItem>
        </MenuList>
      </nav>
      <ProfileLink href="/mypage">
        <ProfileImage src={profileImage} alt="ProfileImage" />
      </ProfileLink>
    </HeaderContainer>
  );
};
export default Header;
