import React, { useState } from "react";
import styled from "styled-components";
import AddThumbNailIcon from "../../assets/img/icons/addthumbnail.svg";
import UploadButtonIcon from "../../assets/img/icons/uploadbutton.svg";

const categories = ["시사", "생활", "스포츠", "기타"];
const tags = ["경제", "주식", "돈", "금융"];

const UploadSection = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const fileInputRef = React.createRef();

  const handleAddTag = (event) => {
    if (event.key === "Enter" && event.target.value) {
      setSelectedTags([...selectedTags, event.target.value]);
      event.target.value = "";
    }
  };

  const handleRemoveTag = (index) => {
    setSelectedTags(selectedTags.filter((_, i) => i !== index));
  };

  const handleThumbnailClick = () => {
    fileInputRef.current.click();
  };

  return (
    <UploadSectionWrapper>
      <UploadOptionLeft>
        <UploadOptionRow>
          <UploadOptionItem>
            <OptionTitle>공개 범위</OptionTitle>
            <RadioGroup>
              <RadioLabel>
                <RadioInput type="radio" name="range" value="전체 공개" />
                전체 공개
              </RadioLabel>
              <RadioLabel>
                <RadioInput type="radio" name="range" value="팔로워 공개" />
                팔로워 공개
              </RadioLabel>
              <RadioLabel>
                <RadioInput type="radio" name="range" value="비공개" />
                비공개
              </RadioLabel>
            </RadioGroup>
          </UploadOptionItem>
          <UploadOptionItem>
            <OptionTitle>음성 추가</OptionTitle>
            <SelectVoiceModel>
              <option>파인애플님의 음성모델</option>
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
                  <RadioInput type="radio" name="subject" value="라이프" />
                  라이프
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type="radio" name="subject" value="문화" />
                  문화
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type="radio" name="subject" value="여행" />
                  여행
                </RadioLabel>
              </RadioGroup>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput type="radio" name="subject" value="스포츠" />
                  스포츠
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type="radio" name="subject" value="시사" />
                  시사
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type="radio" name="subject" value="기타" />
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
                  # {tag}
                  <RemoveTagButton onClick={() => handleRemoveTag(index)}>
                    x
                  </RemoveTagButton>
                </Tag>
              ))}
              <TagInput placeholder="입력" onKeyPress={handleAddTag} />
            </EnrollTag>
          </UploadOptionItem>
        </UploadOptionRow>
      </UploadOptionLeft>
      <UploadOptionRight>
        <ThumbnailButton onClick={handleThumbnailClick}>
          <img src={AddThumbNailIcon} alt="Add Thumbnail" />
          <FileInput
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </ThumbnailButton>
        <UploadButton>
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
  height: 280px;
  background-color: #f2f5ff;
`;

const UploadOptionLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;

const UploadOptionRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UploadOptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: nowrap;
`;

const UploadOptionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
`;

const OptionTitle = styled.h4`
  font-size: 15px;
  margin-right: 20px;
  white-space: nowrap;
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
`;

const ThumbnailButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

const FileInput = styled.input``;
