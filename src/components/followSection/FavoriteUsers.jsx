import React, { useState } from "react";
import styled from "styled-components";
import Usercard from "../card/Usercard";

const UserData = [
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
  {
    username: "도슨트",
    userIntro: "인문학 책읽기를 좋아하는 공대생 블로그",
    profileImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKCBLmVz8ur0tkn85nUvKoNx10rVMVaIn5X5sJXcxhSTlpSomm",
  },
];

const FavoriteUsers = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = isExpanded ? 25 : 6;
  const totalPages = Math.ceil(UserData.length / itemsPerPage);

  const displayedData = UserData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <FavoriteUsersWrapper>
      <ContentContainer>
        <FavoriteUsersTop>
          <FavoriteUsersTitle>즐겨찾기</FavoriteUsersTitle>
          <FavoriteUsersIntro>
            내가 즐겨찾기 해놓은 팔로잉 유저들의 소식을 확인해보세요
          </FavoriteUsersIntro>
        </FavoriteUsersTop>
        <UsercardContainer>
          {displayedData.map((data, index) => (
            <Usercard key={index} {...data} />
          ))}
        </UsercardContainer>
        <Pagination>
          <ArrowButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </ArrowButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageNumber
              key={index}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PageNumber>
          ))}
          <ArrowButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </ArrowButton>
        </Pagination>
      </ContentContainer>
    </FavoriteUsersWrapper>
  );
};

export default FavoriteUsers;

const FavoriteUsersWrapper = styled.div`
  padding: 0 120px 220px 120px;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const FavoriteUsersTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const FavoriteUsersTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;

const FavoriteUsersIntro = styled.span`
  font-size: 16px;
  color: #666;
`;

const UsercardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 100px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    color: #ddd;
  }
`;

const PageNumber = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin: 0 4px;
  color: ${({ isActive }) => (isActive ? "#000" : "#666")};
`;
