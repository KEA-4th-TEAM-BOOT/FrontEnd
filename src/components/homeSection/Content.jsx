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
        <SwiperSlide>
          <AudioCard
            imageUrl="data:image/jpeg;base64,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"
            category="NEW FOR YOU"
            title="My New Arrivals"
            writer="Deine Freunde, Moderat"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://upload.wikimedia.org/wikipedia/en/1/1b/Lauv_-_I_Like_Me_Better.png"
            category="NEW TRACK FOR YOU"
            title="Coexist"
            writer="Album by the XX"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA"
            category="NEW ALBUM"
            title="After Hours"
            writer="The Weekend"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK"
            category="BASED ON YOUR LIKES"
            title="If You Wait"
            writer="London Grammar"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="data:image/jpeg;base64,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"
            category="NEW FOR YOU"
            title="My New Arrivals"
            writer="Deine Freunde, Moderat"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://upload.wikimedia.org/wikipedia/en/1/1b/Lauv_-_I_Like_Me_Better.png"
            category="NEW TRACK FOR YOU"
            title="Coexist"
            writer="Album by the XX"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA"
            category="NEW ALBUM"
            title="After Hours"
            writer="The Weekend"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK"
            category="BASED ON YOUR LIKES"
            title="If You Wait"
            writer="London Grammar"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="data:image/jpeg;base64,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"
            category="NEW FOR YOU"
            title="My New Arrivals"
            writer="Deine Freunde, Moderat"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://upload.wikimedia.org/wikipedia/en/1/1b/Lauv_-_I_Like_Me_Better.png"
            category="NEW TRACK FOR YOU"
            title="Coexist"
            writer="Album by the XX"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA"
            category="NEW ALBUM"
            title="After Hours"
            writer="The Weekend"
            tag="# Tag1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AudioCard
            imageUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK"
            category="BASED ON YOUR LIKES"
            title="If You Wait"
            writer="London Grammar"
            tag="# Tag1"
          />
        </SwiperSlide>
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
