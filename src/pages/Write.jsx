import React, { useMemo, useRef, useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import "../assets/editor.css";
import aiWriteImage from "../assets/img/AiWrite.png"
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize";
import WriteHeader from "../components/WriteSection/WriteHeader";
import UploadSection from "../components/WriteSection/UploadSection";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/ImageResize", ImageResize);

const Write = () => {
  const quillRef = useRef();
  const [content, setContent] = useState("");
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <WriteHeader />
      <EditorDivWrppaer>
        <EditorDiv>
          <TitleInput placeholder="제목을 입력하세요" />
          <ReactQuill
            style={{ height: "590px", border: "none" }}
            placeholder="당신의 글을 들려주세요"
            theme="snow"
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
          />
        </EditorDiv>
        <AIButtonSection>
        <AIButtonImage src={aiWriteImage} />
        </AIButtonSection> 
      </EditorDivWrppaer>
      <UploadForm isOpen={isOpen} ref={dropDownRef} >
        <UploadSection />
        </UploadForm>
      <UploadContainer>
      <UploadHeader>
        <UploadHeaderContent>
          <VoiceModelButton onClick={() => setIsOpen(!isOpen)}>
            <VoiceModelIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf28a1ae65431fb5474ce7b914eed5dd3008ce69e040ae6088b2c36bac06f537?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="Voice Model Icon" />
            <VoiceModelText>음성모델 추가</VoiceModelText>
          </VoiceModelButton>
          <TagButton onClick={() => setIsOpen(!isOpen)}>
            <TagIcon>#</TagIcon>
            <TagText>태그 추가</TagText>
          </TagButton>
          <UploadButtonWrapper onClick={() => setIsOpen(!isOpen)}>
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



const EditorDivWrppaer = styled.div`
  min-width: 1280px;
  padding-top:102px;
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

const AIButtonSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;

const AIButtonImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;  
`;


const UploadForm = styled.form`
  width: 100%;
  height: 345px;
  padding: 0;
  margin: 0;
  bottom:0;
  background: #F2F5FF;
  border: 1px solid;
  position: fixed;
  z-index:10;
  display: ${(props) => (props.isOpen ? "table" : "none")};
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
  bottom:0;
  position:absolute;  
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