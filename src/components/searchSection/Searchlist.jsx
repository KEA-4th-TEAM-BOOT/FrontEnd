import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchCard from "../card/Searchcard";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { searchTitle } from "./../../api/PostAPI";
import { fetchUserData } from "./../../api/UserAPI";

const Searchlist = ({ searchQuery }) => {
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 500ms 대기

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
    return <></>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <ListContainer>
      {fetchdata.content.length > 0 ? (
        fetchdata.content.map((card, index) => {
          const additionalInfo = additionalData[index]; // additionalData에서 대응되는 추가 정보를 가져옴

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
            </React.Fragment>
          );
        })
      ) : (
        <NoResults>검색 결과가 없습니다.</NoResults>
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

const NoResults = styled.div`
  margin-top: 20px;
  margin-bottom: 200px;
  color: #999;
  font-size: 18px;
`;
