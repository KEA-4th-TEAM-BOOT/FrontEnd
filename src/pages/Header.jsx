import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import writeIcon from "../assets/img/icons/writeicon.svg";
import notifyIcon from "../assets/img/icons/notifyicon.svg";
import profileImage from "../assets/img/profile.png";
import LoginPage from "../components/login/LoginPage";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalState } from "../recoil/modal";
import { UserData } from "../recoil/user";
import { logout } from "../api/UserAPI";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const setModal = useSetRecoilState(modalState);
  const setUserData = useSetRecoilState(UserData);
  const LoginState = useRecoilValue(UserData);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setModal({
      isOpen: true,
      content: LoginPage,
      props: {}, // 필요한 경우 추가 props 전달
    });
  };

  const handleIconClick = () => {
    if (!isLoggedIn) {
      handleLoginClick();
    }
  };

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = async () => {
    try {
      await logout();
      // 로그아웃 성공 시 로컬 스토리지와 세션 스토리지에서 토큰 삭제
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");

      // Recoil 상태 업데이트
      setUserData({
        email: "",
        isLogin: false,
      });

      // 로그인 상태 업데이트
      setIsLoggedIn(false);

      // 로그아웃 후 메인 페이지로 이동
      navigate("/");
    } catch (error) {
      console.error("로그아웃 실패:", error);
      // 에러 처리 로직 추가
    }
  };

  useEffect(() => {
    setIsLoggedIn(LoginState.isLogin);
  }, [LoginState.isLogin]);

  return (
    <HeaderContainer id="header" role="banner">
      <LogoLink to="/">
        <LogoImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6892265024ab900b8dbc2ff05ece0c24e35311c2fc87d1f19dae69dda4cabb4?apiKey=a9a9d68966df47cab33790d709ea20f1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6892265024ab900b8dbc2ff05ece0c24e35311c2fc87d1f19dae69dda4cabb4?apiKey=a9a9d68966df47cab33790d709ea20f1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6892265024ab900b8dbc2ff05ece0c24e35311c2fc87d1f19dae69dda4cabb4?apiKey=a9a9d68966df47cab33790d709ea20f1&"
          alt="Logo Image"
        />
      </LogoLink>
      <MenuList>
        <MenuItem>
          <MenuLink to="/">메인</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/search">검색</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/feed">콘텐츠</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/follow">팔로잉</MenuLink>
        </MenuItem>
      </MenuList>
      <HeaderMenu>
        <HeaderMenuItem>
          <IconLink to="/write">
            <HeaderMenuIconW src={writeIcon} alt="Write Icon" />
          </IconLink>
        </HeaderMenuItem>
        <HeaderMenuItem onClick={handleIconClick}>
          <HeaderMenuIconN src={notifyIcon} alt="Notify Icon" />
        </HeaderMenuItem>
        {isLoggedIn ? (
          <HeaderMenuItem>
            <ProfileImage
              src={profileImage}
              alt="Profile Image"
              onClick={handleProfileClick}
            />
            {showDropdown && (
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/mypage">마이페이지</Link>
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
              </DropdownMenu>
            )}
          </HeaderMenuItem>
        ) : (
          <HeaderMenuItem>
            <MenuText onClick={handleLoginClick}>로그인</MenuText>
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
  padding: 0 0 0 50px;
  transition: opacity 0.5s;
  letter-spacing: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: nowrap;
`;

const LogoImage = styled.img`
  width: 96px;
  height: 36px;
  align-self: center;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 144px;
  height: 55px;
`;

const MenuList = styled.ul`
  width: auto;
  height: 55px;
  list-style-type: none;
  display: flex;
  justify-content: space-between; // 아이템들 사이 간격 동일하게 만들어줌
  align-items: center;
  padding-left: 50px;
  flex-wrap: nowrap;
`;

const MenuItem = styled.li`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
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
  margin-right: 25px;
  position: relative;
`;

const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderMenuIconW = styled.img`
  width: 27px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderMenuIconN = styled(HeaderMenuIconW)`
  width: 25px;
  height: 25px;
`;

const MenuText = styled.span`
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  min-width: 50px;
  margin-right: 30px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; // 프로필 이미지 동그랗게
  cursor: pointer;
  margin-right: 30px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  list-style-type: none;
  padding: 10px 0;
  margin: 0;
  width: 150px;
  z-index: 200;
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: auto;
`;
