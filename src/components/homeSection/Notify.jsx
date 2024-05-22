import React from "react";
import styled from "styled-components";
import NotifyPostIcon from "../../assets/img/icons/notifyposticon.svg";

const Notify = () => {
  const notifications = [
    {
      type: "post",
      postTime: "몇 분 전",
      comment: "새로운 댓글이 있어요!",
      detail: "유용한 글 감사합니다! 잘 보고가요 🙏",
    },
    {
      type: "post",
      postTime: "방금 전",
      comment: "새로운 댓글이 있어요!",
      detail: "유용한 글 감사합니다! 잘 보고가요 🙏",
    },
    {
      type: "follow",
      followTime: "1시간 전",
      comment: "새로운 팔로우 요청이 있어요!",
      profileImage:
        "https://yt3.googleusercontent.com/cSmkPNUE7M1uypz603v3FKIWydeq_xc-4tm4YQUhUnJ-5S4_1ZUKYG7yuspL-fpTawIyDZx7xPM=s900-c-k-c0x00ffffff-no-rj",
      username: "플레이IT",
    },
    {
      type: "post",
      postTime: "3시간 전",
      comment: "새로운 댓글이 있어요!",
      detail: "유용한 글 감사합니다! 잘 보고가요 🙏",
    },
    {
      type: "post",
      postTime: "5시간 전",
      comment: "새로운 댓글이 있어요!",
      detail: "유용한 글 감사합니다! 잘 보고가요 🙏",
    },
  ];

  return (
    <NotifyWrapper>
      <NotifyTopSection>
        <TitleWrapper>
          <NotifyTitle>알림</NotifyTitle>
          <NotifyCount>{notifications.length}</NotifyCount>
        </TitleWrapper>
        <ButtonWrapper>
          <ResetBtn>새로고침</ResetBtn>
          <CloseBtn>✕</CloseBtn>
        </ButtonWrapper>
      </NotifyTopSection>
      <NotifyContainer>
        {notifications.map((notification, index) => (
          <Notification key={index}>
            {notification.type === "post" ? (
              <>
                <NotificationIconWrapper>
                  <NotificationIcon src={NotifyPostIcon} alt="Post Icon" />
                </NotificationIconWrapper>
                <NotificationContent>
                  <NotificationType>
                    게시글
                    <NotificationTime>{notification.postTime}</NotificationTime>
                  </NotificationType>
                  <NotificationText>{notification.comment}</NotificationText>
                  <NotificationDetail>{notification.detail}</NotificationDetail>
                </NotificationContent>
              </>
            ) : (
              <>
                <ProfileImageWrapper>
                  <ProfileImage src={notification.profileImage} alt="Profile" />
                </ProfileImageWrapper>
                <NotificationContent>
                  <NotificationType>
                    팔로우
                    <NotificationTime>
                      {notification.followTime}
                    </NotificationTime>
                  </NotificationType>
                  <NotificationText>{notification.comment}</NotificationText>
                  <FollowRequest>{notification.username}</FollowRequest>
                  <ActionButtons>
                    <AcceptButton>수락</AcceptButton>
                    <DeclineButton>거절</DeclineButton>
                  </ActionButtons>
                </NotificationContent>
              </>
            )}
          </Notification>
        ))}
      </NotifyContainer>
      <Divider />
      <BlogLogo>Voda</BlogLogo>
    </NotifyWrapper>
  );
};

export default Notify;

const NotifyWrapper = styled.div`
  width: 350px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NotifyTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NotifyTitle = styled.span`
  margin: 0;
  font-size: 16px;
`;

const NotifyCount = styled.span`
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 14px;
  margin-left: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ResetBtn = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 12px;
  margin-right: 12px;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 24px;
  cursor: pointer;
`;

const NotifyContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const Notification = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
`;

const NotificationIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const NotificationIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotificationType = styled.span`
  font-size: 10px;
  color: #888;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

const NotificationText = styled.span`
  margin: 0;
  font-size: 12px;
  color: #333;
  line-height: 20px;
`;

const NotificationDetail = styled.span`
  margin: 4px 0 0 0;
  font-size: 14px;
  color: #888;
`;

const NotificationTime = styled.span`
  font-size: 10px;
  color: #888;
  margin-left: 8px;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const FollowRequest = styled.span`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: var(--text-header, #141414);
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const AcceptButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 4px 16px;
  cursor: pointer;
  font-size: 12px;
`;

const DeclineButton = styled.button`
  background-color: #e0e0e0;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 4px 16px;
  cursor: pointer;
  font-size: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background: #eee;
`;

const BlogLogo = styled.div`
  text-align: center;
  padding: 16px;
  font-size: 16px;
  color: #888;
`;
