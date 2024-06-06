import React from "react";
import styled from "styled-components";

const followersData = [
  {
    id: 1,
    username: "Username 1",
    email: "aaaa@gmail.com",
    avatar:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaWksGAUsmDHd-Zmfu6-6TgiH0qtw23poll21guIBMfSvCXsDf",
  },
  {
    id: 2,
    username: "Username 2",
    email: "bbbb@gmail.com",
    avatar:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaWksGAUsmDHd-Zmfu6-6TgiH0qtw23poll21guIBMfSvCXsDf",
  },
  {
    id: 3,
    username: "Username 3",
    email: "cccc@gmail.com",
    avatar:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaWksGAUsmDHd-Zmfu6-6TgiH0qtw23poll21guIBMfSvCXsDf",
  },
  {
    id: 4,
    username: "Username 4",
    email: "dddd@gmail.com",
    avatar:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaWksGAUsmDHd-Zmfu6-6TgiH0qtw23poll21guIBMfSvCXsDf",
  },
];

const followingData = [
  {
    id: 5,
    username: "Username 5",
    email: "eeee@gmail.com",
    avatar:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaWksGAUsmDHd-Zmfu6-6TgiH0qtw23poll21guIBMfSvCXsDf",
  },
];

const Followlist = ({ type, onClose, followingList, followerList }) => {
  const listData = type === "followers" ? followerList : followingList;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{type === "followers" ? "팔로워" : "팔로잉"}</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <UserList>
          {listData.map((user) => (
            <UserItem key={user.id}>
              <Avatar src={user.avatar} alt={user.username} />
              <UserInfo>
                <Username>{user.username}</Username>
                <UserEmail>{user.email}</UserEmail>
              </UserInfo>
              <FollowButton>팔로우</FollowButton>
            </UserItem>
          ))}
        </UserList>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Followlist;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 500px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const UserList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  flex-grow: 1;
`;

const Username = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

const UserEmail = styled.div`
  font-size: 14px;
  color: #777;
`;

const FollowButton = styled.button`
  padding: 6px 12px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
