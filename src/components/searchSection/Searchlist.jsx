import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchCard from "../card/Searchcard";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { searchTitle } from "./../../api/PostAPI";
import { fetchUserData } from "./../../api/UserAPI";

const Searchlist = ({ searchQuery }) => {
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const {
    data: fetchdata,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => searchTitle({ keyword: debouncedQuery }),
    enabled: !!debouncedQuery, // 검색어가 비어있지 않을 때만 쿼리 실행
    placeholderData: keepPreviousData, // 깜빡임 제거 용도로 그 전에 값을 보여주고있는거 이로써 깜빡임 제거 성공
  });

  const [additionalData, setAdditionalData] = useState([]);

  useEffect(() => {
    if (fetchdata && fetchdata.content.length > 0) {
      const fetchAdditionalInfo = async () => {
        try {
          const promises = fetchdata.content.map((card) =>
            fetchUserData(card.userLink)
          );
          const results = await Promise.all(promises);
          setAdditionalData(results);
        } catch (error) {
          console.error("Failed to fetch additional data:", error);
        }
      };
      fetchAdditionalInfo();
    }
  }, [fetchdata]);

  // fetchdata 내용 확인
  console.log("fetchdata:", fetchdata);
  console.log("additionalData:", additionalData);

  if (isLoading) {
    return (
      <ListContainer>
        <NoResults>검색 중 입니다.</NoResults>
      </ListContainer>
    );
  }

  if (isError) {
    return (
      <ListContainer>
        <NoResults>서버에서 응답을 가져오지 못했습니다.</NoResults>
      </ListContainer>
    );
  }

  const filteredData = fetchdata.content;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ListContainer>
      {/* {fetchdata.content.length > 0 ? (
        fetchdata.content.map((card, index) => {
          const additionalInfo = additionalData[index]; // additionalData에서 대응되는 추가 정보를 가져옴 */}
      {paginatedData.length > 0 ? (
        paginatedData.map((card, index) => {
          const additionalInfo = additionalData[index];

          return (
            <React.Fragment key={index}>
              <SearchCard
                thumbnail={card.thumbnailImageUrl}
                title={card.title}
                content={card.thumbnail}
                date={card.createdTime}
                profileImg={additionalInfo?.profileUrl}
                username={additionalInfo?.nickname}
                likes={card.likes}
                likesCount={card.likeCnt}
                commentsCount={card.size}
                userLink={card.userLink}
                id={card.personalPostId}
              />
              {index < paginatedData.length - 1 && <Divider />}
            </React.Fragment>
          );
        })
      ) : (
        <NoResults>검색 결과가 없습니다.</NoResults>
      )}
      {filteredData.length > itemsPerPage && (
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
      )}
    </ListContainer>
  );
};

export default Searchlist;

const ListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0 50px 0;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #d8d8d8;
  width: calc(100%);
  margin: 20px 0;
`;

const NoResults = styled.div`
  margin-top: 20px;
  margin-bottom: 200px;
  color: #999;
  font-size: 18px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
