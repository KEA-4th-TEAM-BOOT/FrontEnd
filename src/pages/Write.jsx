import React, { useMemo, useRef, useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import "../assets/editor.css";
import profileImage from "../assets/img/profile.png";
import aiWriteImage from "../assets/img/AiWrite.png"
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/ImageResize", ImageResize);

const Write = () => {
  const quillRef = useRef();
  const [content, setContent] = useState("");
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [category, setCategory] = useState("");
  const [visibility, setVisibility] = useState("");
  const [topic, setTopic] = useState("");
  const [fileImage, setFileImage] = useState(null);
  const [fileAudio, setFileAudio] = useState(null);

  const handleSubmit = (event) => {
    alert();
    console.log(content);
    event.preventDefault();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: 1 }, { header: 2 }],
          [{ header: [3, 4, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image", "video"],
        ],
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
      imageDrop: true,
      clipboard: {
        matchVisual: false,
      },
    };
  }, []);

  return (
    <>
    <HeaderWrapper>
      <HeaderContent>
        <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/543de14573fe9c7c84b4a61f46eb3455b4166ec4754a4652786099ef87fed3a8?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="Logo" />
        <Title>새 게시물 작성</Title>
      </HeaderContent>
      <ProfileImage src={profileImage} alt="Profile" />
    </HeaderWrapper>
      <EditorDivWrppaer>
        <EditorDiv>
          <TitleInput placeholder="제목을 입력하세요" />
          <ReactQuill
            style={{ height: "590px", border: "none" }}
            placeholder="Quill Content"
            theme="snow"
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
          />
        </EditorDiv>
        <WriteButton onClick={() => setIsOpen(!isOpen)}>작성</WriteButton>
        <AIButtonImage src={aiWriteImage} />  
      </EditorDivWrppaer>
      <UploadContainer>
      <UploadHeader>
        <UploadHeaderContent>
          <VoiceModelButton>
            <VoiceModelIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf28a1ae65431fb5474ce7b914eed5dd3008ce69e040ae6088b2c36bac06f537?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="Voice Model Icon" />
            <VoiceModelText>음성모델 추가</VoiceModelText>
          </VoiceModelButton>
          <TagButton>
            <TagIcon>#</TagIcon>
            <TagText>태그 추가</TagText>
          </TagButton>
          <UploadButtonWrapper>
      <UploadIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/2748014229f70fd255044c5ab3356e2e4a8826c78e73e590eb2a6846b14227e3?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="Upload icon" />
      <UploadText>업로드</UploadText>
    </UploadButtonWrapper>
        </UploadHeaderContent>
      </UploadHeader>
    </UploadContainer>
    </>
  );
};

export default Write;

const HeaderWrapper = styled.header`
  border-bottom: 1px solid rgba(228, 228, 228, 1);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 53px 5px 0;
  
  @media (max-width: 991px) {
    padding: 5px 20px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Logo = styled.img`
  width: 98px;
  padding-left: 53px;
  aspect-ratio: 2.63;
  object-fit: contain;
`;

const Title = styled.h1`
  font-family: Syncopate, sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const ProfileImage = styled.img`
  width: 51px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
`;

const EditorDivWrppaer = styled.div`
  min-width: 1280px;
  margin:102px auto;
  height: 930px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative; // 이 위치에 relative 추가
`;

const EditorDiv = styled.div`
  width: 968px;
  height: 775px;
  padding-left: 53px;
  padding-right: 53px;
  background-color: #ffffff;
`;

const TitleInput = styled.input`
  width: 100%;
  border-width: 0;
  height: 52px;
  margin-top: 28px;
  margin-bottom: 70px;
  font-size: 41px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const AIButtonImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;  
`;


const WriteForm = styled.form`
  width: 500px;
  height: 450px;
  padding: 0;
  margin: 0;
  background: white;
  border-radius: 20px;
  border: 1px solid;
  position: absolute;
  bottom: 23px;
  left: 59%;
  display: ${(props) => (props.isOpen ? "table" : "none")};
`;

const WriteButton = styled.button`
  border-radius: 20px;
  background-color: transparent;
  font-size: 19px;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--Black, #000);
  font-weight: 700;
  text-align: center;
  justify-content: center;
`;

const UploadHeader = styled.header`
  background-color: #f2f5ff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding: 16px 0;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const UploadHeaderContent = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const VoiceModelButton = styled.button`
  display: flex;
  gap: 7px;
  font-size: 16px;
  margin: auto 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const VoiceModelIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 29px;
`;

const VoiceModelText = styled.span`
  font-family: Syncopate, sans-serif;
  margin: auto 0;
`;

const TagButton = styled.button`
  align-self: start;
  display: flex;
  gap: 7px;
  padding: 7px 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const TagIcon = styled.span`
  font: 27px Pretendard, sans-serif;
`;

const TagText = styled.span`
  font: 16px Syncopate, sans-serif;
  margin: auto 0;
`;

const UploadButtonWrapper = styled.button`
  border-radius: 22.655px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #fff;
  display: flex;
  gap: 14px;
  font-size: 16px;
  color: #000;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  padding: 6px 17px;
  cursor: pointer;
`;

const UploadIcon = styled.img`
  width: 23px;
  height: 23px;
  object-fit: contain;
`;

const UploadText = styled.span`
  font-family: Syncopate, sans-serif;
  margin: auto 0;
`;