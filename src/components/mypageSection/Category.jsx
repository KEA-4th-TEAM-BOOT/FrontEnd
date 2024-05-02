import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import categoryIcon from "../../assets/img/icons/categoryicon.svg";
import searchIcon from "../../assets/img/icons/searchicon.svg";

const CategoryData = [
  { id: 1, name: "전체보기", count: 10 },
  { id: 2, name: "카테고리 1", count: 3 },
  { id: 3, name: "카테고리 2", count: 2 },
  { id: 4, name: "카테고리 3", count: 4 },
  { id: 5, name: "카테고리 4", count: 1 },
];

const Category = () => {
  return (
    <CategorySection>
      <CategoryHeader>
        <CategoryTitle>카테고리</CategoryTitle>
        <Link to="/setting">
          <Icon src={categoryIcon} alt="Setting" />
        </Link>
      </CategoryHeader>
      <Divider />
      <CategoryList>
        {CategoryData.map((category) => (
          <CategoryItem key={category.id} isAll={category.name === "전체보기"}>
            {category.name} ({category.count})
          </CategoryItem>
        ))}
      </CategoryList>
      <SearchBox>
        <SearchInput type="text" placeholder="검색" />
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchBox>
    </CategorySection>
  );
};

export default Category;

const CategorySection = styled.section`
  margin: 100px 50px 100px 200px;
  padding: 20px;
  font-size: 15px;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Icon = styled.img`
  margin-right: 40px;
  display: flex;
  align-items: center;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 15px;
`;

const CategoryItem = styled.li`
  margin-bottom: 15px;
  cursor: pointer;
  font-weight: ${(props) => (props.isAll ? "700" : "500")};
  &:hover {
    text-decoration: underline;
  }
`;

const SearchBox = styled.div`
  position: relative;
  margin: 25px 0 0 5px;
`;

const SearchInput = styled.input`
  width: 110px;
  padding: 10px;
  padding-right: 35px;
  text-indent: 5px;
  border: 1px solid #ddd;
  border-radius: 30px;
  background-color: rgba(217, 217, 217, 0.3);
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 7px rgba(102, 175, 233, 0.5);
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
