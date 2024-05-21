import * as React from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/modal";
import styled from "styled-components";

function TermsOfService() {
  const setModal = useSetRecoilState(modalState);
  return (
    <TermsContainer>
      <TermsHeader>이용약관</TermsHeader>
      <TermsSection>
        <SectionTitle>제1조 (목적)</SectionTitle>
        <SectionContent>
          본 이용약관은 사용자가 본 웹 블로그를 이용하는데 필요한 권리와 의무를
          명시하고, 서비스 이용과 관련된 제반 사항을 규정함을 목적으로 합니다.
        </SectionContent>
      </TermsSection>
      <TermsSection>
        <SectionTitle>제2조 (약관의 효력 및 변경)</SectionTitle>
        <TermsList>
          <TermItem>
            본 약관은 사용자가 서비스에 가입함과 동시에 효력이 발생합니다.
          </TermItem>
          <TermItem>
            회사는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은
            공지사항을 통해 공지됩니다.
          </TermItem>
        </TermsList>
      </TermsSection>
      <TermsSection>
        <SectionTitle>제3조 (회원가입)</SectionTitle>
        <TermsList>
          <TermItem>
            사용자는 회사가 제공하는 가입 양식에 따라 회원가입을 신청할 수
            있습니다.
          </TermItem>
          <TermItem>
            회사는 사용자의 회원가입 신청을 승인한 후, 회원 ID와 비밀번호를
            발급합니다.
          </TermItem>
        </TermsList>
      </TermsSection>
      <TermsSection>
        <SectionTitle>제4조 (서비스 이용)</SectionTitle>
        <TermsList>
          <TermItem>
            사용자는 회사가 제공하는 서비스를 자유롭게 이용할 수 있습니다.
          </TermItem>
          <TermItem>
            사용자는 서비스를 이용함에 있어, 회사의 이용약관과
            개인정보취급방침을 준수해야 합니다.
          </TermItem>
        </TermsList>
      </TermsSection>
      <ConfirmButtonContainer>
        <ConfirmButton>확인</ConfirmButton>
      </ConfirmButtonContainer>
    </TermsContainer>
  );
}

const TermsContainer = styled.main`
  background-color: var(--Num4, #f3f4ff);
  display: flex;
  flex-direction: column;
  color: #000;
  font-weight: 400;
  padding: 40px 34px 65px 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const TermsHeader = styled.header`
  flex-grow: 1;
  flex-basis: auto;
  gap: 20px;
  text-align: center;
  font: 45px Syncopate, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const TermsSection = styled.section`
  align-self: center;
  margin-top: 62px;
  font: 35px Pretendard, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
`;

const SectionContent = styled.p`
  font-size: 24px;
`;

const TermsList = styled.ol`
  font-size: 24px;
`;

const TermItem = styled.li`
  font-size: 24px;
`;

const ConfirmButtonContainer = styled.footer`
  border: 1px solid #000;
  align-self: flex-end;
  display: flex;
  width: 154px;
  max-width: 100%;
  flex-direction: column;
  font-size: 33px;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  margin: 102px 105px 0 0;
  padding: 8px;
  @media (max-width: 991px) {
    white-space: initial;
    margin: 40px 10px 0 0;
  }
`;

const ConfirmButton = styled.button`
  font-family: Syncopate, sans-serif;
  justify-content: center;
  border-radius: 4.495px;
  background-color: #fff;
  padding: 13px 38px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export default TermsOfService;
