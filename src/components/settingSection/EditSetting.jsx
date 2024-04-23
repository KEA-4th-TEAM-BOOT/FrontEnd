import React, { useState, useRef } from "react";
import styled from "styled-components";
import CategoryEdit from "./CategoryEdit";

const EditSetting = ({ userInfo }) => {
  const {
    profileImageUrl = "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800",
    name = "홍길동",
    email = "aaaa@gmail.com",
    blogUrl = "aaaa@gmail.com",
    nickname = "바다",
    introduction = "안녕",
    voiceFileUrl = "https://youtu.be/UOY-WsXkgTI?si=9UHO67R3mUWy9yOJ",
  } = userInfo || {};

  const [profileImage, setProfileImage] = useState(profileImageUrl);
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [userNickname, setUserNickname] = useState(nickname);
  const [userIntroduction, setUserIntroduction] = useState(introduction);
  const [userVoiceFile, setUserVoiceFile] = useState({
    file: null,
    url: voiceFileUrl,
  });

  const ImageFileInputRef = useRef(null);
  const VoiceFileInputRef = useRef(null);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleVoiceFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const voiceUrl = URL.createObjectURL(file);
      setUserVoiceFile({ file, url: voiceUrl });
    }
  };

  const resetToDefaultImage = () => {
    setProfileImage(
      "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800"
    );
  };

  const openVoiceFileSelector = () => {
    VoiceFileInputRef.current.click();
  };

  const deleteVoiceFile = () => {
    setUserVoiceFile({ file: null, url: "" });
  };

  const maxCharLimit = 200;

  return (
    <EditProfileContainer>
      <Title>개인 정보 수정</Title>
      <SettingContainer>
        <ProfileSection>
          <ProfileLeft>
            <ProfileTitle>프로필 사진</ProfileTitle>
          </ProfileLeft>
          <ProfileImage src={profileImage} alt="Profile" />
          <ProfileRight>
            <FileInputLabel htmlFor="profile-upload">파일 선택</FileInputLabel>
            <ImageFileInput
              id="profile-upload"
              type="file"
              ref={ImageFileInputRef}
              onChange={handleProfileImageChange}
              accept="image/*"
            />
            <ImageInfo>확장자: png, jpg, jpeg / 최대: 1MB</ImageInfo>
            <ResetButton onClick={resetToDefaultImage}>기본 이미지</ResetButton>
          </ProfileRight>
        </ProfileSection>
        <InformationSection>
          <InfoRow>
            <Label>이름</Label>
            <Value>{name}</Value>
          </InfoRow>
          <InfoRow>
            <Label>이메일</Label>
            <Value>{email}</Value>
          </InfoRow>
          <EditableInfoRow>
            <Label>비밀번호</Label>
            <EditableValue
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </EditableInfoRow>
          <EditableInfoRow>
            <Label>비밀번호 확인</Label>
            <EditableValue
              type="password"
              value={userPasswordConfirm}
              onChange={(e) => setUserPasswordConfirm(e.target.value)}
            />
          </EditableInfoRow>
          <InfoRow>
            <Label>블로그 주소</Label>
            <Value>{blogUrl}</Value>
          </InfoRow>
          <EditableInfoRow>
            <Label>닉네임</Label>
            <NicknameContainer>
              <EditableValue
                type="text"
                value={userNickname}
                onChange={(e) => setUserNickname(e.target.value)}
              />
              <NicknameInfo>
                한글, 영문과 숫자 및 기호 (- _ .) 사용 가능 (3-12자)
              </NicknameInfo>
            </NicknameContainer>
          </EditableInfoRow>
          <EditableInfoRow>
            <Label>한 줄 소개</Label>
            <IntroductionContainer>
              <EditableTextArea
                type="text"
                maxLength={maxCharLimit}
                value={userIntroduction}
                onChange={(e) => setUserIntroduction(e.target.value)}
              />
              <CharacterCount>
                {userIntroduction.length} / {maxCharLimit}
              </CharacterCount>
            </IntroductionContainer>
          </EditableInfoRow>
          <CategorySection>
            <Label>카테고리 편집</Label>
            <CategoryEdit />
          </CategorySection>
          <VoiceFileSection>
            <Label>나의 음성 모델</Label>
            <VoiceContainer>
              <ButtonWrapper>
                <VoiceInputLabel
                  htmlFor="profile-upload"
                  onClick={openVoiceFileSelector}
                >
                  파일 선택
                </VoiceInputLabel>
                <VoiceFileInput
                  id="voice-upload"
                  type="file"
                  ref={VoiceFileInputRef}
                  onChange={handleVoiceFileChange}
                  accept="audio/*"
                  style={{ display: "none" }}
                />
                <DeleteButton onClick={deleteVoiceFile}>파일 삭제</DeleteButton>
              </ButtonWrapper>
              <FileInfo>확장자 : mp3, wav / 용량: 10MB 이하</FileInfo>
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
            </VoiceContainer>
          </VoiceFileSection>
        </InformationSection>
      </SettingContainer>
    </EditProfileContainer>
  );
};

