import { useState, useEffect } from "react";
import styled from "styled-components";
import Bloginfo from "../components/mypageSection/Bloginfo";
import Postlist from "../components/mypageSection/Postlist";
import Category from "../components/mypageSection/Category";
import { fetchUser, fetchUserData } from "../api/UserAPI";
import { useSetRecoilState } from "recoil";
import { UserProfileState } from "../recoil/user";
import { useLocation, useParams } from "react-router-dom";
import { fetch_AllPost } from "../api/PostAPI";

const Mypage = () => {
  const location = useLocation();
  const { userLink } = useParams();
  const setUserProfileState = useSetRecoilState(UserProfileState);
  const [userInfo, setUserInfo] = useState(null);
  const [postList, setPostList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);

  const itemsPerPage = 7;
  const pagesPerGroup = 5;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let userInfo;
        let postList;
        if (location.pathname === "/mypage") {
          userInfo = await fetchUser(); // /mypage로 접근한 경우
          setUserProfileState(userInfo);
          postList = await fetch_AllPost(userInfo.userLink);
          setPostList(postList);
        } else {
          userInfo = await fetchUserData(userLink); // /:userLink로 접근한 경우
          postList = await fetch_AllPost(userInfo.userLink);
        }
        setUserInfo(userInfo);
        setPostList(postList);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, [location.pathname, userLink, setUserProfileState]);

  const totalPages = Math.ceil(postList?.length / itemsPerPage || 0);
  const totalPageGroups = Math.ceil(totalPages / pagesPerGroup);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      const newPageGroup = Math.ceil(page / pagesPerGroup);
      setPageGroup(newPageGroup);
    }
  };

  const handleGroupChange = (direction) => {
    if (direction === "prev" && pageGroup > 1) {
      const newPageGroup = pageGroup - 1;
      setPageGroup(newPageGroup);
      setCurrentPage((newPageGroup - 1) * pagesPerGroup + 1);
    } else if (direction === "next" && pageGroup < totalPageGroups) {
      const newPageGroup = pageGroup + 1;
      setPageGroup(newPageGroup);
      setCurrentPage((newPageGroup - 1) * pagesPerGroup + 1);
    }
  };

  const startPage = (pageGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(pageGroup * pagesPerGroup, totalPages);

  if (!userInfo) {
    return <></>;
  }

  return (
    <MyPageWrapper>
      <Bloginfo userInfo={userInfo} />
      <Wrapper>
        <Category categoryList={userInfo.categoryList} />
        <Postlist
          postList={postList}
          userLink={userInfo.userLink}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </Wrapper>
      <Pagination>
        <ArrowButton
          onClick={() => handleGroupChange("prev")}
          disabled={pageGroup === 1}
        >
          &lt;&lt;
        </ArrowButton>
        <ArrowButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </ArrowButton>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <PageNumber
            key={index}
            onClick={() => handlePageChange(startPage + index)}
            isActive={currentPage === startPage + index}
          >
            {startPage + index}
          </PageNumber>
        ))}
        <ArrowButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </ArrowButton>
        <ArrowButton
          onClick={() => handleGroupChange("next")}
          disabled={pageGroup === totalPageGroups}
        >
          &gt;&gt;
        </ArrowButton>
      </Pagination>
    </MyPageWrapper>
  );
};

export default Mypage;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const PageNumber = styled.button`
  background: none;
  border: none;
  color: ${({ isActive }) => (isActive ? "#000" : "#bbb")};
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #bbb;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &:disabled {
    color: #eee;
    cursor: default;
  }
`;
