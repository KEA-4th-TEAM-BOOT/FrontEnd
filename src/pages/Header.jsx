import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import writeIcon from "../assets/img/icons/writeicon.svg";

import logoImage from "../assets/img/logo.png";
import profileImage from "../assets/img/profile.png";

const Header = () => {
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
        <MenuItem>
          <HeaderMenuIcon src={writeIcon} alt="Write Icon" />
          <MenuLink to="/write">글쓰기</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/write">로그인</MenuLink>
        </MenuItem>
        <ProfileLink to="/mypage">
          <ProfileImage src={profileImage} alt="Profile Image" />
        </ProfileLink>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  width: 1374px;
  height: 300px;
  padding-top: 50px;
  padding-left: 50px;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: flex-start; // 요소들을 컨테이너의 왼쪽으로 정렬 (justify-content default)
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
  align-items: left;
`;

const HeaderMenu = styled.ul`
  width: auto;
  height: 55px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: right;
`;

const MenuItem = styled.li`
  width: 200px;
  display: flex;
  align-items: left;
  justify-content: center;
`;

const HeaderMenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  margin-left: 80px;
  justify-content: start;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: auto;
  margin-left: ;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 50px;
  height: auto;
`;
