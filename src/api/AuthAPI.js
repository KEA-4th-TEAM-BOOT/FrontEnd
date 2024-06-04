import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");
const baseURL = import.meta.env.VITE_USER_BASE_URL;
/** CREATE CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
    "Access-Control-Allow-Origin": "*",
  },
});

/** SIGNUP API */
export const signUp = async ({ name, email, password, nickname, userLink }) => {
  const profileUrl =
    "https://kea-boot-postimage.s3.ap-northeast-2.amazonaws.com/profile.png";
  const introduce = "한 줄 소개입니다.";
  const categoryName = "카테고리 1";
  const data = {
    name,
    email,
    password,
    nickname,
    profileUrl,
    userLink,
    introduce,
    categoryName,
  };
  const response = await AuthApi.post(`/api/v1/auth/register`, data);
  return response.data;
};

/** Email-send API */
export const emailSend = async ({ email }) => {
  const data = { email };
  const response = await AuthApi.post(`/api/v1/auth/send-email`, data);
  return response.data;
};

/** Verification API */
export const verification = async ({ email, authNumber }) => {
  const response = await AuthApi.post(`/api/v1/auth/verification`, {
    email,
    authNumber,
  });
  return response.status;
};
/** checkEmail API */
export const checkEmail = async ({ email }) => {
  const response = await AuthApi.get(`/api/v1/auth/check-email/${email}`);
  return response.data;
};

/** checkUserLink API */
export const checkUserLink = async ({ userLink }) => {
  const response = await AuthApi.get(`/api/v1/auth/check-userLink/${userLink}`);
  return response.data;
};
