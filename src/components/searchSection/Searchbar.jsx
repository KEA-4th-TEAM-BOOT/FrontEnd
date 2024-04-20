import React from "react";
import styled from "styled-components";
import searchIcon from "../../assets/img/icons/searchicon.svg";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <SearchbarWrapper>
        <Title>검색</Title>
        <SearchContainer>
          <SearchInput placeholder="검색어를 입력하세요" />
          <SearchIcon src={searchIcon} alt="SearchIcon" />
        </SearchContainer>
      </SearchbarWrapper>
    </SearchbarContainer>
  );
};

export default Searchbar;

const SearchbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 104px 0 80px 0;
`;

const SearchbarWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
`;

const Title = styled.h2`
  color: #000;
  font-size: 25px;
  font-weight: bold;
  margin: 0 0 30px 10px;
  align-self: flex-start;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 15px;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px 15px 45px;
  font-size: 15px;
  border-radius: 20px;
  border: 2px solid #0096ff;
  box-shadow: none;
  outline: none;
  &:focus {
    border-color: #0096ff;
    box-shadow: 0 0 0 2px rgba(0, 150, 255, 0.5);
  }
  &::placeholder {
    color: #999;
  }
`;
