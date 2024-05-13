import React from "react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const AIMessage = ({ messageType, text }) => {
  if (messageType === 1) text = "글의 대상 독자층은 누구인가요?";
  else if (messageType === 3) text = "글의 길이는 어느정도로 작성할까요?";
  else if (messageType === 5) text = "글의 제목은 어떤 스타일로 작성할까요?";
  else if (messageType === 7)
    text =
      "작성해주신 내용으로 글을 완성했어요! [초보를 위한 간단 가이드] 오늘 원달러 환율은 어떻게 결정될까요? 1. 세계 경제의 거울, 변동성 가득한 원달러 환율 세계 경제의 중요한 지표 중 하나인 원달러 환율은 하루에도 끊임없이 변동합니다. 이 변동성은 우리 삶에 미묘하게 영향을 미치며, 해외 여행, 수출입, 투자 등 다양한 활동에 영향을 미칩니다. 2. 미국 경제와 금리, 그리고 국제 정세까지: 복합적인 요인들이 움직이다 원달러 환율은 단순히 두 나라의 경제력 비교만으로 설명할 수 없습니다. 미국 경제 성장률, 금리, 국제 정세, 심지어 정치적 상황까지 다양한 요인들이 복합적으로 작용하여 변동하며, 이는 국제 무역과 금융 시장에 큰 영향을 미칩니다. 3. 석유 가격과도 밀접한 관계: 에너지 시장의 변화까지 고려 세계 주요 에너지원인 석유 가격 또한 원달러 환율에 영향을 미칩니다. 석유 가격 상승은 달러화 가치 상승으로 이어지고,";

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
        <TypeAnimation
          splitter={(str) => str.split(/(?= )/)}
          sequence={[
            // Same substring at the start will only be typed once, initially
            text,
            1000,
          ]}
          cursor={true}
          speed={200}
        />
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

const AIPrompt = styled.p`
  margin-top: 25px;
  font: 400 14px Pretendard, sans-serif;
`;
