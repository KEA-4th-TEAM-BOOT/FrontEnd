import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");
const baseURL = process.env.REACT_APP_USER_BASE_URL;
/** CREATE CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
    "Access-Control-Allow-Origin": "*",
  },
});

/** LOGIN API */
export const login = async ({ email, password }) => {
  const data = { email, password };
  const response = await AuthApi.post(`/api/v1/auth/login`, data);
  return response.data;
};

/** SIGNUP API */
export const signUp = async ({
  username,
  email,
  password,
  nickname,
  userLink,
}) => {
  const data = { username, email, password, nickname, userLink };
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
