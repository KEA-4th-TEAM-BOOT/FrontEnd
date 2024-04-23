import React from 'react'
import profileImage from "../../assets/img/profile.png"
import styled from 'styled-components'
const WriteHeader = () => {
  return (
    <HeaderWrapper>
    <HeaderContent>
      <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/543de14573fe9c7c84b4a61f46eb3455b4166ec4754a4652786099ef87fed3a8?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="Logo" />
      <Title>새 게시물 작성</Title>
    </HeaderContent>
    <ProfileImage src={profileImage} alt="Profile" />
  </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  border-bottom: 1px solid rgba(228, 228, 228, 1);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 53px 5px 0;
  
  @media (max-width: 991px) {
    padding: 5px 20px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Logo = styled.img`
  width: 98px;
  padding-left: 53px;
  aspect-ratio: 2.63;
  object-fit: contain;
`;

const Title = styled.h1`
  font-family: Syncopate, sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const ProfileImage = styled.img`
  width: 51px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
`;

export default WriteHeader

