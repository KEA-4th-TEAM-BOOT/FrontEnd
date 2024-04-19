import React,{useState} from 'react'
import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/modal";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Signup from '../../pages/Signup';

const ResetPassword = () => {
  const setModal = useSetRecoilState(modalState);
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);

  const handleSignUpClick = () => {
    setModal({
      isOpen: true,
      content: Signup,
      props: {} // 필요한 경우 추가 props 전달
    });
  };

  return (
    <ResetContainer>
      <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/9565e099702b1ee404f6921020b6b1b5dcddadd9ff9592d2d29ec55681eec0e9?apiKey=a9a9d68966df47cab33790d709ea20f1&" loading="lazy" alt="Logo" />
      <ResetContent>
        <Divider />
        <PageTitle>비밀번호 재설정</PageTitle>
        <EmailInputContainer>
          <EmailInputWrapper>
            <EmailInput type="email" placeholder="가입하신 이메일 주소를 입력하세요" />
          </EmailInputWrapper>
          <SendVerificationButton onClick={() => setIsVerificationVisible(true)}>인증번호 발송</SendVerificationButton>
          </EmailInputContainer>
          {isVerificationVisible && (
          <VerificationInputContainer>
            <VerificationWrapper>
            <VerificationInput type="text" placeholder="인증번호를 입력하세요" />
            </VerificationWrapper>
            <VerifyButton>인증번호 확인</VerifyButton>
          </VerificationInputContainer>
        )}

        <SignUpPrompt>
          <SignUpText>회원이 아니신가요?</SignUpText>
          <SignUpLink onClick={handleSignUpClick}>회원가입</SignUpLink>
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
`;

const LogoImage = styled.img`
  width: 176px;
  max-width: 100%;
`;

const ResetContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 709px;
  height: 400px;
  margin-top: 27px;

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

const EmailInputWrapper = styled.form`
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

const SignUpPrompt = styled.section`
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

const VerificationInputContainer = styled.div`
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 550px;
  gap: 20px;
  margin-top: 20px; // 인증번호 입력란과 버튼
`;

const VerificationWrapper = styled.div`
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

const VerificationInput = styled.input`
font-family: Pretendard, sans-serif;
padding: 10px;
border: 1px solid rgba(0, 0, 0, 0.1);
`;

const VerifyButton = styled.button`
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

export default ResetPassword