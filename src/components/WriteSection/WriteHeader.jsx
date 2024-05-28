import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/img/profile.png";
import { useRecoilValue } from "recoil";
import { UserData } from "../../recoil/user";

const WriteHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const LoginState = useRecoilValue(UserData);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    setIsLoggedIn(LoginState.isLogin);
  }, [LoginState.isLogin]);

  return (
    <HeaderContainer id="header" role="banner">
      <LogoLink to="/">
        <LogoImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6892265024ab900b8dbc2ff05ece0c24e35311c2fc87d1f19dae69dda4cabb4"
          alt="Logo Image"
        />
      </LogoLink>
      <Title>새 게시물 작성</Title>
      <HeaderMenu>
        <HeaderMenuItem>
          <ProfileSection to="/mypage">
            <ProfileImage src={profileImage} alt="Profile" />
          </ProfileSection>
        </HeaderMenuItem>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default WriteHeader;

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

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  width: 150px;
`;

const HeaderMenu = styled.ul`
  margin-left: auto;
  height: 55px;
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
`;

const HeaderMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 25px;
  position: relative;
`;

const ProfileSection = styled(Link)`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 30px;
`;
