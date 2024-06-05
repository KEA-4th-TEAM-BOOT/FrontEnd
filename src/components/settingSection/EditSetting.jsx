import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AWS from "aws-sdk";
import CategoryEdit from "./CategoryEdit";
import { updateUser } from "../../api/UserAPI";
import VoiceFile from "./VoiceFile";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserProfileState, UserData } from "../../recoil/user";

const REGION = import.meta.env.VITE_AWS_S3_BUCKET_REGION;
const ACCESS_KEY = import.meta.env.VITE_AWS_S3_BUCKET_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_S3_BUCKET_SECRET_ACCESS_KEY;

const EditSetting = () => {
  const voiceFileUrl = "https://youtu.be/UOY-WsXkgTI?si=9UHO67R3mUWy9yOJ";
  const userInfo = useRecoilValue(UserProfileState);
  const setUserData = useSetRecoilState(UserData);
  const [profileImage, setProfileImage] = useState(userInfo.profileUrl || "");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [userNickname, setUserNickname] = useState(userInfo.nickname || "");
  const [userIntroduction, setUserIntroduction] = useState(
    userInfo.introduce || ""
  );
  const [userVoiceFile, setUserVoiceFile] = useState({
    file: null,
    url: voiceFileUrl,
  });

  const navigate = useNavigate();

  const ImageFileInputRef = useRef(null);
  const VoiceFileInputRef = useRef(null);

  useEffect(() => {
    setProfileImage(userInfo.profileUrl || "");
    setUserNickname(userInfo.nickname || "");
    setUserIntroduction(userInfo.introduce || "");
    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    });
  }, [userInfo]);

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const url = await uploadToS3(file);
      console.log("Uploaded Thumbnail URL:", url);
      setProfileImage(url);
    }
  };

  const handleVoiceFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const voiceUrl = URL.createObjectURL(file);
      setUserVoiceFile({ file, url: voiceUrl });
    }
  };

  const uploadToS3 = async (file) => {
    try {
      const name = Date.now();
      const extension = file.name.split(".").pop(); // 파일 확장자 추출
      const fileName = `post/${name}.${extension}`; // 확장자를 포함한 파일 이름

      const upload = new AWS.S3.ManagedUpload({
        params: {
          ACL: "public-read",
          Bucket: "kea-boot-postimage",
          Key: fileName,
          Body: file,
        },
      });

      const result = await upload.promise();
      return result.Location;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const resetToDefaultImage = () => {
    setProfileImage(
      "https://kea-boot-postimage.s3.ap-northeast-2.amazonaws.com/profile.png"
    );
  };

  const openVoiceFileSelector = () => {
    VoiceFileInputRef.current.click();
  };

  const deleteVoiceFile = () => {
    setUserVoiceFile({ file: null, url: "" });
  };

  const handleUserInfo = async () => {
    try {
      const data = {
        nickname: userNickname,
        introduce: userIntroduction,
        profileUrl: profileImage,
      };
      await updateUser(data);

      alert("변경되었습니다.");
      setUserData((prevUserData) => ({
        ...prevUserData,
        profileUrl: profileImage,
      }));
      navigate("/mypage");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const maxCharLimit = 200;

  const scriptList = [
    "경제는 국민들의 삶의 질을 향상시키는 데 중요한 역할을 합니다.",
    "모든 사람은 평등하고 존엄한 개인으로서의 가치를 지닙니다.",
    "국제 협력 강화와 국제 사회 기여는 국제 질서 유지와 국가 이익 증진에 기여합니다.",
    "오늘 친구와 함께 피크닉에 갔다. 재미있었다.",
    "과학 기술은 우리 삶을 개선하고 세상을 더 나은 곳으로 만드는 잠재력을 가지고 있습니다.",
    "차별과 편견을 없애고 포용적인 사회를 만들어야 합니다.",
    "공기밥을 편의점에서 사도 되겠지? 돈주고 추가할 수 없잖아.",
    "4월 23일 저녁 11시에는 비가 예정되어 있습니다. 우산을 챙기시길 바랍니다.",
  ];

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
            <Value>{userInfo.name}</Value>
          </InfoRow>
          <InfoRow>
            <Label>이메일</Label>
            <Value>{userInfo.email}</Value>
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
            <Value>domain.com/{userInfo.userLink}</Value>
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
        <VoiceFile
          userVoiceFile={userVoiceFile}
          openVoiceFileSelector={openVoiceFileSelector}
          scriptList={scriptList} // scriptList prop 전달
        />

        <ButtonContainer>
          <CompleteButton onClick={handleUserInfo}>확인</CompleteButton>
        </ButtonContainer>
      </SettingContainer>
    </EditProfileContainer>
  );
};

export default EditSetting;

const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 220px 120px;
  margin: 0 auto;
  max-width: 1400px;
  box-sizing: border-box;
`;

const SettingContainer = styled.div`
  padding-left: 10px;
`;

const Title = styled.span`
  color: #000000;
  margin-bottom: 50px;
  font-size: 45px;
  font-weight: bold;
  text-align: left;
  padding-left: 500px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const CompleteButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  color: #3fb0ff;
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;
