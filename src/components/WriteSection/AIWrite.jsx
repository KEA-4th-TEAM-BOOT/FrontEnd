import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";
import { AiWrite } from "../../api/AiServiceAPI";

const AIWrite = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "ai", text: "어떤 주제로 블로그의 글을 작성할까요?" },
  ]);
  const [step, setStep] = useState(0);
  const [subject, setSubject] = useState("");
  const [reader, setReader] = useState("");
  const [length, setLength] = useState("");
  const [style, setStyle] = useState("");
  const [loading, setLoading] = useState(false);

  const containerRef = useRef(null);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { type: "user", text: userInput }];

    if (step === 0) {
      setSubject(userInput);
      newMessages.push({ type: "ai", text: "글의 대상 독자층은 누구인가요?" });
      setStep(1);
    } else if (step === 1) {
      setReader(userInput);
      newMessages.push({
        type: "ai",
        text: "글의 길이는 어느 정도로 작성할까요?",
      });
      setStep(2);
    } else if (step === 2) {
      setLength(userInput);
      newMessages.push({
        type: "ai",
        text: "글의 제목은 어떤 스타일로 작성할까요?",
      });
      setStep(3);
    } else if (step === 3) {
      setStyle(userInput);
      setMessages(newMessages); // 사용자 메시지를 먼저 추가
      setStep(4);
      setLoading(true);
      const responseText = await fetchAIResponse({
        subject,
        reader,
        length,
        style: userInput,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: responseText, isMarkdown: true },
      ]);
      setLoading(false);
      return;
    }

    setMessages(newMessages);
    setUserInput("");
  };

  const fetchAIResponse = async (data) => {
    try {
      const response = await AiWrite({ data });
      return response.text; // 서버 응답이 마크다운 텍스트라고 가정
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "서버에서 응답을 가져오는 중 오류가 발생했습니다.";
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      container.scrollTop = container.scrollHeight;
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [messages]);

  return (
    <ChatBotBox>
      <MessageList ref={containerRef}>
        {messages.map((message, index) =>
          message.type === "user" ? (
            <UserMessage key={index} text={message.text} />
          ) : (
            <AIMessage
              key={index}
              text={message.text}
              isMarkdown={message.isMarkdown}
            />
          )
        )}
        {loading && <AIMessage text="답변 생성 중..." />}
      </MessageList>
      <MessageForm onSubmit={handleSubmit}>
        <MessageInput value={userInput} onChange={handleInput} />
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
