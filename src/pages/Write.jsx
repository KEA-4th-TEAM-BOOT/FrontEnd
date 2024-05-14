import React, { useMemo, useRef, useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import "../assets/editor.css";
import UploadButton from "../assets/img/icons/uploadbutton.svg";
import aiWriteImage from "../assets/img/AiWrite.png";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize";
import WriteHeader from "../components/WriteSection/WriteHeader";
import UploadSection from "../components/WriteSection/UploadSection";
import AIWrite from "../components/WriteSection/AIWrite";
import AWS from "aws-sdk";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/ImageResize", ImageResize);

const REGION = process.env.REACT_APP_AWS_S3_BUCKET_REGION;
const ACCESS_KEY = process.env.REACT_APP_AWS_S3_BUCKET_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_S3_BUCKET_SECRET_ACCESS_KEY;

const Write = () => {
  const quillRef = useRef();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideOpen(!isSideOpen); // isOpen 상태를 토글합니다.
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      //이미지를 담아 전송할 file을 만든다
      const file = input.files?.[0];
      try {
        //업로드할 파일의 이름으로 Date 사용
        const name = Date.now();
        //생성한 s3 관련 설정들
        AWS.config.update({
          region: REGION,
          accessKeyId: ACCESS_KEY,
          secretAccessKey: SECRET_ACCESS_KEY,
        });
        //앞서 생성한 file을 담아 s3에 업로드하는 객체를 만든다
        const upload = new AWS.S3.ManagedUpload({
          params: {
            ACL: "public-read",
            Bucket: "kea-boot-postimage", //버킷 이름
            Key: `post/${name}`,
            Body: file,
          },
        });
        //이미지 업로드 후
        //곧바로 업로드 된 이미지 url을 가져오기
        const IMG_URL = await upload.promise().then((res) => res.Location);
        //useRef를 사용해 에디터에 접근한 후
        //에디터의 현재 커서 위치에 이미지 삽입
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        console.log(error);
      }
    });
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
        handlers: {
          image: imageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
      imageDrop: imageHandler,
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
        <AIButtonSection onClick={toggleSidebar}>
          <AIButtonImage src={aiWriteImage} />
        </AIButtonSection>
        <Sidebar isSideOpen={isSideOpen}>
          <AIWrite />
        </Sidebar>
      </EditorDivWrppaer>

      <UploadForm isOpen={isOpen} ref={dropDownRef}>
        <UploadSection title={title} content={content} />
      </UploadForm>
      <UploadContainer>
        <UploadWrapper>
          <UploadHeader>
            <UploadHeaderContent>
              <VoiceModelButton onClick={() => setIsOpen(!isOpen)}>
                <VoiceModelIcon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf28a1ae65431fb5474ce7b914eed5dd3008ce69e040ae6088b2c36bac06f537?apiKey=a9a9d68966df47cab33790d709ea20f1&"
                  alt="Voice Model Icon"
                />
                <VoiceModelText>음성모델 추가</VoiceModelText>
              </VoiceModelButton>
              <TagButton onClick={() => setIsOpen(!isOpen)}>
                <TagIcon>#</TagIcon>
                <TagText>태그 추가</TagText>
              </TagButton>
              <UploadButtonWrapper onClick={() => setIsOpen(!isOpen)}>
                <UploadIcon src={UploadButton} />
              </UploadButtonWrapper>
            </UploadHeaderContent>
          </UploadHeader>
        </UploadWrapper>
      </UploadContainer>
    </>
  );
};

export default Write;

const EditorDivWrppaer = styled.div`
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
  position: relative; // 여기에 relative를 추가했으므로 AIButtonSection을 이 위치에 고정시킬 수 있습니다.
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
  top: 463px; // 수정할 수 있습니다.
  transform: translateY(-50%); // 세로 중앙 정렬을 위해 사용합니다.
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

const AIButtonImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
`;

const UploadForm = styled.form`
  width: 100%;
  margin: auto; /* 좌우 중앙 정렬 */
  display: flex;
  align-item: center;
  height: 345px;
  padding: 0;
  margin: 0;
  bottom: 0;
  background: #f2f5ff;
  border: 1px solid;
  position: fixed;
  z-index: 10;
  display: ${(props) => (props.isOpen ? "table" : "none")};
`;

const UploadContainer = styled.div`
  position: fixed;
  bottom: 0;
`;

const UploadWrapper = styled.div`
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
  width: 100vw;
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

const UploadButtonWrapper = styled.div`
  cursor: pointer;
`;

const UploadIcon = styled.img`
  width: 100%;
  height: 100%;
  padding-top: 4px;
`;

const Sidebar = styled.aside`
  width: ${(props) => (props.isSideOpen ? "28vw" : "0px")}; // 사이드바의 너비
  height: 100%; // 전체 높이
  background: #f2f5ff; // 배경색
  float: right;
  transform: translateX(
    ${(props) => (props.isSideOpen ? "0" : "100%")}
  ); // 사이드바 토글
  transition: transform 0.3s ease-in-out; // 부드러운 애니메이션 효과
  z-index: 0; // 다른 요소들 위에 표시
`;