export default EditSetting;

const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  width: 1000px;
`;

const SettingContainer = styled.div`
  padding-left: 10px;
`;

const Title = styled.h2`
  margin-top: 120px;
  color: #000;
  margin-bottom: 50px;
  margin-left: 200px;
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 150px;
  margin-right: 35px;
`;

const ProfileTitle = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 10px;
  background-color: #fff;
  object-fit: cover;
  margin-right: 50px;
`;

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;

const FileInputLabel = styled.label`
  width: 150px;
  background-color: white;
  color: #3fb0ff;
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
`;

const ImageFileInput = styled.input`
  display: none;
`;

const ImageInfo = styled.span`
  font-size: 10px;
  color: #333;
  margin-bottom: 15px;
`;

const ResetButton = styled.button`
  width: 180px;
  background-color: white;
  color: #3fb0ff;
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 15px;
`;

const InformationSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const EditableInfoRow = styled(InfoRow)``;

const Label = styled.span`
  font-size: 20px;
  color: #333;
  margin-right: 35px;
  width: 150px;
  text-align: right;
`;

const EditableValue = styled.input`
  font-size: 16px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 150px - 24px);
  text-align: left;
`;

const Value = styled.span`
  font-size: 16px;
  color: #666;
  width: calc(100% - 150px - 24px);
  text-align: left;
`;

const NicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 150px - 24px);
`;

const NicknameInfo = styled.span`
  font-size: 14px;
  color: #888;
  text-align: left;
  margin-top: 5px;
`;

const IntroductionContainer = styled.div`
  position: relative;
  width: calc(100% - 150px - 24px);
`;

const EditableTextArea = styled.textarea`
  font-size: 16px;
  line-height: 1.2;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  min-height: 70px;
  resize: none;
  box-sizing: border-box;
  font-weight: 500;
`;

const CharacterCount = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 13px;
  color: #888;
  text-align: right;
  margin-top: 5px;
  padding: 2px 20px;
`;

const CategorySection = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const VoiceFileSection = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const VoiceFileInput = styled.input`
  display: none;
`;

const FileDisplayContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const VoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileInfo = styled.span`
  font-size: 15px;
  color: #888;
  text-align: left;
  margin-top: 5px;
`;

const FileDisplayText = styled(FileInfo)`
  margin-top: 0;
  font-weight: 400;
  color: #666;
`;

const PlaceholderText = styled(FileInfo)`
  margin-top: 0;
  font-weight: 400;
  color: #666;
  color: rgba(107, 114, 128);
`;

const VoiceInputLabel = styled.button`
  width: 150px;
  background-color: white;
  color: #3fb0ff;
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 5px;
  margin-right: 50px;
  text-align: center;
`;

const DeleteButton = styled.button`
  width: 150px;
  background-color: white;
  color: #3fb0ff;
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
`;
