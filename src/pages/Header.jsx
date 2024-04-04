import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  width: 165px;
  height: calc(100% - 120px);
  overflow-y: auto;
  z-index: 10000;
  border-right: 1px solid var(--black100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 55px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  width: 100px;
  height: 90px;
`;

const MenuList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  width: 100%;
  margin-top: 5px;
  padding-top: 17px;
  padding-bottom: 17px;
  text-align: center;
  align-items: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    background: rgba(141, 141, 141, 0.3);
    color: white;
    transition: 0.5s;
  }
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: auto;
  margin-top: 100px;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  width: 50px;
  height: auto;
  margin-top: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer id="header" role="banner">
      <LogoLink to="/">
        <LogoImage src={logoImage} alt="Logo Image" />
      </LogoLink>
      <MenuList>
        <MenuItem>
          <MenuLink to="/">
            <MenuIcon src={homeIcon} alt="Home Icon" />
            메인
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/search">
            <MenuIcon src={searchIcon} alt="Search Icon" />
            검색
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/feed">
            <MenuIcon src={feedIcon} alt="Feed Icon" />
            피드
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/follow">
            <MenuIcon src={followIcon} alt="Follow Icon" />
            팔로잉
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/write">
            <MenuIcon src={writeIcon} alt="Write Icon" />
            글쓰기
          </MenuLink>
        </MenuItem>
      </MenuList>
      <ProfileLink to="/mypage">
        <ProfileImage src={profileImage} alt="Profile Image" />
      </ProfileLink>
    </HeaderContainer>
  );
};

export default Header;
