import React, { useState } from "react";
import styled from "styled-components";

import categoryIcon from "../../assets/img/icons/homecategoryicon.svg";
import timeIcon from "../../assets/img/icons/hometimeicon.svg";
import speedIcon from "../../assets/img/icons/homespeedicon.svg";
import searchIcon from "../../assets/img/icons/homesearchicon.svg";
import dropdownMenuIcon from "../../assets/img/icons/dropdownicon.svg";

const AutoPlayer = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [selectSpeed, setSelectSpeed] = useState(1);

  const handleCategoryChange = (event) => setSelectCategory(event.target.value);
  const handleTimeChange = (event) => setSelectTime(event.target.value);
  const increaseSpeed = () =>
    setSelectSpeed((prev) => Math.min(2, prev + 0.25));
  const decreaseSpeed = () =>
    setSelectSpeed((prev) => Math.max(0.75, prev - 0.25));
  const formatSpeed = (speed) => {
    if (speed === 1 || speed === 1.5 || speed === 2) {
      return speed.toString();
    }
    return speed.toFixed(2);
  };

  return (
    <AutoPlayerContainer>
      <LeftSection>
        <Section>
          <MenuWrapper>
            <IconAndMenu>
              <Icon src={categoryIcon} />
              <MenuText>카테고리</MenuText>
            </IconAndMenu>
            <SelectElement
              value={selectCategory}
              onChange={handleCategoryChange}
            >
              <option value="라이프">라이프</option>
              <option value="여행">여행</option>
              <option value="문화">문화</option>
              <option value="IT">IT</option>
              <option value="스포츠">스포츠</option>
              <option value="시사">시사</option>
            </SelectElement>
          </MenuWrapper>
          <MenuWrapper>
            <IconAndMenu>
              <Icon src={timeIcon} />
              <MenuText>예상 시간</MenuText>
            </IconAndMenu>
            <SelectElement value={selectTime} onChange={handleTimeChange}>
              <option value="5분">5분</option>
              <option value="15분">15분</option>
              <option value="30분">30분</option>
              <option value="1시간">1시간</option>
              <option value="2시간">2시간</option>
            </SelectElement>
          </MenuWrapper>
          <MenuWrapper>
            <IconAndMenu>
              <Icon src={speedIcon} />
              <MenuText>배속</MenuText>
            </IconAndMenu>
            {/* <SelectElement value={selectSpeed} onChange={handleSpeedChange}>
              <option value="0.75">0.75</option>
              <option value="보통">보통</option>
              <option value="1.25">1.25</option>
              <option value="1.5">1.5</option>
              <option value="1.75">1.75</option>
              <option value="2">2</option>
            </SelectElement> */}
            <SpeedControls>
              <SpeedButton onClick={decreaseSpeed}>-</SpeedButton>
              <SpeedDisplay>{formatSpeed(selectSpeed)}</SpeedDisplay>
              <SpeedButton onClick={increaseSpeed}>+</SpeedButton>
            </SpeedControls>
          </MenuWrapper>
        </Section>
        <IconAndMenu>
          <Icon src={searchIcon} />
          <MenuText>검색</MenuText>
        </IconAndMenu>
        <SearchInputBox placeholder="검색어를 입력하세요" />
      </LeftSection>
      <PlayButton>
        재생하기
        <InfoText>옵션에 맞는 게시물을 바로 재생</InfoText>
      </PlayButton>
    </AutoPlayerContainer>
  );
};

export default AutoPlayer;

const AutoPlayerContainer = styled.div`
  width: 1000px;
  margin: 150px auto;
  display: flex;
  align-itmes: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 50px 100px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  margin-right: 20px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const MenuWrapper = styled.div`
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 100px;
`;

const IconAndMenu = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const MenuText = styled.span`
  font-size: 20px;
  color: #333;
`;

const SelectElement = styled.select`
  width: 190px;
  padding: 15px 40px 15px 25px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 20px;
  color: #666;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url(${dropdownMenuIcon});
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 20px;
`;

const SpeedControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  width: 190px;
`;

const SpeedButton = styled.button`
  width: 30px;
  height: 30px;
  align-items: center;
  border: none;
  background: white;
  font-size: 20px;
  cursor: pointer;
`;

const SpeedDisplay = styled.div`
  width: 50px;
  text-align: center;
  font-size: 20px;
  margin: 0 15px;
`;

const SearchInputBox = styled.input`
  width: 90%;
  flex-grow: 1;
  padding: 15px 25px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 20px;
  outline: none;
`;

const PlayButton = styled.button`
  min-width: 150px;
  padding: 12px 20px;
  background-color: #9ab3f5;
  color: white;
  font-weight: 900;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

const InfoText = styled.span`
  margin-top: 10px;
  font-size: 15px;
  color: white;
`;
