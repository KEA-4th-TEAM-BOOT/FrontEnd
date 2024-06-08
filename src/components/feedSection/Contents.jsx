import React, { useState, useEffect, useRef, useCallback } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import styled from "styled-components";
import AudioCard from "../card/Audiocard";
import { searchSubject } from "../../api/PostAPI";

const Contents = ({ defaultSortOrder = "popular" }) => {
  const [activeCategory, setActiveCategory] = useState("라이프");
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  const [contentData, setContentData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  console.log("activeCategory : " + activeCategory);
  const {
    data: fetchdata,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["searchSubject", activeCategory],
    queryFn: () => searchSubject({ keyword: activeCategory }),
    placeholderData: keepPreviousData, // 깜빡임 제거 용도로 그 전에 값을 보여주고있는거 이로써 깜빡임 제거 성공
  });

  useEffect(() => {
    if (fetchdata) {
      setContentData(fetchdata.content);
      console.log(fetchdata.content);
    }
  }, [fetchdata]);

  const loader = useRef(null);
  const observer = useRef(null);

  const fetchData = useCallback(async () => {
    setLoading(true);

    setTimeout(() => {
      const newContent = fetchdata.slice((page - 1) * 15, page * 15);
      setContentData((prev) => [...prev, ...newContent]);
      setLoading(false);
    }, 300);
  }, [page, activeCategory, fetchdata]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    },
    [loading]
  );

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });
    if (loader.current) {
      observer.current.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.current.unobserve(loader.current);
      }
    };
  }, [handleObserver]);

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [fetchData, page]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <ContentsWrapper>
      <Title>콘텐츠</Title>
      <SelectContainer>
        <Categories>
          {["라이프", "여행", "문화", "IT", "스포츠", "시사"].map(
            (category) => (
              <CategoryButton
                key={category}
                active={activeCategory === category}
                onClick={() => handleCategoryClick(category)}
              >
                {category === "라이프"
                  ? "라이프"
                  : category === "여행"
                  ? "여행"
                  : category === "문화"
                  ? "문화"
                  : category === "IT"
                  ? "IT"
                  : category === "스포츠"
                  ? "스포츠"
                  : "시사"}
              </CategoryButton>
            )
          )}
        </Categories>
        <SortSelect value={sortOrder} onChange={handleSortOrderChange}>
          <option value="popular">인기순</option>
          <option value="recent">최신순</option>
        </SortSelect>
      </SelectContainer>
      <CardsContainer>
        {contentData.map((data, index) => (
          <AudioCard key={index} {...data} />
        ))}
      </CardsContainer>
      <div ref={loader} />
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.div`
  padding: 160px 120px 220px 120px;
  margin: 0 auto;
  max-width: 1400px;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-size: 45px;
  font-weight: bold;
  text-align: left;
  color: #000000;
  width: 100%;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const CategoryButton = styled.button`
  background: none;
  border: none;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
  color: #000;
  cursor: pointer;
  padding: 10px 20px;
  margin: 20px 10px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  font-size: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;

const SortSelect = styled.select`
  padding: 5px;
  border: none;
  background: transparent;
  font-weight: bold;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  margin-right: 25px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  row-gap: 40px;
  margin: 0;
  padding: 0;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
