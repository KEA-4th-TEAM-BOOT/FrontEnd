import React, { useMemo, useRef, useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import "../assets/editor.css";
import UploadButton from "../assets/img/icons/uploadbutton.svg";
import aiWriteImage from "../assets/img/AiWrite.png";
import QuillImageDropAndPaste from "quill-image-drop-and-paste";
import ImageResize from "quill-image-resize";
import WriteHeader from "../components/WriteSection/WriteHeader";
import UploadSection from "../components/WriteSection/UploadSection";
import AIWrite from "../components/WriteSection/AIWrite";
import AWS from "aws-sdk";

Quill.register("modules/imageDropAndPaste", QuillImageDropAndPaste);
Quill.register("modules/ImageResize", ImageResize);

const REGION = import.meta.env.VITE_AWS_S3_BUCKET_REGION;
const ACCESS_KEY = import.meta.env.VITE_AWS_S3_BUCKET_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_S3_BUCKET_SECRET_ACCESS_KEY;

const Write = ({ username }) => {
  const quillRef = useRef();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const dropDownRef = useRef(null);
  const aiButtonRef = useRef(null);
  const uploadSectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideOpen(!isSideOpen);
    if (!isSideOpen && isOpen) setIsOpen(false); // AI Button과 UploadSection이 동시에 열리지 않도록
  };

  const toggleUploadSection = () => {
    setIsOpen(!isOpen);
    if (!isOpen && isSideOpen) setIsSideOpen(false); // AI Button과 UploadSection이 동시에 열리지 않도록
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const uploadToS3 = async (file) => {
    try {
      const name = Date.now();
      AWS.config.update({
        region: REGION,
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
      });
      const upload = new AWS.S3.ManagedUpload({
        params: {
          ACL: "public-read",
          Bucket: "kea-boot-postimage",
          Key: `post/${name}`,
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

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (file) {
        const url = await uploadToS3(file);
        if (url) {
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", url);
        }
      }
    });
  };

  const imageHandler = async (imageDataUrl, type, imageData) => {
    const file = await imageData.toFile();
    const url = await uploadToS3(file);
    if (url) {
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection(true);
      editor.insertEmbed(range.index, "image", url);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        (!aiButtonRef.current || !aiButtonRef.current.contains(event.target)) &&
        (!uploadSectionRef.current ||
          !uploadSectionRef.current.contains(event.target))
      ) {
        setIsOpen(false);
        setIsSideOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        handlers: {
          image: handleImageUpload,
        },
      },
      imageDropAndPaste: {
        handler: imageHandler,
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
      clipboard: {
        matchVisual: false,
      },
    };
  }, []);

  return (
    <>
      <WriteHeader />
      <EditorDivWrapper>
        <EditorDiv>
          <TitleInput
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
          />
          <ReactQuill
            style={{ height: "590px" }}
            placeholder="당신의 글을 들려주세요"
            theme="snow"
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
          />
        </EditorDiv>
        <AIButtonSection
          isOpen={isOpen}
          ref={aiButtonRef}
          onClick={toggleSidebar}
        >
          <AIButtonImage src={aiWriteImage} />
        </AIButtonSection>
        <Sidebar isSideOpen={isSideOpen}>
          <AIWrite />
        </Sidebar>
      </EditorDivWrapper>

      <UploadContainer isOpen={isOpen} ref={uploadSectionRef}>
        <UploadWrapper>
          {!isOpen && (
            <UploadHeader>
              <UploadHeaderContent>
                <VoiceModelButton onClick={toggleUploadSection}>
                  <VoiceModelIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf28a1ae65431fb5474ce7b914eed5dd3008ce69e040ae6088b2c36bac06f537?apiKey=a9a9d68966df47cab33790d709ea20f1&"
                    alt="Voice Model Icon"
                  />
                  <VoiceModelText>음성모델 추가</VoiceModelText>
                </VoiceModelButton>
                <TagButton onClick={toggleUploadSection}>
                  <TagIcon>#</TagIcon>
                  <TagText>태그 추가</TagText>
                </TagButton>
                <UploadButtonWrapper onClick={toggleUploadSection}>
                  <UploadIcon src={UploadButton} />
                </UploadButtonWrapper>
              </UploadHeaderContent>
            </UploadHeader>
          )}
          {isOpen && <UploadSection username={username} />}
        </UploadWrapper>
      </UploadContainer>
    </>
  );
};

export default Write;

const EditorDivWrapper = styled.div`
  min-width: 70.2vw;
  padding-top: 104px;
  padding-left: 22vw;
  padding-bottom: 82px;
  height: 930px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  justify-content: space-between;
`;

const EditorDiv = styled.div`
  width: 968px;
  display: block;
  height: 775px;
  padding-left: 53px;
  padding-right: 53px;
  background-color: #ffffff;
  position: relative;
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
  position: fixed;
  bottom: ${({ isOpen }) => (isOpen ? "calc(50% - 100px)" : "100px")};
  right: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: bottom 0.3s ease-in-out;
`;

const AIButtonImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 60px;
  height: 55px;
`;

const UploadContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #f2f5ff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  ${({ isOpen }) =>
    isOpen &&
    `
    padding: 0;
  `}
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--Black, #000);
  font-weight: 700;
  text-align: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

const UploadHeader = styled.header`
  background-color: #f2f5ff;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 0;
  gap: 17.93px;
  box-sizing: border-box;
`;

const UploadHeaderContent = styled.div`
  display: flex;
  gap: 17.93px;
  align-items: center;
  margin-right: 55px;
  box-sizing: border-box;
`;

const VoiceModelButton = styled.button`
  display: flex;
  gap: 7px;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`;

const VoiceModelIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const VoiceModelText = styled.span`
  font-size: 15px;
  font-family: Syncopate, sans-serif;
`;

const TagButton = styled.button`
  display: flex;
  gap: 7px;
  padding: 7px 0;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`;

const TagIcon = styled.span`
  font-size: 25px;
`;

const TagText = styled.span`
  font-size: 15px;
  font-family: Syncopate, sans-serif;
`;

const UploadButtonWrapper = styled.div`
  cursor: pointer;
`;

const UploadIcon = styled.img`
  width: 98px;
`;

const Sidebar = styled.aside`
  width: ${(props) => (props.isSideOpen ? "28vw" : "0px")};
  height: 100%;
  background: #f2f5ff;
  float: right;
  transform: translateX(${(props) => (props.isSideOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 0;
`;
