import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";

const AIWrite = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null); // 스크롤을 위한 컨테이너 참조
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessages = messages.concat({ type: "user", text: userInput });
    // 여기서 AI 응답을 생성하는 로직을 추가할 수 있습니다.
    const aiResponse = `AI가 "${userInput}"에 대해 응답합니다.`;
    setMessages(newMessages.concat({ type: "ai", text: aiResponse }));
    setUserInput(""); // 입력 필드 초기화
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      // 스크롤을 맨 아래로 이동
      container.scrollTop = container.scrollHeight;
    });

    // observer를 설정하여 AIPrompt 내부의 모든 변화를 감지
    observer.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 observer 해제
  }, []);
  return (
    <ChatBotBox>
      <MessageList ref={containerRef}>
        <AIMessage
          messageType="0"
          text="어떤 주제로 블로그의 글을 작성할까요?"
        />
        {messages.map((message, index) =>
          message.type === "user" ? (
            <UserMessage key={index} text={message.text} />
          ) : (
            <AIMessage key={index} messageType={index} text={message.text} />
          )
        )}
      </MessageList>
      <MessageForm onSubmit={handleSubmit}>
        <MessageInput value={userInput} onChange={handleInput}></MessageInput>
      </MessageForm>
    </ChatBotBox>
  );
};

export default AIWrite;

const MessageList = styled.div`
  padding-top: 26px;
  padding-left: 35px;
  flex-grow: 1;
  overflow-y: auto;
`;

const ChatBotBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const MessageForm = styled.form`
  border-top: 1px solid #f0f0f0;
  padding-top: 45px;
  padding-bottom: 40px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

const MessageInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;
