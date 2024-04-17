import React from 'react'
import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/modal";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const setModal = useSetRecoilState(modalState);

    const handleSignUpClick = () => {
        setModal({
            isOpen: false,
            content: "",
            props: {} // 필요한 경우 추가 props 전달
        });
    };

    return (
        <ResetContainer>
            <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0fb7d19420b49620e44ffec33f9f352942121ed9df81e5d43ba13a237c88fde?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="Logo" />
            <ResetContent>
                <Divider />
                <PageTitle>비밀번호 재설정</PageTitle>
                <EmailInputContainer>
                    <EmailInputWrapper>
                       <EmailInput type="email" placeholder="가입하신 이메일 주소를 입력하세요" />
                    </EmailInputWrapper>
                    <SendVerificationButton>인증번호 발송</SendVerificationButton>
                </EmailInputContainer>
                <SignUpPrompt>
                    <SignUpText>회원이 아니신가요?</SignUpText>
                    <SignUpLink to="/singup" onClick={handleSignUpClick}>회원가입</SignUpLink>
                </SignUpPrompt>
            </ResetContent>
        </ResetContainer>
    )
}

const ResetContainer = styled.main`
  border-radius: 5.879px;
  box-shadow: 0px 2.352px 2.352px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 708px;
  padding: 32px 0;
  margin: auto; /* 추가: 자동으로 모든 방향에서 중앙 정렬 */
  margin-top: 15% /* 나중에 전역모달 선언시 삭제 예정 */
`;

const LogoImage = styled.img`
  width: 176px;
  max-width: 100%;
`;

const ResetContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 27px;
  padding: 0 41px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Divider = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.3);
  width: 80%;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PageTitle = styled.h1`
  color: #000;
  align-self: start;
  margin: 39px 0 0 90px;
  font: 24px Syncopate, sans-serif;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const EmailInputContainer = styled.div`
  align-self: center;
  display: flex;
  margin-top: 78px;
  width: 100%;
  max-width: 550px;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const EmailInputWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  color: #000;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  position: relative;
`;


const EmailInput = styled.input`
font-family: Pretendard, sans-serif;
padding: 10px;
border: 1px solid rgba(0, 0, 0, 0.1);
`;

const SendVerificationButton = styled.button`
  justify-content: center;
  border-radius: 8.845px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: #fff;
  color: #131313;
  text-align: center;
  padding: 14px 19px;
  font: 15px Syncopate, sans-serif;
  cursor:pointer;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SignUpPrompt = styled.div`
  align-self: end;
  display: flex;
  gap: 20px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
  margin: 130px 46px 0 0;

  @media (max-width: 991px) {
    margin: 40px 10px 0 0;
  }
`;

const SignUpText = styled.div`
  font-family: Pretendard, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const SignUpLink = styled(Link)`
  font-family: Pretendard, sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

export default ResetPassword