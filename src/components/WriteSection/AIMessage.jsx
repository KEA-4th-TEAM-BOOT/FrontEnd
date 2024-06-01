import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

const AIMessage = ({ text, isMarkdown = false }) => {
  const [showMarkdown, setShowMarkdown] = useState(false);

  useEffect(() => {
    if (isMarkdown) {
      const timer = setTimeout(() => {
        setShowMarkdown(true);
      }, text.length * 100); // 각 글자당 100ms로 계산

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }
  }, [text, isMarkdown]);

  return (
    <AIMessageContainer>
      <AIHeader>
        <AILogo
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e6f2a3af1e5019db7ad883169f8270c26688b2f05694aeb2b55260ec7ee07c6?apiKey=a9a9d68966df47cab33790d709ea20f1&"
          alt="VODA AI"
        />
        <Title>VODA AI</Title>
      </AIHeader>
      <AIPrompt>
        {!showMarkdown ? (
          <TypeAnimation
            splitter={(str) => str.split(/(?= )/)}
            sequence={[
              text,
              1000,
              () => setShowMarkdown(true), // 타이핑 애니메이션이 끝나면 마크다운 표시
            ]}
            cursor={true}
            speed={200}
          />
        ) : (
          <ReactMarkdown>{text}</ReactMarkdown>
        )}
      </AIPrompt>
    </AIMessageContainer>
  );
};

export default AIMessage;

const AIMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 21px;
  padding-bottom: 23px;
  color: #000;
`;

const AIHeader = styled.header`
  display: flex;
  gap: 19px;
  font-size: 25px;
  font-weight: 700;
`;

const AILogo = styled.img`
  width: 40px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const Title = styled.h1`
  font-family: Pretendard, sans-serif;
  margin: auto 0;
`;

const AIPrompt = styled.div`
  margin-top: 25px;
  font: 400 14px Pretendard, sans-serif;
`;
