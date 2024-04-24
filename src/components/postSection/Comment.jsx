import React from "react";
import styled from "styled-components";

const Comment = () => {
  const CommentData = [
    {
      nickname: "santo123",
      comment: "사진이 너무 예뻐요",
    },
    {
      nickname: "santo123",
      comment: "사진이 너무 예뻐요",
    },
    {
      nickname: "santo123",
      comment: "사진이 너무 예뻐요",
    },
    {
      nickname: "santo123",
      comment: "사진이 너무 예뻐요",
    },
    {
      nickname: "santo123",
      comment: "사진이 너무 예뻐요",
    },
  ];
  return (
    <CommentWrapper>
      <Title>댓글</Title>
      <Divider />
      <MoreComments>댓글 더보기</MoreComments>
      {CommentData.map((item, index) => (
        <CommentRow key={index}>
          <Nickname>{item.nickname}</Nickname>
          <CommentText>{item.comment}</CommentText>
          <ReplyBtn>답글</ReplyBtn>
          <ReportBtn>신고</ReportBtn>
        </CommentRow>
      ))}
      <WriteComment placeholder="직접 댓글을 작성해보세요" />
      <BtnWrapper>
        <CheckboxLabel>
          <Checkbox type="checkbox" />
          비밀글
        </CheckboxLabel>
        <PostComment>작성</PostComment>
      </BtnWrapper>
    </CommentWrapper>
  );
};

export default Comment;

const CommentWrapper = styled.div`
  margin: 25px 0;
  padding: 15px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Divider = styled.hr`
  margin-top: 15px;
  border: none;
  height: 1px;
  background-color: #eaeaea;
`;

const CommentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Nickname = styled.span`
  font-weight: bold;
  color: #333;
`;

const CommentText = styled.span`
  color: #666;
  flex-grow: 1;
  margin: 0 25px;
`;

const ReplyBtn = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

const ReportBtn = styled(ReplyBtn)`
  color: #ff4757;
`;

const MoreComments = styled.button`
  background: none;
  border: none;
  color: #989494;
  cursor: pointer;
  font-weight: 500;
  display: block;
  margin: 20px auto 20px auto;
  text-align: center;
`;

const WriteComment = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #dadada;
  border-radius: 5px;
  box-sizing: border-box;
  min-height: 90px;
  resize: none;
  font-size: 15px;
  vertical-algin: top;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const SecretPost = styled.button`
  background: none;
  border: none;
  color: #6b6b6b;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 7px;
`;

const PostComment = styled(SecretPost)`
  background-color: #007bff;
  color: white;
  padding: 7px 25px;
  margin-left: 20px;
  border-radius: 5px;
`;
