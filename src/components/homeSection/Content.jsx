// 필요한 모듈 및 컴포넌트를 임포트합니다.
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import AudioCard from '../../components/ui/Audiocard';
// Swiper 스타일시트를 임포트합니다.
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// styled-components를 사용하여 ContentWrapper 컴포넌트 스타일을 정의합니다.
const ContentWrapper = styled.div`
  width: 1374px;
  height: auto;
  padding: 30px;
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
      nextIndex = nextIndex >= swiperRef.current.slides.length ? swiperRef.current.slides.length - 1 : nextIndex;
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
      swiperRef.current.on('slideChange', updateButtonState);
    }
    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChange', updateButtonState);
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
        <Buttons onClick={goPrev} disabled={isBeginning}>◀</Buttons>
        <Buttons onClick={goNext} disabled={isEnd}>▶</Buttons>
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
        {/* 슬라이드들을 정의합니다. */}
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
        <SwiperSlide><AudioCard /></SwiperSlide>
      </Swiper>
    </ContentWrapper>
  );
};

// 컴포넌트를 내보냅니다.
export default Content;
