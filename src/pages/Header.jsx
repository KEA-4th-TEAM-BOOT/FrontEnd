import React from 'react';
import styled from 'styled-components';

import logoImage from '../images/logo.png';
import profileImage from '../images/profile.png';
import homeIcon from '../images/icons/homeicon.png';
import searchIcon from '../images/icons/searchicon.png';
import feedIcon from '../images/icons/feedicon.png';
import followIcon from '../images/icons/followicon.png';
import writeIcon from '../images/icons/writeicon.png';

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
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-left: 80px; // 수정하기
`;

const ProfileImage = styled.img`
  width: 50px;
  height: auto;
  margin: 10px;
  margin-top: 100px;
  margin-left: 100px; // 수정하기
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`
const Header = () => {
    return (
        <HeaderContainer id='header' role='banner'>
            <h1 className='header_logo'>
                <LogoImage src={logoImage} alt="LogoImage" />
            </h1>
            <nav className='header_menu'>
                <MenuList>
                    <MenuItem>
                        <MenuIcon src={homeIcon} alt="Home Icon" />
                        <a href='/'>메인</a>
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon src={searchIcon} alt="Search Icon" />
                        <a href='/search'>검색</a>
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon src={feedIcon} alt="Feed Icon" />
                        <a href='/feed'>피드</a>
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon src={followIcon} alt="Follow Icon" />
                        <a href='/follow'>팔로잉</a>
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon src={writeIcon} alt="Write Icon" />
                        <a href='/write'>글쓰기</a>
                    </MenuItem>
                </MenuList>
            </nav>
            <div className='header_profile'>
                <ProfileImage src={profileImage} alt="ProfileImage" />
            </div>
        </HeaderContainer>
    )
}

export default Header;
