import React from "react";
import styled from "styled-components";

const ReportModal = ({ closeModal }) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <HeadTitle>문의사항 작성</HeadTitle>
        <Divider />
        <EmailInput placeholder="답변 받을 이메일" />
        <ReportTitleInput placeholder="제목" />
        <ReportContentInput placeholder="내용을 입력하세요" />
        <ReportInfo>
          답변까지 작성일 기준 최대 24시간 소요됩니다. (공휴일 제외)
        </ReportInfo>
        <PostReportBtn onClick={closeModal}>등록하기</PostReportBtn>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ReportModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  cursor: default;
  position: relative;
`;

const HeadTitle = styled.span`
  font-size: 25px;
  font-weight: 550;
  color: black;
  text-align: left;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0 30px 0;
`;

const EmailInput = styled.input`
  font-size: 15px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  outline: none;
`;

const ReportTitleInput = styled.input`
  font-size: 15px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  outline: none;
`;

const ReportContentInput = styled.textarea`
  font-size: 15px;
  padding: 10px;
  height: 150px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  margin-bottom: 5px;
  resize: none;
  outline: none;
  line-height: 2;
`;

const ReportInfo = styled.p`
  font-size: 14px;
  text-align: right;
  color: #666;
  margin-bottom: 30px;
`;

const PostReportBtn = styled.button`
  width: 200px;
  align-self: center;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 1px solid #aaa;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0096ff;
    color: white;
  }
`;
