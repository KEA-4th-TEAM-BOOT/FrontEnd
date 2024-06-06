import { useState, useEffect, useRef } from "react";
import AWS from "aws-sdk";
import styled from "styled-components";
import AddThumbNailIcon from "../../assets/img/icons/addthumbnail.svg";
import UploadButtonIcon from "../../assets/img/icons/uploadbutton.svg";
import { create_post } from "../../api/PostAPI";
import { useRecoilValue } from "recoil";
import { increase_count } from "../../api/UserAPI";
import { UserProfileState, isUserId } from "../../recoil/user";
import { useNavigate } from "react-router-dom";

const categories = ["카테고리1", "카테고리2", "카테고리3", "전체"];
const tags = ["경제", "주식", "돈", "금융"];

const REGION = import.meta.env.VITE_AWS_S3_BUCKET_REGION;
const ACCESS_KEY = import.meta.env.VITE_AWS_S3_BUCKET_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_S3_BUCKET_SECRET_ACCESS_KEY;

const UploadSection = (props) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const userInfo = useRecoilValue(UserProfileState);
  const userId = useRecoilValue(isUserId);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null); // S3 URL 상태 추가
  const [selectedSubject, setSelectedSubject] = useState(""); // 주제 상태 추가
  const [selectedScope, setSelectedScope] = useState(""); // 공개 범위 상태 추가
  const [description, setDescription] = useState(""); // 소개 글 상태 추가
  const fileInputRef = useRef();
  const Title = props.title;
  const Content = props.content;
  const Navigate = useNavigate();

  console.log("userLink : " + userInfo.name);
  console.log("userId : " + userId);
  let personalPostId = userInfo.postCnt;
  personalPostId += 1;
  console.log("Type: " + personalPostId);

  useEffect(() => {
    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    });
  }, []);

  const handleAddTag = (event) => {
    let tag = event.target.value.trim();
    tag = "#" + tag;
    if (event.key === "Enter" && tag) {
      if (selectedTags.length < 4 && !selectedTags.includes(tag)) {
        const updatedTags = [...selectedTags, tag];
        setSelectedTags(updatedTags);
        console.log("Tags: " + updatedTags.join(" ")); // 콘솔에 한 줄로 출력
        event.target.value = "";
      }
    }
  };

  const handleRemoveTag = (index) => {
    const updatedTags = selectedTags.filter((_, i) => i !== index);
    setSelectedTags(updatedTags);
    console.log("Tags: " + updatedTags.join(" ")); // 콘솔에 한 줄로 출력
  };

  const handleThumbnailClick = () => {
    fileInputRef.current.click();
  };

  const handleThumbnailChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
      const url = await uploadToS3(file);
      setThumbnailUrl(url);
      console.log("Uploaded Thumbnail URL:", url);
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

  const onhandleSubmit = async () => {
    try {
      const data = {
        title: Title,
        content: Content,
        thumbnailImageUrl: thumbnailUrl,
        subject: selectedSubject,
        accessibility: selectedScope,
        userLink: userInfo.userLink,
        personalPostId: personalPostId,
        tags: selectedTags,
        thumbnail: description, // 소개 글 추가
      };
      console.log("Submitting Data:", data);
      const response = await create_post({ data });
      await increase_count(userId);
      console.log("post수가 증가되었습니다.");
      console.log(response);
      alert("업로드 되었습니다.");
      Navigate(`/${userInfo.userLink}/post/${personalPostId}`);
    } catch (error) {
      console.error("포스트 작성 실패:", error);
    }
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleScopeChange = (event) => {
    setSelectedScope(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <UploadSectionWrapper>
      <UploadOptionLeft>
        <UploadOptionRow>
          <UploadOptionItem>
            <OptionTitle>공개 범위</OptionTitle>
            <RadioGroup>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="range"
                  value="PUBLIC"
                  onChange={handleScopeChange}
                />
                전체 공개
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="range"
                  value="FOLLOWER_ONLY"
                  onChange={handleScopeChange}
                />
                팔로워 공개
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="range"
                  value="PRIVATE"
                  onChange={handleScopeChange}
                />
                비공개
              </RadioLabel>
            </RadioGroup>
          </UploadOptionItem>
          <UploadOptionItem>
            <OptionTitle>음성 추가</OptionTitle>
            <SelectVoiceModel>
              {userInfo.voiceModelUrl && (
                <option>{userInfo.name}님의 음성모델</option>
              )}
              <option>기본 음성모델1</option>
              <option>기본 음성모델2</option>
            </SelectVoiceModel>
          </UploadOptionItem>
        </UploadOptionRow>
        <Divider />
        <UploadOptionRow>
          <UploadOptionItem>
            <OptionTitle>카테고리</OptionTitle>
            <SelectCategory>
              {categories.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </SelectCategory>
          </UploadOptionItem>
          <UploadOptionItem>
            <OptionTitle>태그 추천</OptionTitle>
            <TagContainer>
              {tags.map((tag, index) => (
                <Tag key={index}># {tag}</Tag>
              ))}
            </TagContainer>
          </UploadOptionItem>
        </UploadOptionRow>
        <Divider />
        <UploadOptionRow>
          <UploadOptionItem>
            <OptionTitle>주제</OptionTitle>
            <SelectSubject>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="subject"
                    value="라이프"
                    onChange={handleSubjectChange}
                  />
                  라이프
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="subject"
                    value="문화"
                    onChange={handleSubjectChange}
                  />
                  문화
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="subject"
                    value="여행"
                    onChange={handleSubjectChange}
                  />
                  여행
                </RadioLabel>
              </RadioGroup>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="subject"
                    value="스포츠"
                    onChange={handleSubjectChange}
                  />
                  스포츠
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="subject"
                    value="시사"
                    onChange={handleSubjectChange}
                  />
                  시사
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="subject"
                    value="기타"
                    onChange={handleSubjectChange}
                  />
                  기타
                </RadioLabel>
              </RadioGroup>
            </SelectSubject>
          </UploadOptionItem>
          <UploadOptionItem>
            <OptionTitle>태그 작성</OptionTitle>
            <EnrollTag>
              {selectedTags.map((tag, index) => (
                <Tag key={index}>
                  {tag}
                  <RemoveTagButton onClick={() => handleRemoveTag(index)}>
                    x
                  </RemoveTagButton>
                </Tag>
              ))}
              {selectedTags.length < 4 && (
                <TagInput placeholder="입력" onKeyPress={handleAddTag} />
              )}
            </EnrollTag>
          </UploadOptionItem>
        </UploadOptionRow>
        <UploadOptionDownItem>
          <OptionTitle>글 설명</OptionTitle>
          <DescriptionTextarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="이 글에 대한 짧은 소개를 작성하세요."
          />
        </UploadOptionDownItem>
      </UploadOptionLeft>

      <UploadOptionRight>
        <ThumbnailButton onClick={handleThumbnailClick}>
          {thumbnail ? (
            <ThumbnailImageContainer>
              <ThumbnailImage src={thumbnail} alt="Thumbnail" />
            </ThumbnailImageContainer>
          ) : (
            <img src={AddThumbNailIcon} alt="Add Thumbnail" />
          )}
          <FileInput
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleThumbnailChange}
          />
        </ThumbnailButton>
        <UploadButton onClick={onhandleSubmit}>
          <img src={UploadButtonIcon} alt="Upload" />
        </UploadButton>
      </UploadOptionRight>
    </UploadSectionWrapper>
  );
};

export default UploadSection;

const UploadSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #f2f5ff;
`;

const UploadOptionLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const UploadOptionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadOptionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

const UploadOptionItem = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
`;

const UploadOptionDownItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
`;

const OptionTitle = styled.h4`
  font-size: 15px;
  margin-right: 20px;
  width: 80px;
  white-space: nowrap;
  text-align: left;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  white-space: nowrap;
`;

const SelectSubject = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  font-size: 11px;
  margin: 5px 0;
`;

const RadioInput = styled.input`
  margin-right: 5px;
  white-space: nowrap;
`;

const SelectVoiceModel = styled.select`
  padding: 8px;
  font-size: 11px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  white-space: nowrap;
`;

const SelectCategory = styled.select`
  padding: 8px;
  font-size: 11px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: auto;
  white-space: nowrap;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const EnrollTag = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  max-width: 350px;
`;

const TagInput = styled.input`
  font-size: 11px;
  border: none;
  outline: none;
  background: none;
`;

const RemoveTagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 11px;
`;

const ThumbnailButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 30px;
`;

const ThumbnailImageContainer = styled.div`
  width: 192.551px;
  height: 192.551px;
  border: 0.812px solid #7a7a7a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #ccc;
  margin: 10px0;
`;

const FileInput = styled.input``;

const DescriptionTextarea = styled.textarea`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;
