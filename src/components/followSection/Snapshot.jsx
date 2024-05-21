import React, { useRef, useState } from "react";
import styled from "styled-components";
import Photocard from "../card/Photocard";

export const PhotocardData = [
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
  {
    profileImage: "https://i1.sndcdn.com/artworks-vLYQaFqYCbK9-0-t500x500.jpg",
    username: "핵터지면사망",
    postTime: "16시간",
    postTitle: "맑은 하늘 상쾌한 공기",
    postImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1SdeyxLRIzdc-CJVnG17RGqRGspcWgkeKnoFBzTyRm-unhlS5",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_lpWvh-FTIeKkJ8uHp-rYy_qjtN_kTK4uD-cGE0t0ci7m_cSY",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmSCczu0yH70qwudKuMDzi91VEILk0J5zB9ngDZjTfM5aEUAJY",
    ],
    postContent:
      "구름 한 점 없는 눈부신 하늘이 활짝 펼쳐져 있습니다. 상쾌한 공기가 폐부를 가득 채우며 생기를 불어넣어 줍니다. 대지의 고유한 향기가 코끝을 스치며 자연의 냄새를 만끽할 수 있습니다",
    commentsCount: 20,
    likesCount: 38,
  },
];

const Snapshot = () => {
  const photocardContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - photocardContainerRef.current.offsetLeft);
    setScrollLeft(photocardContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - photocardContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    photocardContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <SnapshotWrapper>
      <SnapshotTop>
        <SnapshotTitle>스냅샷</SnapshotTitle>
        <SnapshotIntro>
          다양한 사진이 들어간 블로그를 확인해 보세요
        </SnapshotIntro>
      </SnapshotTop>
      <PhotocardContainer
        ref={photocardContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {PhotocardData.map((data, index) => (
          <Photocard key={index} {...data} />
        ))}
      </PhotocardContainer>
    </SnapshotWrapper>
  );
};

export default Snapshot;

const SnapshotWrapper = styled.div`
  padding: 0 120px 220px 120px;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const SnapshotTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const SnapshotTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;

const SnapshotIntro = styled.span`
  font-size: 16px;
  color: #666;
`;

const PhotocardContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  width: 100%;
  flex-wrap: nowrap;
  cursor: grab;
  &.active {
    cursor: grabbing;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
