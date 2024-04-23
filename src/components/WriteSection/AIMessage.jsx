import React from 'react'
import styled from 'styled-components'
import { TypeAnimation } from "react-type-animation";
const AIMessage = ({key, text }) => {
    if(key===1) text="글의 대상 독자층은 누구인가요?"
    else if(key===2) text="글의 길이는 어느정도로 작성할까요?"
    else if(key===3) text="글의 제목은 어떤 스타일로 작성할까요?"

    return(
    <AIMessageContainer>
      <AIHeader>
        <AILogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e6f2a3af1e5019db7ad883169f8270c26688b2f05694aeb2b55260ec7ee07c6?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="VODA AI logo" />
        <Title>VODA AI</Title>
      </AIHeader>
      <AIPrompt>
      <TypeAnimation
      splitter={(str) => str.split(/(?= )/)}
  sequence={[
    // Same substring at the start will only be typed once, initially
    text,
    4000,
    
  ]}
  cursor={true}
  speed={20}
/>
      </AIPrompt>
    </AIMessageContainer>
    );
};

export default AIMessage

const AIMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 21px;
  padding-bottom:23px;
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

const AIPrompt = styled.p`
  margin-top: 25px;
  font: 400 14px Pretendard, sans-serif;
`;