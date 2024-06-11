import React, { useState } from "react";
import styled from "styled-components";
import ReportModal from "./ReportModal";

const Report = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ReportContainer>
      <ReportWrapper>
        <ReportText1>아직 문제가 해결되지 않았나요?</ReportText1>
        <RowWrapper>
          <ReportText2>
            직접 문의해 보세요 최대 24시간 내에 답변해 드립니다.
          </ReportText2>
          <ReportButton onClick={() => setModalOpen(true)}>
            문의하기
          </ReportButton>
          {modalOpen && <ReportModal closeModal={() => setModalOpen(false)} />}
        </RowWrapper>
      </ReportWrapper>
    </ReportContainer>
  );
};

export default Report;

const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  margin-bottom: 120px;
  background-color: #e1f3ff;
`;

const ReportWrapper = styled.div`
  width: 50%;
`;

const ReportText1 = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 10px;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ReportText2 = styled.h2`
  font-size: 20px;
  color: #222;
  font-style: bold;
`;

const ReportButton = styled.button`
  background-color: white;
  color: #0096ff;
  border: 1px solid #ccc;
  padding: 0 25px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;

  &:hover {
    background-color: #0096ff;
    color: white;
  }
`;
