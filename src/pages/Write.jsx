import React, { useMemo, useRef, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";

const Write = () => {
  const quillRef = useRef();
  const [content, setContent] = useState("");
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [category, setCategory] = useState('');
  const [visibility, setVisibility] = useState('');
  const [topic, setTopic] = useState('');
  const [fileImage, setFileImage] = useState(null);
  const [fileAudio, setFileAudio] = useState(null);

  const handleSubmit = (event) => {
    alert();
    event.preventDefault();
  }

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
    };
  }, []);

  return (
    <>
      <WriteBannerDiv>
        <WriteHeading>글쓰기</WriteHeading>
      </WriteBannerDiv>
      <hr />
      <EditorDivWrppaer>
        새 게시글 작성
        <EditorDiv>
          <TitleInput placeholder='제목을 입력하세요' />
          <hr />
          <TagInput placeholder='#을 이용하여 태그를 입력하세요' />
          <ReactQuill
            style={{ height: "600px", border: "none" }}
            placeholder="Quill Content"
            theme="snow"
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
          />

        </EditorDiv>
        <button onClick={() => setIsOpen(!isOpen)}>
          작성
        </button>
        <WriteForm isOpen={isOpen} onSubmit={handleSubmit} ref={dropDownRef}>
        <label>
          카테고리:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="news">뉴스</option>
            <option value="blog">블로그</option>
            <option value="tutorial">튜토리얼</option>
          </select>
        </label>
        <br />
        <label>
          공개 범위:
          <input type="radio" name="visibility" value="public" checked={visibility === 'public'} onChange={() => setVisibility('public')} /> 전체 공개
          <input type="radio" name="visibility" value="follow" checked={visibility === 'follow'} onChange={() => setVisibility('follow')} /> 팔로우 공개
          <input type="radio" name="visibility" value="private" checked={visibility === 'private'} onChange={() => setVisibility('private')} /> 비공개
        </label>
        <br />
        <label>
          주제:
          <input type="radio" name="topic" value="life" checked={topic === 'life'} onChange={() => setTopic('life')} /> 라이프
          <input type="radio" name="topic" value="culture" checked={topic === 'culture'} onChange={() => setTopic('culture')} /> 문화
          <input type="radio" name="topic" value="travel" checked={topic === 'travel'} onChange={() => setTopic('travel')} /> 여행
          <br />
          <input type="radio" name="topic" value="sport" checked={topic === 'sport'} onChange={() => setTopic('sport')} /> 스포츠
          <input type="radio" name="topic" value="column" checked={topic === 'column'} onChange={() => setTopic('column')} /> 시사
          <input type="radio" name="topic" value="etc" checked={topic === 'etc'} onChange={() => setTopic('etc')} /> 기타

        </label>
        <br />
        <label>
          대표 사진:
          <input type="file" onChange={e => setFileImage(e.target.files[0])} />
        </label>
        <br />
        <label>
          음성 선택:
          <input type="file" onChange={e => setFileAudio(e.target.files[0])} />
        </label>
        <br />
        <button type="submit">업로드</button>
      </WriteForm>
      </EditorDivWrppaer>


    </>
  );
};

export default Write;

const WriteBannerDiv = styled.div`
  min-width: 1280px;
  height: 331px;
  display: flex;
`;

const WriteHeading = styled.h1`
  padding-left: 288px;
  padding-top: 58px;
  font-size: 83px;
`;

const EditorDivWrppaer = styled.div`
  min-width: 1280px;
  height: 930px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative; // 이 위치에 relative 추가
`;

const EditorDiv = styled.div`
  width: 1166px;
  height:930px;
  padding-left: 53px;
  padding-right: 53px;
  background-color: #F3F4FF;
`;

const TitleInput = styled.input`
  width: 100%;
  border-width: 0;
  height: 52px;
  margin-top: 34px;
  margin-bottom: 20px;
  font-size: 52px;
  background-color: transparent;
  &:focus { outline: none; }
`;

const TagInput = styled.input`
  width: 100%;
  border-width: 0;
  font-size: 33px;
  margin-top: 31px;
  margin-bottom: 18px;
  background-color: transparent;
  &:focus { outline: none; }
`;

const WriteForm = styled.form`
  width:500px;
  height:450px;
  padding: 0;
  margin: 0;
  background: white;
  border-radius: 20px;
  position: absolute;
  bottom: 23px;
  left: 59%;
  display: ${props => props.isOpen ? 'table' : 'none'};
`;

