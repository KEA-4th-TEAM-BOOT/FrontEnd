import React from "react";
import styled from "styled-components";

const SubmittedModal = ({ close }) => {
  return (
    <Overlay onClick={close}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Message>문의사항 등록이 완료되었습니다.</Message>
        <Detail>
          답변까지 작성일 기준 최대 24시간 소요됩니다. (공휴일 제외)
        </Detail>
        <CloseButton onClick={close}>X</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default SubmittedModal;

const Overlay = styled.div`
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
`;

const ModalContainer = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Message = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
`;

const Detail = styled.p`
  font-size: 14px;
  color: #666;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
`;
