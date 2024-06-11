import styled from "styled-components";

import userAiIcon from "../../assets/img/icons/useraiicon.svg";

const UserMessage = ({ text }) => {
  return (
    <UserMessageContainer>
      <UserHeader>
        <UserLogo src={userAiIcon} loading="lazy" alt="VODA AI Logo" />
        <UserTitle>User</UserTitle>
      </UserHeader>
      <UserPrompt>{text}</UserPrompt>
    </UserMessageContainer>
  );
};

export default UserMessage;

const UserMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 21px;
  padding-bottom: 23px;
  color: #000;
`;

const UserHeader = styled.header`
  display: flex;
  gap: 19px;
  font-size: 25px;
  font-weight: 700;
`;

const UserLogo = styled.img`
  width: 40px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const UserTitle = styled.h1`
  font-family: Pretendard, sans-serif;
  margin: auto 0;
`;

const UserPrompt = styled.p`
  margin-top: 25px;
  font: 400 14px Pretendard, sans-serif;
`;
