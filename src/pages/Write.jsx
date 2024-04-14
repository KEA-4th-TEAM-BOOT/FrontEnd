import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";


const Write = () => {
  const quillRef = useRef()
  const [content, setContent] = useState("")
  // quill에서 사용할 모듈
  // useMemo를 사용하여 modules가 렌더링 시 에디터가 사라지는 버그를 방지
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: 1 }, { header: 2 } ],
          [{ header: [3, 4, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote","code"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image", "video"],
        ],
      },
    }
  }, [])

  return (
    <>
      <WriteBannerDiv>
        <WriteHeading>글쓰기</WriteHeading>
      </WriteBannerDiv>
      <hr />
      <EditorDivWrppaer>
      새 게시글 작성
      <EditorDiv>
        <input placeholder='제목을 입력하세요'/>
        <hr />
        <input placeholder='#을 이용하여 태그를 입력하세요'/>
        <ReactQuill
        style={{height: "400px" }}
        placeholder="Quill Content"
        theme="snow"
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules} 
        />
      </EditorDiv>
      
      </EditorDivWrppaer>
      <button onClick={()=>alert("성공적으로 업로드 되었습니다.")}>업로드</button>
    </>
  )
}

export default Write


const WriteBannerDiv = styled.div`
min-width:1280px;
height:331px;
display: flex;
`;

const WriteHeading = styled.h1`
padding-left:288px;
padding-top:58px;
font-size:83px;
`;

const EditorDivWrppaer= styled.div`
min-width:1280px;
height:720px;
display: flex;
flex-direction: column;
align-items: center;
text-align:left;
`;

const EditorDiv = styled.div`
width:1166px;
background-color: #F3F4FF;
`;