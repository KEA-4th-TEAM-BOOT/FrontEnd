import React from "react";
import styled from "styled-components";

const FAQContent = () => {
  return (
    <FAQContentWrapper>
      <FAQTitle>FAQ</FAQTitle>
      <Divider />
      <FAQContainer>
        <Question>1. AI 오디오 블로그 서비스는 무엇인가요?</Question>
        <Answer>
          AI 오디오 블로그 서비스는 인공지능 기술을 활용하여 작성된 블로그를
          사용자 선택 음성으로 생성하고 관리하는 서비스입니다.
        </Answer>
      </FAQContainer>
      <FAQContainer>
        <Question>
          2. AI 오디오 블로그 서비스에서 생성된 글의 저작권은 누구에게 있나요?
        </Question>
        <Answer>
          AI 오디오 블로그 서비스에서 생성된 글의 저작권은 사용자에게 있습니다.
          사용자는 생성된 글을 자유롭게 공유하거나 수정할 수 있으며,
          상업적으로도 이용할 수 있습니다. 단, 서비스 제공 업체의 이용약관을
          준수해야 합니다.
        </Answer>
      </FAQContainer>
      <FAQContainer>
        <Question>
          3. 제가 업로드한 파일의 목소리로 AI가 읽어주는 것이 마음에 들지
          않아요. 어떻게 해야 하나요?
        </Question>
        <Answer>
          업로드한 파일의 목소리로 학습된 AI가 읽어주는 것이 마음에 들지 않을
          경우, 새로운 파일을 업로드하여 다시 학습시킬 수 있습니다. 또,
          서비스에서 제공하는 다양한 음성 변환 기능을 이용하여 목소리의 톤이나
          속도 등을 조절할 수도 있습니다.
        </Answer>
      </FAQContainer>
      <FAQContainer>
        <Question>
          4. 제가 작성한 블로그를 다른 사람들과 공유하고 싶어요. 어떻게 해야
          하나요?
        </Question>
        <Answer>
          작성한 블로그를 다른 사람들과 공유하기 위해서는 서비스에서 제공하는
          공유 기능을 이용하면 됩니다. 공유 기능을 이용하면, 자신의 블로그를
          SNS나 이메일 등을 통해 다른 사람들에게 전달할 수 있습니다. 또,
          블로그의 주소를 복사하여 다른 웹사이트나 블로그에 링크를 걸 수도
          있습니다.
        </Answer>
      </FAQContainer>
      <FAQContainer>
        <Question>
          5. 오디오 블로그를 운영하는 데 필요한 기술이나 도구는 무엇인가요?
        </Question>
        <Answer>
          녹음 및 편집 도구, 웹사이트 호스팅, 오디오 플레이어가 필요합니다.
        </Answer>
      </FAQContainer>
      <Divider />
    </FAQContentWrapper>
  );
};

export default FAQContent;

const FAQContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 50px 20px;
  box-sizing: border-box;
`;

const FAQTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 0;
  color: #0096ff;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
`;

const FAQContainer = styled.div`
  algin-self: center;
  background-color: #e4f0ff;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

const Question = styled.h2`
  font-size: 20px;
  color: #000;
  margin-bottom: 10px;
  margin: 20px 25px;
`;

const Answer = styled.h2`
  font-size: 17px;
  color: #555;
  line-height: 2;
  margin: 20px 40px;
`;
