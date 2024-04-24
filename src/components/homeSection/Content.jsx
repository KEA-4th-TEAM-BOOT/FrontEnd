// 필요한 모듈 및 컴포넌트를 임포트합니다.
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import AudioCard from "../card/Audiocard";
// Swiper 스타일시트를 임포트합니다.
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Content 컴포넌트를 정의합니다.
const Content = () => {
  const audioCards = [
    {
      imageUrl:
        "https://i.namu.wiki/i/DxT8JMtpNj45oL_AHXWWowhJqzigx87KCDZrLeV4ePpO3oZCCylQj-W_qtrM2Zo2B0_82-Hv4PGN5C2ElOtR0w.webp",
      category: "문화",
      title: "도시 탐험",
      writer: "도시 탐험가",
      tag: "#도시 #문화 #탐험 #여행",
    },
    {
      imageUrl:
        "https://cdn.kormedi.com/wp-content/uploads/2023/06/unnamed-file-152.jpg",
      category: "라이프스타일",
      title: "아침 루틴",
      writer: "일상의 발견",
      tag: "#아침 #일상 #건강 #라이프스타일",
    },
    {
      imageUrl:
        "https://news.samsungdisplay.com/wp-content/uploads/2021/12/1223_%EC%9D%B4%EB%AF%B8%EC%A7%801.jpg",
      category: "IT",
      title: "2024 기술 트렌드",
      writer: "실리콘 밸리 리포트",
      tag: "#기술 #트렌드 #2024 #혁신",
    },
    {
      imageUrl:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2jJV/image/Mf_XOc0EP5PP_Ki7DrKrvPSm_cI.jpg",
      category: "여행",
      title: "유럽의 숨은 보석",
      writer: "글로벌 여행",
      tag: "#여행 #유럽 #숨은명소 #발견",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVeVo8k_cD8thdiuS9bVyjqTSYMTpQVFIe5x27EVJLw&s",
      category: "스포츠",
      title: "챔피언스 리그 하이라이트",
      writer: "스포츠 위클리",
      tag: "#스포츠 #축구 #챔피언스리그 #하이라이트",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGhlpTrcqwlrA5UCq9eTFALXzlxAQ3NLfiRkJ2xY5NQ&s",
      category: "시사",
      title: "세계 정치 리뷰",
      writer: "뉴스 투데이",
      tag: "#정치 #글로벌 #뉴스 #업데이트",
    },
    {
      imageUrl:
        "https://i.namu.wiki/i/mhTUAYL26ZuN8WdT6bjYuhwNd54nyPH84h1Cce79F5_1bPnKpV3YzpP93KD5NXtL2iQbts0RFcJkCqSTOr4Ung.webp",
      category: "문화",
      title: "도자기 예술",
      writer: "장인의 손길",
      tag: "#예술 #도자기 #공예 #문화",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3V9dNK-UgkpTHlp9imJIhwFCyp337EgFdrHLd6916Dw&s",
      category: "라이프스타일",
      title: "비건 다이어트 101",
      writer: "헬시 이츠",
      tag: "#비건 #다이어트 #건강 #생활",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtG7wJXBkMKWnYoLxR7oHZtc7whMAtI2a3Zdp2IHgmw&s",
      category: "IT",
      title: "인공지능의 미래",
      writer: "테크 미래",
      tag: "#인공지능 #미래 #기술 #혁신",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00_jwC9XFc-n8OD0rFNo6u-5qqWJXM6lhfFC9BM0dZA&s",
      category: "여행",
      title: "뉴질랜드의 모험",
      writer: "탐험가 가이드",
      tag: "#모험 #뉴질랜드 #여행 #탐험",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1aiWB50viZV7qi2fiYK_i7Zs-4vfTpIVWClo7NgPTA&s",
      category: "스포츠",
      title: "테니스 그랜드 슬램 이벤트",
      writer: "테니스 월드",
      tag: "#테니스 #그랜드슬램 #스포츠 #이벤트",
    },
    {
      imageUrl:
        "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788960543096.jpg",
      category: "시사",
      title: "경제 트렌드 리뷰",
      writer: "경제 투데이",
      tag: "#경제 #트렌드 #글로벌 #시장",
    },
  ];

  // Swiper 인스턴스를 참조하기 위한 ref를 생성합니다.
  const swiperRef = useRef(null);
  // 시작점과 끝점에 도달했는지 여부를 나타내는 상태를 관리합니다.
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // 슬라이드 상태가 변경될 때마다 버튼의 활성/비활성 상태를 업데이트하는 함수입니다.
  const updateButtonState = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  // '다음' 버튼 클릭 시 호출되는 함수로, 4개 슬라이드를 넘깁니다.
  // 슬라이드의 범위를 넘어서지 않도록 조건을 체크합니다.
  const goNext = () => {
    if (!isEnd) {
      let nextIndex = swiperRef.current.activeIndex + 4;
      nextIndex =
        nextIndex >= swiperRef.current.slides.length
          ? swiperRef.current.slides.length - 1
          : nextIndex;
      swiperRef.current.slideTo(nextIndex);
    }
  };

  // '이전' 버튼 클릭 시 호출되는 함수로, 4개 슬라이드를 되돌립니다.
  // 슬라이드의 범위를 넘어서지 않도록 조건을 체크합니다.
  const goPrev = () => {
    if (!isBeginning) {
      let prevIndex = swiperRef.current.activeIndex - 4;
      prevIndex = prevIndex < 0 ? 0 : prevIndex;
      swiperRef.current.slideTo(prevIndex);
    }
  };

  // 컴포넌트가 마운트된 후 swiper 인스턴스의 slideChange 이벤트에 리스너를 등록합니다.
  // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", updateButtonState);
    }
    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("slideChange", updateButtonState);
      }
    };
  }, []);

  // 컴포넌트 UI를 렌더링합니다.
  return (
    <ContentWrapper>
      <ContentTitle>
        <h4>콘텐츠</h4> {/* h1 대신 span을 사용합니다. */}
        <div>
          {/* 버튼을 div로 감싸서 오른쪽 정렬을 유지합니다. */}
          <Buttons onClick={goPrev} disabled={isBeginning}>
            ◀
          </Buttons>
          <Buttons onClick={goNext} disabled={isEnd}>
            ▶
          </Buttons>
        </div>
      </ContentTitle>
      {/* Swiper 컴포넌트. 각 슬라이드는 AudioCard 컴포넌트를 포함합니다. */}
      <Swiper
        slidesPerView={4.2}
        spaceBetween={30}
        className="audioCardSlider"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateButtonState(); // Swiper 인스턴스가 준비된 후 초기 상태를 업데이트합니다.
        }}
      >
        {audioCards.map((card, index) => (
          <SwiperSlide>
            <AudioCard
              key={index}
              imageUrl={card.imageUrl}
              category={card.category}
              title={card.title}
              writer={card.writer}
              tag={card.tag}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContentWrapper>
  );
};

// 컴포넌트를 내보냅니다.
export default Content;

// styled-components를 사용하여 ContentWrapper 컴포넌트 스타일을 정의합니다.
const ContentWrapper = styled.div`
  width: 1374px;
  height: auto;
  position: relative;
  padding-top: 107px;
  padding-left: 197px;
  padding-right: 197px;
  margin: 0 auto;
`;

// ContentTitle 컴포넌트의 스타일을 정의합니다.
const ContentTitle = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Buttons = styled.button`
  background-color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  margin-left: 10px; /* 왼쪽 마진 추가 */
  border: none; /* 테두리 제거 */
  cursor: pointer; /* 마우스 오버 시 커서 변경 */
  &:disabled {
    background-color: #ccc; /* 비활성화 시 배경색 변경 */
    cursor: default; /* 비활성화 시 커서 변경 */
  }
`;
