import React, { useState } from "react";
import styled from "styled-components";
import UploadButtonImg from "../../assets/img/icons/uploadbutton.svg";
import { useNavigate } from "react-router-dom";

const UploadSection = (props) => {
  const [visibility, setVisibility] = useState("public"); // or 'private'
  const [voice, setVoice] = useState("");
  const [category, setCategory] = useState("");
  const [topic, setTopic] = useState("");
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const navigate = useNavigate();

  const onhandleSubmit = () => {
    alert("업로드 되었습니다.");
    navigate("/post1");
  };

  const onhandletag = (e) => {
    if (e.key === "Enter" && tagItem.trim()) {
      // Trim whitespace and check for non-empty string
      const newtagItem = "#" + tagItem;
      e.preventDefault(); // Prevent form submission on Enter key
      submitTagItem(newtagItem);
    }
  };

  const submitTagItem = (newtagItem) => {
    if (newtagItem.trim()) {
      // Again, ensure non-empty input
      let updatedTagList = [...tagList, newtagItem.trim()]; // Trim whitespace and add new tag
      setTagList(updatedTagList);
      setTagItem(""); // Reset input field
    }
  };

  // Add useEffect to log tagList changes
  React.useEffect(() => {}, [tagList]);

  const deleteTagItem = (e) => {
    e.preventDefault();
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  const tags = ["#추천태그1", "#추천태그2", "#추천태그3", "#추천태그4"];

  return (
    <>
      <SectionContainer>
        <SectionWrapper id="section_1">
          <VisibilitySection>
            <VisibilityTitle>공개 범위</VisibilityTitle>
            <input
              type="radio"
              name="visibility"
              value="public"
              checked={visibility === "public"}
              onChange={() => setVisibility("public")}
            />{" "}
            공개
            <input
              type="radio"
              name="visibility"
              value="follow"
              checked={visibility === "follow"}
              onChange={() => setVisibility("follow")}
            />{" "}
            팔로워 공개
            <input
              type="radio"
              name="visibility"
              value="private"
              checked={visibility === "private"}
              onChange={() => setVisibility("private")}
            />{" "}
            비공개
          </VisibilitySection>

          <VoiceSection>
            <VoiceTitle>음성 추가</VoiceTitle>
            <select value={voice} onChange={(e) => setVoice(e.target.value)}>
              <option value="">선택하세요</option>
              <option value="voice1">음성 1</option>
              <option value="voice2">음성 2</option>
              {/* ... more options ... */}
            </select>
          </VoiceSection>
        </SectionWrapper>

        <hr />

        <SectionWrapper id="section_2">
          <CategorySection>
            <CategoryTitle>카테고리</CategoryTitle>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">선택하세요</option>
              <option value="category1">카테고리 1</option>
              <option value="category2">카테고리 2</option>
              {/* ... more options ... */}
            </select>
          </CategorySection>

          <TagRecommendSection>
            <TagRecommendationContainer>
              <TagRecommendationTitle>태그 추천</TagRecommendationTitle>
              <TagList>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>
            </TagRecommendationContainer>
          </TagRecommendSection>
        </SectionWrapper>
        <hr />

        <SectionWrapper id="section_3">
          <TopicSection>
            <TopicTitle>주제</TopicTitle>
            <TopicOptions>
              <TopicOption>
                <input
                  type="radio"
                  name="topic"
                  value="life"
                  checked={topic === "life"}
                  onChange={() => setTopic("life")}
                />{" "}
                라이프
              </TopicOption>
              <TopicOption>
                <input
                  type="radio"
                  name="topic"
                  value="culture"
                  checked={topic === "culture"}
                  onChange={() => setTopic("culture")}
                />{" "}
                문화
              </TopicOption>
              <TopicOption>
                <input
                  type="radio"
                  name="topic"
                  value="travel"
                  checked={topic === "travel"}
                  onChange={() => setTopic("travel")}
                />{" "}
                여행
              </TopicOption>
              <TopicOption>
                <input
                  type="radio"
                  name="topic"
                  value="sport"
                  checked={topic === "sport"}
                  onChange={() => setTopic("sport")}
                />{" "}
                스포츠
              </TopicOption>
              <TopicOption>
                <input
                  type="radio"
                  name="topic"
                  value="column"
                  checked={topic === "column"}
                  onChange={() => setTopic("column")}
                />{" "}
                시사
              </TopicOption>
              <TopicOption>
                <input
                  type="radio"
                  name="topic"
                  value="etc"
                  checked={topic === "etc"}
                  onChange={() => setTopic("etc")}
                />{" "}
                기타
              </TopicOption>
            </TopicOptions>
          </TopicSection>

          <TagWriteSection>
            <TagWriteTitle>태그 작성</TagWriteTitle>
            <TagBox>
              {tagList.map((tagItem, index) => {
                return (
                  <TagItem key={index}>
                    <Text>{tagItem}</Text>
                    <Button onClick={deleteTagItem}>X</Button>
                  </TagItem>
                );
              })}
              <TagInput
                type="text"
                placeholder="입력"
                tabIndex={2}
                onChange={(e) => setTagItem(e.target.value)}
                value={tagItem}
                onKeyPress={onhandletag}
              />
            </TagBox>
          </TagWriteSection>
        </SectionWrapper>
      </SectionContainer>
      <Boxthumb>
        <Innerbox>
          <Inpg type="file" accept="image/*" />
          <Icon />
          <Txtthumb>대표이미지 추가</Txtthumb>
        </Innerbox>
      </Boxthumb>
      <UploadButtonWrapper onClick={onhandleSubmit}>
        <UploadButton src={UploadButtonImg} />
      </UploadButtonWrapper>
    </>
  );
};

export default UploadSection;

const SectionContainer = styled.div`
  width: 1252px;
  height: 239px;
  margin: 53px 257px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  border-bottom: 1px solid;
`;

const VisibilitySection = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  gap: 10px;
`;

const VoiceSection = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  gap: 10px;
`;

const CategorySection = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  gap: 10px;
`;

const TagRecommendSection = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  gap: 10px;
`;

const TopicSection = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  gap: 10px;
`;

const TagWriteSection = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  gap: 10px;
`;

const TopicOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
const TopicOption = styled.label``;

const VisibilityTitle = styled.h2`
  font: 700 17px Pretendard, sans-serif;
`;

const VoiceTitle = styled.h2`
  font: 700 17px Pretendard, sans-serif;
`;

const CategoryTitle = styled.h2`
  font: 700 17px Pretendard, sans-serif;
`;

const TopicTitle = styled.h2`
  font: 700 17px Pretendard, sans-serif;
`;
const TagWriteTitle = styled.h2`
  font: 700 17px Pretendard, sans-serif;
`;

const TagRecommendationContainer = styled.div`
  display: flex;
  gap: 20px;
  color: #000;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const TagRecommendationTitle = styled.h2`
  font: 700 17px Pretendard, sans-serif;
`;

const TagList = styled.div`
  display: flex;
  gap: 20px;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  letter-spacing: 0.92px;
  padding: 3px 1px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Tag = styled.p`
  font-family: Pretendard, sans-serif;
`;

const Boxthumb = styled.div`
  position: absolute;
  bottom: 54px;
  right: 255px;
  display: table;
  width: 237px;
  height: 237px;
  border: 1px solid #f0f0f0;
  background-color: white;
  box-sizing: border-box;
`;

const Innerbox = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const Inpg = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.01;
  cursor: pointer;
`;
const Icon = styled.i`
  display: block;
  margin: 0 auto 8px;
  vertical-align: top;
  width: 18px;
  height: 18px;
  background-position: -220px 0;
  background-image: url(https://t1.daumcdn.net/tistory_admin/static/manage/post-editor/sprites-img-editor-tistory.svg);
  background-size: 400px 100px;
`;

const Txtthumb = styled.span`
  font-size: 12px;
  color: #909090;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  margin: 10px;
  padding: 0 10px;
  border: none;
  border-radius: 10px;

  &:focus-within {
    border-color: tomato;
  }
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  font-size: 13px;
`;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 50%;
`;

const TagInput = styled.input`
  display: inline-flex;
  min-width: 150px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;

const UploadButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const UploadButton = styled.img``;
