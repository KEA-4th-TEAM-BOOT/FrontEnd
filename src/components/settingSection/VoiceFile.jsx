import React from "react";
import styled from "styled-components";
import resetBtn from "../../assets/img/icons/reseticon.svg";

const VoiceFile = ({
  userVoiceFile,
  openVoiceFileSelector,
  scriptList = [],
}) => {
  return (
    <VoiceFileWrapper>
      <CurrentVoiceContainer>
        <CurrentVoiceTitle>현재 선택된 음성 파일</CurrentVoiceTitle>
        <CurrentVoiceRight>
          <FileDisplayContainer>
            {userVoiceFile.file ? (
              <FileDisplayText>
                {userVoiceFile.file.name} -{" "}
                {(userVoiceFile.file.size / 1024 / 1024).toFixed(2)} MB
              </FileDisplayText>
            ) : (
              <PlaceholderText>음성 파일을 업로드해주세요.</PlaceholderText>
            )}
          </FileDisplayContainer>
          <FileInfo>10MB 이하로 업로드 가능합니다. (mp3, aac, wav)</FileInfo>
        </CurrentVoiceRight>
      </CurrentVoiceContainer>
      <Divider />
      <AddVoiceContainer>
        <LeftSection>
          <AddDisplayContainer onClick={openVoiceFileSelector}>
            AI 학습용 음성 파일 추가
            <br />+
          </AddDisplayContainer>
          <AddInfo>1분 이상의 음성 파일을 업로드해주세요.</AddInfo>
          <AddInfo>잡음이 심한 경우 결과가 불완전할 수 있습니다.</AddInfo>
        </LeftSection>
        <RightSection>
          <ScriptTopSection>
            <RecommendScriptTitle>
              음성파일녹음 추천 스크립트
            </RecommendScriptTitle>
            <ResetButton src={resetBtn} />
          </ScriptTopSection>
          <Divider2 />
          <ScriptContainer>
            {scriptList.map((script, index) => (
              <ScriptRow key={index}>{script}</ScriptRow>
            ))}
          </ScriptContainer>
        </RightSection>
      </AddVoiceContainer>
    </VoiceFileWrapper>
  );
};

export default VoiceFile;

const VoiceFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #f3f4ff;
  border-radius: 10px;
`;

const CurrentVoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CurrentVoiceTitle = styled.span`
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-right: 30px;
`;

const CurrentVoiceRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
`;

const FileDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 250px;
  height: 30px;
  background-color: #f9f9f9;
`;

const FileDisplayText = styled.span`
  font-size: 13px;
  color: #333;
`;

const PlaceholderText = styled.span`
  font-size: 13px;
  color: #aaa;
`;

const FileInfo = styled.span`
  font-size: 8px;
  color: #888;
  text-align: center; /* 가운데 정렬 */
  margin-top: 5px; /* 여백 추가 */
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 17px 0;
`;

const AddVoiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  width: 50%;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const AddDisplayContainer = styled.div`
  width: 200px;
  font-size: 13px;
  color: #333;
  margin-bottom: 17px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f9f9f9;
  display: flex;
  line-height: 30px;
  justify-content: center;
  align-items: center;
`;

const AddInfo = styled.span`
  color: #888;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const ScriptTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RecommendScriptTitle = styled.h3`
  font-size: 8px;
  margin-bottom: 10px;
`;

const ResetButton = styled.img`
  align-self: center;
  cursor: pointer;
  width: 9.7px;
  height: 9.7px;
`;

const Divider2 = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 5px 0;
`;

const ScriptContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5.5px;
`;

const ScriptRow = styled.div`
  font-size: 6.8px;
`;
